import localFont from 'next/font/local'

const montserrat = localFont({
    src: [
        {
            path: "../assets/fonts/Montserrat-Light.ttf",
            weight: "300",
            style: 'normal',
            fontDisplay: 'swap',
            preload: true,
            fallback: ['system-ui', 'arial'],
            adjustFontFallback: 'Times New Roman'
        },
        {
            path: "../assets/fonts/Montserrat-Regular.ttf",
            weight: "400",
            style: 'normal',
            fontDisplay: 'swap',
            preload: true,
            fallback: ['system-ui', 'arial'],
            adjustFontFallback: 'Times New Roman'
        },
        {
            path: "../assets/fonts/Montserrat-Medium.ttf",
            weight: "500",
            style: 'normal',
            fontDisplay: 'swap',
            preload: true,
            fallback: ['system-ui', 'arial'],
            adjustFontFallback: 'Times New Roman'
        },
        {
            path: "../assets/fonts/Montserrat-SemiBold.ttf",
            weight: "600",
            style: 'normal',
            fontDisplay: 'swap',
            preload: true,
            fallback: ['system-ui', 'arial'],
            adjustFontFallback: 'Times New Roman'
        },
        {
            path: "../assets/fonts/Montserrat-Bold.ttf",
            weight: "700",
            style: 'normal',
            fontDisplay: 'swap',
            preload: true,
            fallback: ['system-ui', 'arial'],
            adjustFontFallback: 'Times New Roman'
        },
        {
            path: "../assets/fonts/Montserrat-ExtraBold.ttf",
            weight: "800",
            style: 'normal',
            fontDisplay: 'swap',
            preload: true,
            fallback: ['system-ui', 'arial'],
            adjustFontFallback: 'Times New Roman'
        },
        {
            path: "../assets/fonts/Montserrat-Black.ttf",
            weight: "900",
            style: 'normal',
            fontDisplay: 'swap',
            preload: true,
            fallback: ['system-ui', 'arial'],
            adjustFontFallback: 'Times New Roman'
        },
    ],
    variable: '--montserrat'
})

const lato = localFont({
    src: [
        {
            path: "../assets/fonts/Lato-Regular.ttf",
            weight: "400",
            style: 'normal',
            fontDisplay: 'swap',
            preload: true,
            fallback: ['system-ui', 'arial'],
            adjustFontFallback: 'Times New Roman'
        }
    ],
    variable: "--lato"
})

const nunito = localFont({
    src: [
        {
            path: "../assets/fonts/Nunito-SemiBold.ttf",
            weight: "600",
            style: 'normal',
            fontDisplay: 'swap',
            preload: true,
            fallback: ['system-ui', 'arial'],
            adjustFontFallback: 'Times New Roman'
        }
    ],
    variable: "--nunito"
})

const figtree = localFont({
    src: [
        {
            path: "../assets/fonts/Figtree-Regular.ttf",
            weight: "400",
            style: 'normal',
            fontDisplay: 'swap',
            preload: true,
            fallback: ['system-ui', 'arial'],
            adjustFontFallback: 'Times New Roman'
        },
        {
            path: "../assets/fonts/Figtree-SemiBold.ttf",
            weight: "600",
            style: 'normal',
            fontDisplay: 'swap',
            preload: true,
            fallback: ['system-ui', 'arial'],
            adjustFontFallback: 'Times New Roman'
        }
    ],
    variable: "--figtree"
})

const oiaFonts = localFont({
    src: [
        {
            path: '../assets/fonts/oia.ttf',
            weight: 'normal',
            style: 'normal',
            fontDisplay: 'swap',
            preload: true,
            fallback: ['system-ui', 'arial'],
            adjustFontFallback: 'Times New Roman'
        }
    ],
    variable: '--oia-font'
})

export { montserrat, lato, nunito, figtree, oiaFonts }