import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
 safelist: [
  // Background colors
  "bg-yellow-200", "bg-yellow-300", "bg-yellow-400",
  "bg-blue-200", "bg-blue-300", "bg-blue-400", "bg-blue-700",
  "bg-orange-200", "bg-orange-300", "bg-orange-400",
  "bg-indigo-200", "bg-indigo-300",
  "bg-purple-200",
  "bg-cyan-200",
  "bg-green-200", "bg-green-300",
  "bg-pink-200", "bg-pink-300",
  "bg-lime-200",
  "bg-emerald-200",
  "bg-teal-200", "bg-teal-300",
  "bg-red-200", "bg-red-300",
  "bg-gray-200", "bg-gray-300",

  // Text colors
  "text-yellow-900", "text-blue-900", "text-orange-900",
  "text-indigo-900", "text-purple-900", "text-cyan-900",
  "text-green-900", "text-pink-900", "text-lime-900",
  "text-emerald-900", "text-teal-900", "text-red-900",
  "text-gray-900", "text-white",

  // Dark mode variants
  "dark:text-white", "dark:text-blue-400",
  "dark:bg-sky-700", "dark:bg-blue-400",

  // Animations you already had
  "animate-bounce", "animate-ping", "animate-pulse",
  "hover:bg-green-700",
],
plugins: [require('tailwindcss-animate')],
  future: {
    hoverOnlyWhenSupported: true, // reduces unnecessary hover styles
  },
};

export default config;
