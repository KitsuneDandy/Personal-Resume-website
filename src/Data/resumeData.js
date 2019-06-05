//Src/Data/resumeData.js

export const resumeData = {
  lastname: "Goussin",
  firstname: "Nicolas",
  email: "nicolas@ngee.me",
  website: "https://www.ngee.me",
  phonenumber: "",
  jobtitle: "Internet Project Manager",
  jobtitle2: "Front-End Developper",
  adresses: "7 Marchmont Crescent - Edinburgh EH9 1HN",
  degrees: {
    title: { fr: "Diplômes", en: "Degrees" },
    list: [
      {
        name: {
          fr: "DUT Services et Réseaux de Communication",
          en: "Technological Universirty Degree"
        },
        location: {
          fr: "IUT L'isle d'abeau Grenoble III",
          en: "IUT L'ilse d'abeau Grenoble III"
        },
        year: "(1998 - 2000)"
      },
      {
        name: {
          fr: "Baccalauréat STT ACC spécialité Commerce",
          en: "High School Degree STT ACC Trade Speciality"
        },
        location: {
          fr: "Lycée Jean-Moulin Albertville",
          en: "Jean-Moulin High School Albertville"
        },
        year: "(1998)"
      }
    ]
  },

  languages: {
    title: { fr: "Langues", en: "Languages" },
    list: [
      {
        icon: "flag-fr.jpg",
        level: { fr: "Langue maternelle", en: "Native" },
        school: {
          fr: "",
          en: ""
        }
      },
      {
        icon: "flag-uk.jpg",
        level: { fr: "Intermédiaire ", en: "Intermediate" },
        school: {
          fr: "",
          en: ""
        }
      },
      {
        icon: "flag-jp.jpg",
        level: {
          fr: "Intermédiaire",
          en: "Intermediate"
        },
        school: {
          fr: "(Nihongo Center Kyoto 2018)",
          en: "(Nihongo Center Kyoto 2018)"
        }
      },
      {
        icon: "flag-es.jpg",
        level: { fr: "Scoalaire", en: "School Level" },
        school: {
          fr: "",
          en: ""
        }
      }
    ]
  },

  goal: {
    title: { fr: "Objectifs", en: "Goals" },
    desc: {
      fr:
        "Vous accompagner dans la mise en oeuvre de vos projets numériques et de votre stratégie de communication sur internet",
      en:
        "I wish settle permanently in Japan and invest myself fully in a new rewarding professional adventure"
    }
  },

  skill: { fr: "Compétences", en: "Skills" },
  otherskills: {
    fr:
      "#balsamiq #jira #trello #wordpress #office #instagram #emailing #créationgraphique #communication #présentationclient #manuelutilisateur #blogging",
    en:
      "#balsamiq #jira #trello #wordpress #office #instagram #emailing #graphicdesign #communication #customerpresentation #usermanual #blogging"
  },

  interest: {
    title: { fr: "Intéret", en: "Interest" },
    list: {
      fr:
        "#photographie #japon #indé #folk #jazz #geek #jeuxvidéos #switch #manga #cinéma #coffeeshop #illustration #architecture #hobbits #kickstarter #internet #sabrelaser #chiens #innovation #vélo #lubbies #découvrir #café #voyage #football",
      en:
        "#photography #japan #indie #folk #jazz #geek #videos #switch #manga #movie #coffeeshop #illustration #architecture #hobbits #kickstarter #internet #lightsaber #dogs #innovation #discover #coffe #travel #soccer"
    }
  },
  social: {
    title: { fr: "Suivez-moi", en: "Follow me" },
    medias: [
      {
        title: "@Ngee",
        link: "http://www.instagram.com/ngee",
        icon: "fab fa-instagram"
      },
      {
        title: "@Dandy<br>Kitsune",
        link: "https://www.twitter.com/DandyKitsune",
        icon: "fab fa-twitter"
      },
      {
        title: "@Ngee",
        link: "https://www.linkedin.com/in/ngee",
        icon: "fab fa-linkedin-in"
      },
      {
        title: "@Kitsune<br>Dandy",
        link: "https://github.com/KitsuneDandy",
        icon: "fab fa-github"
      }
    ]
  },
  resumepdf: {
    title: {
      fr: " Télécharger mon CV en pdf",
      en: " Download my Resume in PDF"
    },
    titlemobile: { fr: " Télécharger mon CV", en: " Download my Resume" },
    link: { fr: "NicolasGoussinCV.pdf", en: "NicolasGoussinResume.pdf" }
  },

  portfolio: {
    title: { fr: " Portfolio", en: " Portfolio" },
    link: { fr: "NicolasGoussinBook-VF.pdf", en: "NicolasGoussinBook-EN.pdf" }
  }
};

