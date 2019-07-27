import {books} from './content-data.js';

export default function initContent() {
    initContentMenu();
    buildContentBody();
    document.getElementById('content-panel').addEventListener('mouseleave', function () {
        hideContents();
    });
}

function initContentMenu() {
    [/*'projects', */'readings'/*, 'articles'*/].forEach((content) => {
         document.getElementById(content + '-menu').addEventListener('mouseover', function () {
             show(content);
         });
    });
}

function hideContents() {
    ['projects', 'readings', 'articles'].forEach((content) => {
        document.getElementById(content + '-menu').classList.remove('boldify');
        document.getElementById(content + '-body').hidden = true;
    });
}

function show(content) {
    hideContents();
    document.getElementById(content + '-menu').classList.add('boldify');
    document.getElementById(content + '-body').hidden = false;
}

function buildContentBody() {
    buildProjectBody();
    buildReadingsBody();
    buildArticlesBody();
}

function buildProjectBody() {
    //contentBody.innerHTML += '<div id="projects-body" hidden><p>Hello Projects !</p><br></div>';
}

function buildReadingsBody() {
    let readingBody = document.getElementById('readings-body');
    for (let book in books) {
        book = books[book];
        readingBody.innerHTML += `
        <div class="book-panel row">
            <div class="eight columns">
                <h4 style="font-family: sans-serif;" class="book-title">` + book.title + `</h4>
                <h5 class="book-author">` + book.author + `</h5>
                <p>` + book.commentary + `</p>
            </div>
            <div class="four columns">
                <img class="book-pic" src="` + book.picture + `" width="200">
            </div>
        </div>`
    }
}

function buildArticlesBody() {
    //contentBody.innerHTML += '<div id="articles-body" hidden><p>Hello Articles !</p><br></div>';
}
