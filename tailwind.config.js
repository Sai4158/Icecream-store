/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    //This for the responsive screen
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    // this is how you get the custom colors
    // when you place them in the extend floder, the stock colors wont change
    extend: {
      colors: {
        bgColor: "var(--color-BgColor)",
        TextColor: "var(--color-TextColor)",
      },
    },
  },
  plugins: [],
};
