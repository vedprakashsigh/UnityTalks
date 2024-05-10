# Unity Talks

Welcome to UnityTalks, the ultimate nexus for unified conversations and collaboration. Designed as an inclusive and versatile platform, UnityTalks brings people together, transcending boundaries through seamless communication channels. Engage in vibrant discussions, share ideas, and forge connections effortlessly within this dynamic space. From lively voice/video chats to organized text channels and comprehensive community tools, UnityTalks empowers individuals and groups to convene, collaborate, and build thriving communities. Experience the power of unity in communication, where every conversation leads to new connections and boundless opportunities.

## Getting Started

To get started with UnityTalks, follow these steps:

1. Clone this repository to your local machine:

```bash

git clone https://github.com/vedprakashsigh/UnityTalks

```

2. Install dependencies:

```bash

npm install

```

3. Set up your environment variables by creating a `.env.local` file in the root of the project and adding the following variables:

```plaintext
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

NEXT_PUBLIC_SITE_URL=

DATABASE_URL=
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_URL=
```

Replace the values with your own keys and URLs.

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Features

- **Unified Communication:** Seamlessly communicate with others through various channels including voice chats, text channels, and video calls.
- **Collaborative Environment:** Foster collaboration and teamwork by sharing ideas, discussing projects, and organizing events within the platform.
- **Inclusive Platform:** Designed to be inclusive and welcoming to people from all backgrounds, fostering diversity and inclusivity in conversations.
- **Versatile Tools:** Utilize a range of tools and features to enhance communication and collaboration, including emojis, reactions, and customizable themes.
- **Dynamic Interface:** Enjoy a dynamic and intuitive user interface that makes navigation and interaction easy and enjoyable.

## Technologies Used

- Next.js
- Clerk
- Emoji Mart
- Livekit Components
- Prisma
- Radix UI
- Supabase
- React Query
- UploadThing
- Axios
- TypeScript
- ESLint
- Tailwind CSS
- PostCSS

## Contributing

We welcome contributions from the community! If you'd like to contribute to UnityTalks, please follow these guidelines:

1. Fork the repository and create your branch from `main`.
2. Make your changes and ensure the code follows the project's coding standards.
3. Test your changes thoroughly.
4. Create a pull request with a clear description of your changes and their purpose.

## License

This project is licensed under the [MIT License](LICENSE).

---

**Unity Talks** - Where every conversation leads to new connections and boundless opportunities.
