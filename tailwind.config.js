export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        defaultColor:"#ba68c8",
      },
      fontFamily:{
        space:["Space Grotesk", "sans-serif"],
        schi:["Schibsted Grotesk", "sans-serif"],
        logo:["Kaushan Script", "cursive"]
      }
    },
  },
  daisyui: {
    themes: ["light", "dark", "night", "lemonade"],
  },
  plugins: [
    require('daisyui'),
  ],
}