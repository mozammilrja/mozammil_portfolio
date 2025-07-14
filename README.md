# Mozammil Raja - Frontend Developer Portfolio

A modern, responsive portfolio website built with Next.js and Tailwind CSS, showcasing 3.5+ years of experience in frontend development.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Fast loading with Next.js optimization
- **SEO Ready**: Proper meta tags and semantic HTML
- **Interactive**: Hover effects and smooth scroll navigation

## 🛠️ Tech Stack

- **Framework**: Next.js 13.5
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Typography**: Inter Font
- **Deployment**: Vercel

## 📝 Sections

1. **Hero Section**: Clear headline, contact info, and call-to-action
2. **About**: Professional summary and experience highlights
3. **Projects**: Showcase of 3 featured projects with tech stacks
4. **Tech Stack**: Skills and technologies organized by category
5. **Contact**: Multiple contact methods and contact form

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

1. **Automatic Deployment** (Recommended):
   - Push your code to GitHub
   - Connect your repository to Vercel
   - Vercel will automatically deploy on every push

2. **Manual Deployment**:
   ```bash
   npm install -g vercel
   vercel
   ```

3. **Deploy via Vercel CLI**:
   ```bash
   vercel --prod
   ```

### Environment Setup

No environment variables are required for basic functionality. The website is designed to work out of the box.

## 🎨 Customization

### Colors
The website uses a blue-based color scheme defined in Tailwind CSS. You can customize colors in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        // Add your custom colors
      }
    }
  }
}
```

### Content
Update the following files to customize content:
- `components/Hero.tsx` - Hero section content
- `components/About.tsx` - About section
- `components/Projects.tsx` - Projects data
- `components/TechStack.tsx` - Skills and technologies
- `components/Contact.tsx` - Contact information

### Contact Information
Update contact details in:
- `components/Hero.tsx` (contact cards)
- `components/Contact.tsx` (contact section)
- `components/Footer.tsx` (footer info)

## 📱 Performance

The website is optimized for performance with:
- Next.js automatic code splitting
- Optimized images and assets
- Lazy loading for better initial load time
- Minimal JavaScript bundle size
- CSS optimization with Tailwind

## 🔧 Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Projects.tsx         # Projects showcase
│   ├── TechStack.tsx        # Skills section
│   ├── Contact.tsx          # Contact section
│   └── Footer.tsx           # Footer
├── lib/
│   └── utils.ts             # Utility functions
└── public/                  # Static assets
```

## 📞 Contact

**Mozammil Raja**
- Email: mozammilraja0218@gmail.com
- Phone: +91 8102472325
- GitHub: [mozammilrja](https://github.com/mozammilrja)
- LinkedIn: [mozammil-raja](https://www.linkedin.com/in/mozammil-raja)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js and Tailwind CSS# mozammil_portfolio
