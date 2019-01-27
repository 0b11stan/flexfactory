let previousHistory = '2015';
let currentHistory = '2015';

experiences = {
    psi: "Stage développement full stack à PSI informatique",
    touton: "Stage développement full stack à Touton",
    helloasso: "Alternance à Helloasso",
    cdiscount: "Alternance à Cdiscount"
};

const histories = {
    2015: {
        degree: "Bac S option ISN (Informatique et Science du Numérique)"
    },
    2016: {
        experiences: [experiences.psi]
    },
    2017: {
        degree: "BTS SIO option SLAM spé Mathématiques",
        experiences: [experiences.touton, experiences.helloasso]
    },
    2018: {
        degree: "Epsi, Titre RNCP Niveau II (DIRRECT)",
        experiences: [experiences.helloasso, experiences.cdiscount]
    },
    2019: {
        degree: "Examen du TOEIC",
        experiences: [experiences.cdiscount]
    },
    2020: {
        degree: "Epsi, Titre RNCP Niveau I",
        experiences: [experiences.cdiscount]
    },
    2022: {
        degree: "Master Mathématiques et applications"
    },
    2025: {
        degree: "Doctorat..."
    }
};

(function () {
    for (let year in histories) {
        let newMenu = '<h5 id="history-menu-' + year + '" class="history-menu one column">' + year + '</h5>';
        document.getElementById('history-menu').innerHTML += newMenu;

        let newBody = '<div hidden id="degree-' + year + '">';

        if (histories[year].degree !== undefined) {
            newBody += '<div class="history-sub row">';
            newBody += '<h5 class="no-margin history-content ten columns sub">' + histories[year].degree + '</h5>';
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
    document.getElementById('history-menu-2015').classList.add('offset-by-two');

    for (let year in histories)
        document
            .getElementById("history-menu-" + year)
            .addEventListener('mouseover', function () {
                previousHistory = currentHistory;
                currentHistory = year;

                document.getElementById("history-menu-" + previousHistory).classList.remove('boldify');
                document
                    .getElementById("degree-" + previousHistory)
                    .setAttribute('hidden', 'hidden');

                document.getElementById("history-menu-" + year).classList.add('boldify');
                document.getElementById("degree-" + year).removeAttribute('hidden');
            });
})();