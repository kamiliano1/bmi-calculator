/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: "hsl(227, 92%, 58%)",
      gunMetal: "hsl(215, 31%, 21%)",
      darkElectricBlue: "hsl(215, 17%, 45%)",
      borders: "hsl(200, 24%, 88%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontSize: {
      XL: [
        "4rem",
        {
          lineHeight: "110%",
          fontWeight: "600",
          letterSpacing: "-3.2px",
        },
      ],
      L: [
        "3rem",
        {
          lineHeight: "110%",
          fontWeight: "600",
          letterSpacing: "-2.4px",
        },
      ],
      XM: [
        "2rem",
        {
          lineHeight: "110%",
          fontWeight: "600",
          letterSpacing: "-1.6px",
        },
      ],
      M: [
        "1.5rem",
        {
          lineHeight: "normal",
          fontWeight: "600",
          letterSpacing: "-1.4px",
        },
      ],
      S: [
        "1.25rem",
        {
          lineHeight: "normal",
          fontWeight: "600",
          letterSpacing: "-1px",
        },
      ],
      "Body-M": [
        "1rem",
        {
          lineHeight: "150%",
          fontWeight: "400",
        },
      ],
      "Body-M-Bold": [
        "1rem",
        {
          lineHeight: "150%",
          fontWeight: "600",
        },
      ],
      "Body-S": [
        ".875rem",
        {
          lineHeight: "150%",
          fontWeight: "400",
        },
      ],
    },
    extend: {},
  },
  plugins: [],
};
