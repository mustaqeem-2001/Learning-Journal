import { articleArray } from "./data.js";
console.log(articleArray[0].image);


const articlesSectionEl = document.getElementById("articlesSectionEl");
const viewMoreEl = document.getElementById("viewMoreEl");



viewMoreEl.addEventListener("click", function() {
    const htmlOutput = generateHTML();
    viewMore(htmlOutput);
})


function viewMore(htmlOutput) {
    articlesSectionEl.innerHTML = htmlOutput.join("");
}


// Instead of doing let htmlOutput = []; globally (which is not advised to do), 
// I created this function to then be used as a parameter in other functions, serving as a better way.

function generateHTML() {
    const htmlOutput = articleArray.map(function(article){
        const template = `
            <article class="extra-articles ${article.name.replace(/ /g, "-").toLowerCase()}">
                <img class="extra-article-image" src="${article.image}"/>
                <p>${article.date}</p>
                <h3>${article.name}</h3>
                <p class="fc-505050">${article.text}</p>
            </article>
            `;
        return template;
    });
    return htmlOutput;
}

function render(htmlOutput) {
    articlesSectionEl.innerHTML = htmlOutput.slice(0, 3).join("");
}

const htmlOutput = generateHTML();
render(htmlOutput);

