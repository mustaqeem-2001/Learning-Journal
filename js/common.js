import { render, viewMore } from "./generateHTML.js";

const articlesSectionEl = document.getElementById("articlesSectionEl");
const viewMoreEl = document.getElementById("viewMoreEl");
articlesSectionEl.innerHTML = render();

viewMoreEl.addEventListener("click", function() {
    articlesSectionEl.innerHTML = viewMore();
})




