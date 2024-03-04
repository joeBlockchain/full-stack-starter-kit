# FullStackStarterKit

This repository is a comprehensive template for starting full-stack web development projects, pre-configured with Next.js, Clerk, Convex, ShadcnUI, and TailwindCSS.

I created this because I needed a quick way to start new projects with all the tools I use regularly. I hope you find it useful too!

## How to Use the FullStackStarterKit

To clone this template and start your own project, follow these instructions.

### Step 1: Clone the Template

```bash
git clone https://github.com/your_username/FullStackStarterKit.git YourNewProjectName
cd YourNewProjectName
```

### Step 2: Initialize Your Project

```bash
rm -rf .git
git init
```

### Step 3: Create a New GitHub Repository

Create a new repository on GitHub for your project. Do not initialize it with any files since your project already includes them.

### Step 4: Link Your Project to the New Repository

```bash
git remote add origin https://github.com/your_username/YourNewProjectName.git
git add .
git commit -m "Initial commit from FullStackStarterKit"
git branch -M main
git push -u origin main
```

### Step 5: Set Up Clerk

1. Visit [Clerk Dashboard](https://dashboard.clerk.com) and create an account or log in.
2. Create a new instance for your project and obtain your Clerk Frontend API Key and Clerk Secret Key.
3. Copy `.env.local.sample` to a new file named `.env.local` and fill in your Clerk keys:

   ```plaintext
   NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api_key
   CLERK_API_KEY=your_clerk_secret_key
   ```

### Step 6: Set Up Convex

1. Run the following command to initialize your Convex development environment:

   ```bash
   npx convex dev
   ```

2. Follow the prompts to configure a new Convex project.
3. The CLI will automatically update your `.env.local` with the necessary Convex configuration.

### Step 7: Install Dependencies

```bash
npm install
```

Or if you're using Yarn:

```bash
yarn
```

### Step 8: Start Developing

With Clerk and Convex configured, and dependencies installed, start the development server:

```bash
npm run dev
```

Or with Yarn:

```bash
yarn dev
```

Visit `http://localhost:3000` to see your application.

## Contributing

We welcome contributions to the FullStackStarterKit! Please see the contribution guidelines for more details.

## License

This project is licensed under the [MIT License](LICENSE).

---

This revised README includes all the necessary steps for users to get started with your FullStackStarterKit, ensuring they can seamlessly set up Clerk and Convex for their projects.
