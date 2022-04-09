module.exports = {
    content: ['src/pages/**/*.{js,ts,jsx,tsx}', 'src/@core/**/*.{js,ts,jsx,tsx}'],
    media: true, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
}