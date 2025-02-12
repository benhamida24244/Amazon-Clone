/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        container:"1440px"
      },
      screens: {
        xs:"320px",
        sm:"640px",
        md:"768px",
        lg:"1024px",
        xl:"1280px",
      },
      fontFamily: {
        titleFont : "Roboto",
        bodyFont : "Poppins",
      },
      colors:{
        amazon_blue: "#131921",
        amazon_light: "#232F3E",
        amazon_yellow: "#febd69",
        witheText:"#ffffff",
        lightText:"#ccc",
        quantityBox:"#F0F2F2",
        footerBottom:"#131A22",
      },
      boxShadow: {
        textShadow: "0px 0px 32px 1px rgba(199,199,199,1)",
        amazonInput: "0 0 3px 2px rgb(228 121 17 / 50%)",
      },
    },
  },
  plugins: [],
}