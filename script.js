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