export const SKILLS = [
  {
    name: { fr: "Gestion de projet", en: "Project Manager" },
    icon: "projectmanager.jpg",
    color: "blue"
  },
  {
    name: {
      fr: "Interface Utilisateur / Expérience",
      en: "User Interface / Experience"
    },
    icon: "uiux.jpg"
  },
  {
    name: { fr: "Génération d'idées", en: "Ideas Generation" },
    icon: "ideasgeneration.jpg",
    color: "blue"
  },
  { name: { fr: "VOD", en: "VOD" }, icon: "vod.jpg" },
  {
    name: { fr: "Réseaux Sociaux", en: "Social Network" },
    icon: "socialnetwork.jpg",
    color: "blue"
  },
  {
    name: { fr: "Marketing Digital", en: "Digital Marketing" },
    icon: "digitalmarketing.jpg"
  },
  {
    name: { fr: "Couteau Suisse", en: "Swiss Knife" },
    icon: "swissknife.jpg",
    color: "blue"
  },
  { name: { fr: "Suite Adobe", en: "Adobe" }, icon: "adobe.jpg" },
  {
    name: { fr: "Management d'équipe", en: "Team Manager" },
    icon: "team.jpg",
    color: "blue"
  },
  {
    name: { fr: "JavaScript", en: "JavaScript" },
    icon: "javascript.jpg"
  },
  {
    name: { fr: "React", en: "React" },
    icon: "react.jpg",
    color: "blue"
  },
  {
    name: { fr: "CSS/HTML5", en: "CSS/HTML5" },
    icon: "css.jpg"
  }
];

export const XP = {
  title: { fr: "Expériences", en: "Experiences" },
  experiences: [
    {
      lastyear: "2019",
      firstyear: { fr: "Janvier - 2018", en: "January - 2018" },
      company: "Kitsune Dandy",
      jobtitle: { fr: "Auto-entrepreneur", en: "Self Employed" },
      content: {
        fr:
          "<p>Mission de Conseil pour des clients comme TV France International et réalisation de sites internet.<p></p>Création d'un guide en ligne pour les Digital Nomads et les amateurs de café sur les cafés d'Edimbourg, Kyoto et Tokyo.</p>",
        en:
          "<p>Consulting mission for clients such as TV France International, website development.</p><p>Creation of an online guide for Digital Nomads and coffee lovers on Edinburgh, Kyoto and Tokyo coffees.</p>"
      }
    },
    {
      lastyear: "2017",
      firstyear: { fr: "Janvier - 2016", en: "January - 2016" },
      company: "Screenopsis",
      jobtitle: { fr: "Responsable Screenopsis", en: "Screenopsis Supervisor" },
      content: {
        fr:
          "<p>Responsable de la plateforme VOD BtoB Screenopsis.com. Gestion des différents prestataires, du budget et des équipes.</p><p>Création des interfaces utilsiateurs et des nouveaux services de la plateforme en ligne et mobile.</p>",
        en:
          "<p>In charge for the VOD platform BtoB Screenopsis.com. Management of different providers, budget and teams</p><p>Creating user interfaces and new services of the online platform and mobile devices.</p>"
      }
    },
    {
      lastyear: "2015",
      firstyear: { fr: "Février - 2003", en: "February - 2003" },
      company: "TV France International",
      jobtitle: {
        fr: "Chef de projet novueaux médias",
        en: "New Media Project Manager"
      },
      content: {
        fr:
          "<p>Gestion et évolution des différents sites internet. Mise en place d'une vidéothèque en ligne et physique. Mise à jour des contenus, relation clients et acheteurs internationaux.</p><p>Création de cahiers des besoins, gestion d'équipe, présentation et tenue de stand sur des marchés internationaux. Création graphique, et administrateur du réseau.</p>",
        en:
          "<p>Management and evolution of the different websites. Setting up a online and physical video library. Content update, relationship with customers and international buyers.</p><p>Creation of requirements books, team management, presentation and stand holding in international markets. Graphic design and network administrator.</p>"
      }
    },
    {
      lastyear: "2002",
      firstyear: { fr: "Avril - 2001", en: "April - 2001" },
      company: "Firstcampus / OFUP",
      jobtitle: {
        fr: "Community Manager / Webmaster",
        en: "Community Manager / Webmaster"
      },
      content: {
        fr:
          "<p>Animation et gestion des internautes sur la principale plateforme étudiante française.</p><p>Veille concurentielle, écriture d'articles. Intégration et développement sur le site français et sur les différents sites européens.</p>",
        en:
          "<p>Animation and management of internet on the main French student platform.</p><p>Competitive intelligence, writing articles. Integration and development on the french website and on others european websites.</p>"
      }
    },
    {
      lastyear: "2001",
      firstyear: { fr: "Juin - 2000", en: "June - 2000" },
      company: "Ideadvert",
      jobtitle: { fr: "", en: "Traffic Manager / Webmaster" },
      content: {
        fr:
          "<p>Gestion du traffic publicitaire sur une vingtaine de sites. Réalisation et mises à jour des sites web de la régie dans 3 pays.</p><p> Gestion d'un trafic de 73 millions de pages paps par mois. Conception de bannières publicitaires, mise en place d'outils de gestion de campagne en backoffice. Suivi statistiques des campagnes publicitaires.</p>",
        en:
          "<p>Management of advertising traffic on 20 websites.Realization and updates of the websites in 3 countries.</p><p>Traffic Management of 73 million pages seen with advertising per mont. Conception of ads banner, set up campaign management tools backoffice. Statistical monitoring of advertising compaigns.</p>"
      }
    }
  ]
};
