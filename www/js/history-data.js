let experiences = {
    psi: "Stage développement full stack à PSI informatique",
    touton: "Stage développement full stack à Touton",
    helloasso: "Alternance à Helloasso",
    cdiscount: "Alternance à Cdiscount"
};

export const histories = {
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
            done: true
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
            info: "<strong>. . .</strong>",
            done: false
        }
    }
};
