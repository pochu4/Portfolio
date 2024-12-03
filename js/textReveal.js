// Hero Section Header Name
const header = new SplitType('.hero-header-ani', { types: 'chars' })

gsap.from(header.chars, {
    opacity: 0,
    y: 25,
    duration: 1,
    delay: 0.5,
    ease: "power3.inOut",
    stagger: { amount: 0.7 },
})

// Hero Section Bio
const headerBio = new SplitType('.hero-bio-ani', { types: 'words' })

gsap.from(headerBio.words, {
    opacity: 0,
    y: 25,
    duration: 1,
    delay: 2,
    ease: "power3.inOut",
    stagger: { amount: 1.5 },

})

// Homepage Section Headers
const goalsHeader = new SplitType('.goals-header-ani', { types: 'chars' })

gsap.from(goalsHeader.chars, {
    opacity: 0,
    x: 0,
    duration: 1,
    delay: 1,
    stagger: { amount: 0.7 },
    scrollTrigger: {
        trigger: '.intro',
        start: 'top bottom',
        end: 'bottom 10%',
        toggleActions: 'play none none reverse',
    },
})

const featuredProjHeader = new SplitType('.featured-header-ani', { types: 'chars' })

gsap.from(featuredProjHeader.chars, {
    opacity: 0,
    x: 0,
    duration: 1,
    delay: 1,
    stagger: { amount: 0.7 },
    scrollTrigger: {
        trigger: '.featured-projects_content',
        start: 'top bottom',
        end: 'bottom 10%',
        toggleActions: 'play none none reverse',
    },
})

// Project Text Reveals 
const projectDate = new SplitType('.project-date-ani', { types: 'chars' })

gsap.from(projectDate.chars, {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 2,
    stagger: { amount: 0 },
    scrollTrigger: {
        start: 'top bottom',
        end: 'bottom 10%',
        toggleActions: 'play none none reverse',
    },
})

const projectName = new SplitType('.project-name-ani', { types: 'chars' })

gsap.from(projectName.chars, {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 2,
    stagger: { amount: 0 },
    scrollTrigger: {
        trigger: '.project-name_role',
        start: 'top bottom',
        end: 'bottom 10%',
        toggleActions: 'play none none reverse',
    },
})

const projectRole = new SplitType('.project-role-ani', { types: 'chars' })

gsap.from(projectRole.chars, {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 2,
    stagger: { amount: 0 },
    scrollTrigger: {
        trigger: '.project-name_role',
        start: 'top bottom',
        end: 'bottom 10%',
        toggleActions: 'play none none reverse',
    },
})

const projectDesc = new SplitType('.project-desc-ani', { types: 'chars' })

gsap.from(projectDesc.chars, {
    opacity: 0,
    x: 0,
    duration: 0.25,
    delay: 3,
    stagger: { amount: 1.5 },
    scrollTrigger: {
        trigger: '.project-name_role',
        start: 'top bottom',
        end: 'bottom 10%',
        toggleActions: 'play none none reverse',
    },
})