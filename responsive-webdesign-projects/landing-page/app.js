const View = (function() {

    let navbar;

    const init = () => {
        navbar = document.querySelector(".navigation");
        const hamburgerMenu = document.querySelector(".hamburger");

        hamburgerMenu.addEventListener("click", togglerNav);
        //hide navigation when a link is clicked
        navbar.addEventListener('click',e=>{
            if(e.target.tagName === "A") {
                togglerNav();
            }
        });
    };

    const togglerNav = () =>{
        navbar.classList.toggle('toggler-nav');
    };

    return {init};

}());

View.init();