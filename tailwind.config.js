/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                NotoSerif: ["Noto Serif TC"],
                NotoSans: ["Noto Sans TC"]
            }
        },
    },
    plugins: [],
}
