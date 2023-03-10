/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
      ],
    },
    extend: {
      backgroundSize: {
        "100%": "100% 100%",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        "3xl": "1.875rem",
        base: "1rem",
      },
      colors: {
        indigo: {
          500: "#6366F1",
          600: "rgba(88, 80, 236, 1)",
          700: "rgba(81, 69, 205, 1)",
        },
        gray: {
          600: "rgba(75, 85,99, 1)",
          900: "rgba(22, 30, 46, 1)",
        },
        red: {
          500: "rgba(240, 82, 82, 1)",
        },
      },
      boxShadow: {
        "outline-blue": "0 0 0 3px rgb(164 202 254 / 45%)",
        "outline-indigo": "0 0 0 3px rgb(180 198 252 / 45%)",
      },
      // lineHeight: {
      //   5: "1.5rem",
      // },
    },
  },
  plugins: [],
};
