import {books, projects} from './content-data.js';

export default function initContent() {
    initContentMenu();
    buildContentBody();
    document.getElementById('content-panel').addEventListener('mouseleave', function () {
        hideContents();
    });
}

function initContentMenu() {
    ['projects', 'readings'/*, 'articles'*/].forEach((content) => {
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
    let projectsBody = document.getElementById('projects-body');

    for (let project in projects) {
        project = projects[project];

        let picturesBody = '';
        for (let pic in project.pictures) {
            picturesBody += '<img class="content-pic" src="img/' + project.pictures[pic] + '" width="200">';
        }

        projectsBody.innerHTML += `
        <div class="project-panel">
            <div class="row">
                <div class="ten columns">
                    <h4 style="font-family: sans-serif;" class="project-title">` + project.title + `</h4>
                </div>
                <div class="rightify two columns">
                    <a class="project-git-link fab fa-github-square" href="` + project.github + `"></a>
                </div>
            </div>
            <div class="row">
                <div class="eight columns">
                    <p class="justify">` + project.presentation + `</p>
                </div>
                <div class="four columns">`
                    + picturesBody +
                `</div>
            </div>
        </div>`;
    }
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
                <p class="justify">` + book.commentary + `</p>
            </div>
            <div class="">
                <img class="content-pic" src="` + book.picture + `" width="200">
            </div>
        </div>`
    }
}

function buildArticlesBody() {
    //contentBody.innerHTML += '<div id="articles-body" hidden><p>Hello Articles !</p><br></div>';
}
