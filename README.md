# NLFTs Developer Program

> A modern, static website for the NLFTs Developer Program built with Nuxt 3

## 🚀 Features

- ✅ Static website with Nuxt Content
- ✅ Blog posts from markdown files
- ✅ Documentation pages
- ✅ Product showcase
- ✅ Events listing
- ✅ GitHub OAuth login (no database)
- ✅ Responsive design with Nuxt UI
- ✅ Dark mode support
- ✅ SEO optimized

## 📦 Tech Stack

- **Framework:** Nuxt 3
- **UI Library:** Nuxt UI
- **Content:** Nuxt Content
- **Styling:** Tailwind CSS
- **Animations:** GSAP
- **Icons:** Iconify
- **Authentication:** GitHub OAuth (localStorage)

## 🛠️ Setup

### Prerequisites

- Node.js 20+
- pnpm (recommended)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-org/developer-program.git
cd developer-program
```

2. Install dependencies:
```bash
pnpm install
```

3. Setup environment variables:
```bash
cp .env.example .env
```

4. Configure GitHub OAuth:
   - Create a GitHub OAuth App at https://github.com/settings/developers
   - Update `.env` with your credentials
   - See `SETUP_GITHUB_OAUTH.md` for detailed instructions

5. Run development server:
```bash
pnpm dev
```

Visit `http://localhost:3000`

## 📝 Environment Variables

```env
# GitHub Personal Access Token (for API calls)
GITHUB_TOKEN=your_github_personal_access_token

# Site URL
NUXT_PUBLIC_SITE_URL=https://nlfts.dev

# GitHub OAuth Configuration
GITHUB_CLIENT_ID=your_github_oauth_app_client_id
GITHUB_CLIENT_SECRET=your_github_oauth_app_client_secret
NUXT_PUBLIC_GITHUB_CLIENT_ID=your_github_oauth_app_client_id
```

## 🏗️ Build

```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 📚 Documentation

- [Refactor Summary](./REFACTOR_SUMMARY.md) - Overview of recent changes
- [Refactor Notes](./REFACTOR_NOTES.md) - Detailed refactor documentation
- [Setup GitHub OAuth](./SETUP_GITHUB_OAUTH.md) - OAuth setup guide
- [Checklist](./CHECKLIST.md) - Deployment checklist

## 🎨 Project Structure

```
.
├── app/
│   ├── assets/          # CSS and static assets
│   ├── components/      # Vue components
│   ├── composables/     # Vue composables
│   ├── layouts/         # Layout components
│   ├── pages/           # Page components (routes)
│   ├── plugins/         # Nuxt plugins
│   └── utils/           # Utility functions
├── content/             # Markdown content
│   ├── blog/            # Blog posts
│   ├── docs/            # Documentation
│   └── product/         # Product pages
├── public/              # Static files
├── server/              # Server API routes
│   └── api/
│       └── auth/        # Authentication endpoints
└── nuxt.config.ts       # Nuxt configuration
```

## 🔐 Authentication

This website uses a simple GitHub OAuth authentication system:

- User data is stored in **localStorage** (client-side only)
- No database backend
- No persistent storage
- Users must login again after clearing browser data

### Login Flow

1. User clicks "Login" button
2. Redirected to GitHub OAuth
3. After authorization, redirected back to `/confirm`
4. User data fetched from GitHub API
5. Data stored in localStorage
6. User is logged in

## 🚀 Deployment

### Vercel

```bash
vercel
```

Add environment variables in Vercel dashboard.

### Netlify

```bash
netlify deploy
```

Add environment variables in Netlify dashboard.

### Other Platforms

Build the project and deploy the `.output` directory.

## 📄 License

MIT License - see [LICENSE](./LICENSE) for details

## 🤝 Contributing

Contributions are welcome! Please read our [Code of Conduct](./CODE_OF_CONDUCT.md) first.

## 📞 Support

For support, email support@nlfts.dev or join our Discord community.

---

**Made with ❤️ by the NLFTs Team**
