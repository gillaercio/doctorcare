window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activeMenuAtCurrentSection(home)
    activeMenuAtCurrentSection(services)
    activeMenuAtCurrentSection(about)
    activeMenuAtCurrentSection(contact)
}

function activeMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2

    // verificar se a seção passou da linha
    // quais dados vou precisar?
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    // verificar se a base está abaixo da linha alvo
    const sectionEndsAt = sectionTop + sectionHeight
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    // limites da seção
    const sectionBoundaries =
     sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine
    
    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active')
    }
}

function showNavOnScroll() {
    (scrollY > 0) ? navigation.classList.add('scroll') : navigation.classList.remove('scroll');
}

function showBackToTopButtonOnScroll() {
    (scrollY > 400) ? backToTopButton.classList.add('show') : backToTopButton.classList.remove('show');
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
    #home,
    #home img,
    #home .stats,
    #services,
    #services header,
    #services .card,
    #about,
    #about header,
    #about .content,
    #about .content img,
    #contact .wrapper,
    #contact .content,
    footer .wrapper`)