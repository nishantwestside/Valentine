const answers_no = {
    english: [
        "No",
        "Are you sure?",
        "Are you really sure??",
        "Are you really really sure???",
        "Think again?",
        "Don't believe in second chances?",
        "Why are you being so cold?",
        "Maybe we can talk about it?",
        "I am not going to ask again!",
        "Ok now this is hurting my feelings!",
        "You are now just being mean!",
        "Why are you doing this to me?",
        "Please give me a chance!",
        "I am begging you to stop!",
        "Ok, Let's just start over..."
    ]
};

const answers_yes = {
    english: "Yes"
};

const no_button = document.getElementById("no-button");
const yes_button = document.getElementById("yes-button");

let i = 1;
let size = 50;
let clicks = 0;

/* ===============================
   RUN AWAY FUNCTION (ALL DEVICES)
================================ */

function moveNoButton() {
    no_button.style.position = "fixed";

    const padding = 20;

    const maxX = window.innerWidth - no_button.offsetWidth - padding;
    const maxY = window.innerHeight - no_button.offsetHeight - padding;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    no_button.style.left = randomX + "px";
    no_button.style.top = randomY + "px";
}

/* Desktop hover */
no_button.addEventListener("mouseenter", moveNoButton);

/* Mobile touch */
no_button.addEventListener("touchstart", (e) => {
    e.preventDefault(); // prevent accidental click
    moveNoButton();
});

/* ===============================
   NO BUTTON CLICK LOGIC
================================ */

no_button.addEventListener("click", () => {
    const banner = document.getElementById("banner");

    if (clicks === 0) {
        banner.src = "public/images/no.gif";
        refreshBanner();
    }

    clicks++;

    const sizes = [40, 50, 30, 35, 45];
    size += sizes[Math.floor(Math.random() * sizes.length)];

    yes_button.style.height = size + "px";
    yes_button.style.width = size + "px";

    const total = answers_no.english.length;

    if (i < total - 1) {
        no_button.innerText = answers_no.english[i];
        i++;
    } else {
        alert(answers_no.english[i]);
        i = 1;
        no_button.innerText = answers_no.english[0];
        yes_button.innerText = answers_yes.english;
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
    }
});

/* ===============================
   YES BUTTON
================================ */

yes_button.addEventListener("click", () => {
    const banner = document.getElementById("banner");
    banner.src = "public/images/yes.gif";
    refreshBanner();

    document.querySelector(".buttons").style.display = "none";
    document.querySelector(".message").style.display = "block";
});

/* ===============================
   GIF RELOAD
================================ */

function refreshBanner() {
    const banner = document.getElementById("banner");
    const src = banner.src;
    banner.src = "";
    banner.src = src;
}
