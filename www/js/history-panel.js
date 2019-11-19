import {histories} from './history-data.js';

let previousHistory = '2015';
let currentHistory = '2015';
let initialized = false;

export default function initHistory() {
    if (! initialized) {
        for (let year in histories) buildHistory(year);
        for (let year in histories) document.getElementById("history-menu-" + year)
            .addEventListener('mouseover', function () {
                displayHistory(year)
            });

        document.getElementById('history-menu-2015').classList.add('offset-by-two');
        document.getElementById('history-panel').addEventListener('mouseleave', function () {
            hideHistory();
        });
        initialized = true;
    }
}

function buildHistory(year) {
    let newMenu = '<h5 id="history-menu-' + year + '" class="panel-menu one column">' + year + '</h5>';
    document.getElementById('history-menu').innerHTML += newMenu;

    let newBody = '<div hidden id="degree-' + year + '">';

    if (histories[year].degree !== undefined) {
        newBody += '<div class="history-sub row">';
        if (histories[year].degree.done)
            newBody += '<h5 class="no-margin history-content ten columns sub degree-done">' +
                histories[year].degree.info + '</h5>';
        else
            newBody += '<h5 class="no-margin history-content ten columns sub degree-not-done">' +
                histories[year].degree.info + '</h5>';
        newBody += '<h5 class="no-margin history-info sub">Diplômes</h5>';
        newBody += '</div>';
    }

    if (histories[year].experiences !== undefined) {
        newBody += '<div class="history-sub row">';
        newBody += '<h5 class="no-margin history-content ten columns sub">' +
            histories[year].experiences.join(" | ") + '</h5>';
        newBody += '<h5 class="no-margin history-info sub">Experiences</h5>';
        newBody += '</div>';
    }

    newBody += '</div>';

    document.getElementById('history-body').innerHTML += newBody;
}

function unboldifyMenu() {
    for (let year in histories)
        document.getElementById('history-menu-' + year).classList.remove('boldify');
}

function hideHistory() {
    unboldifyMenu();
    document.getElementById("history-body").hidden = true;
}

function displayHistory(year) {
    document.getElementById("history-body").hidden = false;
    previousHistory = currentHistory;
    currentHistory = year;
    unboldifyMenu();
    document.getElementById("degree-" + previousHistory).hidden = true;
    document.getElementById("history-menu-" + year).classList.add('boldify');
    document.getElementById("degree-" + year).hidden = false;
}
