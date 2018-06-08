const View = (function() {

    let navbar;

    const init = () => {
        navbar = document.querySelector(".navigation");
        const hamburgerMenu = document.querySelector(".hamburger");

        hamburgerMenu.addEventListener("click", togglerNav);
    };

    const togglerNav = () =>{
        navbar.classList.toggle('toggler-nav');
    };

    return {init};

}());

View.init();