const dropDownComments = document.querySelector(".emptyCommentArea");
const dropBtn = document.getElementById("feedback-btn");


function dropDown() {
    dropDownComments.classList.toggle("filledCommentArea");

    const hdnBtn = '<span class="redText">&lt;</span>Приховати<span class="redText">&gt;</span>';
    const showBtn = '<span class="redText">&lt;</span>Більше відгуків<span class="redText">&gt;</span>';

    if (dropBtn.innerHTML === hdnBtn) {
        dropBtn.innerHTML = showBtn;
    } else {
        dropBtn.innerHTML = hdnBtn;
    }
}

dropBtn.addEventListener("click", dropDown);




function adjustingNavbar () {
        const content = document.getElementById("navMenu");
        const screenWidth = window.innerWidth;
        
        if(screenWidth <= 700){
            content.innerHTML = `<div class="navcontainer">       
            <a id="homeIcon" class="imgNav" href="#"><img class="imgNav" src="images/home.png" alt="homeIcon"></a>
            
            
            <img id="burgerIcon" class="imgNav" src="images/menu.png" alt="">
            
            
                <ul class="navbaritem">
                    <li class="navbaritem-li"><a class="navhover" href="#pricelist">Ціни</a></li>
                    <li class="navbaritem-li"><a class="navhover" href="#feedback">Відгуки</a></li>
                    <li class="navbaritem-li"><a class="navhover" href="#contact">Контакт</a></li>
                </ul>
                </div>`;
        }
        else{
            content.innerHTML = `<div class="navcontainer">        
            <h3 class="nav-engforit"><a href="#">
                <span class="redText"><</span><span class="yellowText">English for IT</span><span class="redText">></span>
            </a></h3>
    
            <!-- Не забути лінки на навігацію -->
    
            <ul class="navbaritem">
                <li class="navbaritem-li"><a class="navhover" href="#pricelist">Ціни</a></li>
                <li class="navbaritem-li"><a class="navhover" href="#feedback">Відгуки</a></li>
                <li class="navbaritem-li"><a class="navhover" href="#contact">Контакт</a></li>
            </ul>
            </div>`;
        }
}
window.addEventListener('resize', adjustingNavbar);

//COOKIES

document.addEventListener("DOMContentLoaded", function() {
    const popupContainer = document.getElementById('popup-container');
    const acceptBtn = document.getElementById('accept-cookies');
    const denyBtn = document.getElementById('deny-cookies');

    const showPopup = () => {
        popupContainer.style.display = 'block';
    };

    const hidePopup = () => {
        popupContainer.style.display = 'none';
    };

    const setCookie = (name, value, days) => {
        const date = new Date();
        date.setTime(date.getTime() + (days * 7 * 24 * 60 * 60 * 1000)); // Cookie expires after 7 days
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    };

    const getCookie = (name) => {
        const cookieName = name + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieArray = decodedCookie.split(';');
        for (let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i];
            while (cookie.charAt(0) == ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(cookieName) == 0) {
                return cookie.substring(cookieName.length, cookie.length);
            }
        }
        return "";
    };

    const checkCookie = () => {
        const cookieAccepted = getCookie('cookiesAccepted');
        if (cookieAccepted === '') {
            showPopup();
        }
    };

    acceptBtn.addEventListener('click', () => {
        setCookie('cookiesAccepted', 'true', 7); // Set cookie for 7 days
        hidePopup();
    });

    denyBtn.addEventListener('click', () => {
        hidePopup();
        // You may choose to handle denying cookies in your application
    });

    checkCookie();
});