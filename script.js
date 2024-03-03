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

function setCookie(cookieName, cookieValue, expirationDays) {
    var d = new Date();
    d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

// Function to get cookie value
function getCookie(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for (var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

// Function to check if cookie consent is already given
function checkCookieConsent() {
    var cookieConsent = getCookie("cookie_consent");
    if (cookieConsent !== "") {
        return true;
    }
    return false;
}

// Function to handle cookie consent
function handleCookieConsent() {
    var consentButton = document.getElementById("accept-cookies");
    consentButton.addEventListener("click", function() {
        setCookie("cookie_consent", "accepted", 365); // Cookie accepted for 1 year
        document.getElementById("cookie-consent").style.display = "none"; // Hide the consent banner
    });
}

// Check if cookie consent is given, if not, show the consent banner
if (!checkCookieConsent()) {
    document.getElementById("cookie-consent").style.display = "block";
    handleCookieConsent();
}

//SECOND PART COOKIES

document.addEventListener("DOMContentLoaded", function() {
    var acceptBtn = document.getElementById("acceptBtn");
    var cookieBanner = document.getElementById("cookieBanner");

    acceptBtn.addEventListener("click", function() {
        cookieBanner.style.display = "none";
        // Set a cookie to remember user's choice
        document.cookie = "cookie_consent=accepted; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    });
});



