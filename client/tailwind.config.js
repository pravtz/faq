module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "brand": {
          "50": "#77a779",
          "100": "#6d9d6f",
          "200": "#639365",
          "300": "#59895b",
          "400": "#4f7f51",
          "500": "#457547",
          "600": "#3b6b3d",
          "700": "#316133",
          "800": "#275729",
          "900": "#1d4d1f"
        }, 
        "neltral-brand": {
          "50": "#aaaaac",
          "100": "#a0a0a2",
          "200": "#969698",
          "300": "#8c8c8e",
          "400": "#828284",
          "500": "#78787a",
          "600": "#6e6e70",
          "700": "#646466",
          "800": "#5a5a5c",
          "900": "#505052"
        }
      },
      borderRadius: {
        md: '4px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
