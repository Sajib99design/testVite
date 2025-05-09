import type { Config } from 'tailwindcss'

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "short": { "raw": "(max-height: 700px)" }
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xs: "500px",
        sm: "600px",
        md: "750px",
        lg: "1000px",
        xl: "1250px",
        "2xl": "1400px",
      },
    },
    extend: {},
  },
  plugins: [],
}

export default config
