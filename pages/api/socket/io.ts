import { Server as NetServer } from "http";
import { NextApiRequest } from "next";
import { Server as ServerIO } from "socket.io";
import type { NextApiResponseServerIO } from "@/types";

// 🚫 disable Next.js default body parser (required for socket.io)
export const config = {
  api: {
    bodyParser: false,
  },
};

const ioHandler = (req: NextApiRequest, res: NextApiResponseServerIO) => {
  if (!res.socket.server.io) {
    console.log("🔧 Initializing new Socket.IO server...");

    const httpServer: NetServer = res.socket.server as any;

    const io = new ServerIO(httpServer, {
      path: "/api/socket/io",
      addTrailingSlash: false,
    });

    // socket event listeners
    io.on("connection", (socket) => {
      console.log("✅ Socket connected:", socket.id);

      socket.on("disconnect", (reason) => {
        console.log("❌ Socket disconnected:", socket.id, "Reason:", reason);
      });
    });

    // attach to res.socket.server so it's reused
    res.socket.server.io = io;
  } else {
    console.log("♻️ Reusing existing Socket.IO server");
  }

  res.end();
};

export default ioHandler;
