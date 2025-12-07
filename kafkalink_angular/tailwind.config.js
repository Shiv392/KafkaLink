/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb",
          light: "#3b82f6",
          dark: "#1e40af",
        },
        gray: {
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        }
      },
      borderRadius: {
        xl: "14px",
        '2xl': "18px",
      },
      boxShadow: {
        card: "0 4px 14px rgba(0,0,0,0.08)",
        smooth: "0 2px 8px rgba(0,0,0,0.05)",
      }
    }
  },
  plugins: [],
};
