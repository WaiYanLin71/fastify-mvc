/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js,ejs}"],
  theme: {
    extend: {},
    container:{
      center:true
    },
    screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
  },
  plugins: [],
}