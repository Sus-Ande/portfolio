const siteMenu = () => {

    //Gets elements from DOM
    const menuButton = document.querySelector('.menu-button')
    const menu = document.querySelector('.menu')

    // Toggle Menu (Växla meny fram och tillbaka)
    const toggleMenu = () => {
        menu.classList.toggle('menu--visible')
        menuButton.classList.toggle('menu-button--close')
    }

    // Create Event 
    menuButton.addEventListener('click', toggleMenu)
}

siteMenu()