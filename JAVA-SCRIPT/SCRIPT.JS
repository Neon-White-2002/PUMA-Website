// JAVA-SCRIPT (PUMA - WEBISTE) :

// TEXT-ANIMATOR :
const text = document.getElementById("text");
var text_content = ["FREE RETURNS AND FREE EXCHANGE...!", `SOLVE YOUR QUERIES FASTER THAN EVER ! SEND US A 'HEY...' ON WHATSAPP AT <a href=""> 9874563210 </a>`, "EXTRA 5% DISCOUNT AND FREE SHIPPING ON ALL ONLINE PAYMENTS."];

let index = 0;
setInterval(() => {
    text.innerHTML = `" ${text_content[index]} "`;
    index++;

    if (index == text_content.length) {
        index = 0;
    }
}, 3000);

// SCROLL-CONTROL (RECOMMEDATION-CONTAINER) :
const left_button = document.getElementById("recomendation-left");
const right_button = document.getElementById("recomendation-right");

const recommendation_container = document.getElementById("recommandation-box-container");

left_button.addEventListener("click", () => {
    recommendation_container.scrollLeft += -400.50;
});

right_button.addEventListener("click", () => {
    recommendation_container.scrollLeft += 400.50;
});

// SCROLL-CONTROL (SPORT-CONTAINER) :
const sport_left = document.getElementById("sport-left");
const sport_right = document.getElementById("sport-right");

const sport_container = document.getElementById("sports-ads-banner");

sport_left.addEventListener("click", () => {
    sport_container.scrollLeft -= 400.50;
});

sport_right.addEventListener("click", () => {
    sport_container.scrollLeft += 400.50;
});

// DISPLAY, NAVIGATION (SUB-MENU) :
const buttons = document.querySelectorAll(".navigation-button button");
const containers = document.querySelectorAll(".new-feature-container");

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const active = button.classList.contains("active-button");

        buttons.forEach(btn => btn.classList.remove("active-button"));
        containers.forEach(container => container.classList.remove("active-container"));

        if (!active) {
            buttons[index].classList.add("active-button");
            containers[index].classList.add("active-container");
        }
    });
});

// SEARCH-BAR :
const search_box = document.querySelector(".search-bar");
const search_container = document.querySelector(".search-container");
const close_search = document.querySelector(".close-view");

search_box.addEventListener("click", () => {
    search_container.style.display = "flex";
});

close_search.addEventListener("click", () => {
    search_container.style.display = "none";
});