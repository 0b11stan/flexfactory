let previousHistory = '2015';
let currentHistory = '2015';

let experiences = {
    psi: "Stage développement full stack à PSI informatique",
    touton: "Stage développement full stack à Touton",
    helloasso: "Alternance à Helloasso",
    cdiscount: "Alternance à Cdiscount"
};

const histories = {
    2015: {
        degree: {
            info: "Bac S option ISN (Informatique et Science du Numérique)",
            done: true
        }
    },
    2016: {
        experiences: [experiences.psi]
    },
    2017: {
        degree: {
            info: "BTS SIO option SLAM spé Mathématiques",
            done: true
        },
        experiences: [experiences.touton, experiences.helloasso]
    },
    2018: {
        degree: {
            info: "Epsi, Titre RNCP Niveau II (DIRRECT)",
            done: true
        },
        experiences: [experiences.helloasso, experiences.cdiscount]
    },
    2019: {
        degree: {
            info: "Examen du TOEIC",
            done: false
        },
        experiences: [experiences.cdiscount]
    },
    2020: {
        degree: {
            info: "Epsi, Titre RNCP Niveau I",
            done: false
        },
        experiences: [experiences.cdiscount]
    },
    2022: {
        degree: {
            info: "Master Mathématiques et applications",
            done: false
        }
    },
    2025: {
        degree: {
            info: "Doctorat...",
            done: false
        }
    }
};

export default function initHistory() {
    for (let year in histories) buildHistory(year);
    for (let year in histories) document.getElementById("history-menu-" + year)
        .addEventListener('mouseover', function () {
            displayHistory(year)
        });

    document.getElementById('history-menu-2015').classList.add('offset-by-two');
    document.getElementById('history').addEventListener('mouseleave', function () {
        hideHistory();
    });
}

function buildHistory(year) {
    let newMenu = '<h5 id="history-menu-' + year + '" class="history-menu one column">' + year + '</h5>';
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

function hideHistory() {
    document.getElementById("history-body").hidden = true;
}

function displayHistory(year) {
    document.getElementById("history-body").hidden = false;
    previousHistory = currentHistory;
    currentHistory = year;
    document.getElementById("history-menu-" + previousHistory).classList.remove('boldify');
    document.getElementById("degree-" + previousHistory).setAttribute('hidden', 'hidden');
    document.getElementById("history-menu-" + year).classList.add('boldify');
    document.getElementById("degree-" + year).removeAttribute('hidden');
}
