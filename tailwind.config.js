module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#18ad8f',
        secondary: '#3b82f6',
        glass: 'rgba(255,255,255,0.06)'
      },
      fontFamily: {
        sans: ["Lexend", "system-ui", "-apple-system"],
      }
    }
  },
  plugins: []
}
