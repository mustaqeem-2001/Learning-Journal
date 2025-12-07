import { articleArray } from "./data.js";


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


export function viewMore(htmlOutput = generateHTML()) {
    return htmlOutput.join("");
}


export function render(htmlOutput = generateHTML()) {
    return htmlOutput.slice(0, 3).join("");
}