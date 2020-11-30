const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: [
        './*.html',
    ],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                xs: '375px',
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
            },
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            height: {
                '1/10': '10%',
                '2/10': '20%',
                '3/10': '30%',
                '4/10': '40%',
                '5/10': '50%',
                '6/10': '60%',
                '7/10': '70%',
                '8/10': '80%',
                '9/10': '90%',
            },
            maxHeight: {
                '0': '0',
                '1/6': '16.666667%',
                '1/5': '20%',
                '1/4': '25%',
                '1/3': '33.333333%',
                '2/6': '33.333333%',
                '2/5': '40%',
                '1/2': '50%',
                '3/6': '50%',
                '3/5': '60%',
                '2/3': '66.666667%',
                '4/6': '66.666667%',
                '3/4': '75%',
                '4/5': '80%',
                '5/6': '83.333333%',
                '1/10': '10%',
                '2/10': '20%',
                '3/10': '30%',
                '4/10': '40%',
                '5/10': '50%',
                '6/10': '60%',
                '7/10': '70%',
                '8/10': '80%',
                '9/10': '90%',
                'full': '100%',
            },
            width: {
                '0': '0',
                '1/6': '16.666667%',
                '1/5': '20%',
                '1/4': '25%',
                '1/3': '33.333333%',
                '2/6': '33.333333%',
                '2/5': '40%',
                '1/2': '50%',
                '3/6': '50%',
                '3/5': '60%',
                '2/3': '66.666667%',
                '4/6': '66.666667%',
                '3/4': '75%',
                '4/5': '80%',
                '5/6': '83.333333%',
                '1/10': '10%',
                '2/10': '20%',
                '3/10': '30%',
                '4/10': '40%',
                '5/10': '50%',
                '6/10': '60%',
                '7/10': '70%',
                '8/10': '80%',
                '9/10': '90%',
                'full': '100%',
            },
            maxWidth: {
                '0': '0',
                '150': '150px',
                '1/6': '16.666667%',
                '1/5': '20%',
                '1/4': '25%',
                '1/3': '33.333333%',
                '2/6': '33.333333%',
                '2/5': '40%',
                '1/2': '50%',
                '3/6': '50%',
                '3/5': '60%',
                '2/3': '66.666667%',
                '4/6': '66.666667%',
                '3/4': '75%',
                '4/5': '80%',
                '5/6': '83.333333%',
                '1/10': '10%',
                '2/10': '20%',
                '3/10': '30%',
                '4/10': '40%',
                '5/10': '50%',
                '6/10': '60%',
                '7/10': '70%',
                '8/10': '80%',
                '9/10': '90%',
                'full': '100%',
            }
        },
    },
    variants: {
        extend: {
            textOpacity: ['dark']
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
