const arrowRotate = {
    open: { rotate: '-90deg', transition: { type: 'spring', duration: 1, bounce: 0.5 } },
    closed: { rotate: '90deg', transition: { type: 'spring', duration: 1, bounce: 0.5 } },
}

const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2 } },
}

const waterTranslate = {
    hidden: { y: -50 },
    show: { y: 0, transition: { duration: 1.5 } },
}

const slideUp = {
    hidden: { y: '100%' },
    show: { y: 0, transition: { duration: 0.75 } },
    exit: { y: '100%', transition: { duration: 0.75 } }
}

const pageTransition = {
    hidden: { opacity: 0, y: '100%' },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
    exit: { opacity: 0, y: '100%', transition: { duration: 1 } },
}

const homeTransition = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 1 } },
}

export { arrowRotate, fadeIn, waterTranslate, slideUp, pageTransition, homeTransition };