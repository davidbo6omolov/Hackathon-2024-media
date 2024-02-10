/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundColor: {
                'primary': '#0E1217',
                'secondary': '#1C1F26',
                'tertiary': '#383D47',
            },
            backgroundImage: {
                'emptyImage': "linear-gradient(311deg, rgba(23,18,233,0.42) 0%, rgba(237,23,216,1) 100%);",
            },
            borderColor:{
                'primary':'#383D47'
            }
        },
    },
    plugins: [],
}