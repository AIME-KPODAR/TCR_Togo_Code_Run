// =========================
// 🌍 LANGUAGE SYSTEM
// =========================

let lang = localStorage.getItem("lang") || "en";



const text = {
    en: {
        title: "Welcome to AgriSmart 🌾",
        subtitle: "Your Smart Farming Assistant",

        weather: "Weather Forecast",
        crops: "Crop Guide",
        prices: "Market Prices",
        disease: "Disease Detection",
        about: "About AgriSmart",
        contact: "Contact Support",
        calculator: "Farm Calcutator",
        community: "Farmer Community",


        weatherMain: "🌦️ Weather Forecast",
        selectDayText: "Select a day 🌤️",
        tempText: "Temperature will appear here",
        adviceTitle: "🌱 Farming Advice",
        adviceText: "Select a day to see advice",
        tipsText: "Select a day to see advice",
        selectDay: "Select Day 📅",

        cropTitle: "🌾 Crop Guide",
        cropSubtitle: "Search for crops and learn how to grow them better in Togo",
        searchPlaceholder: "Search crop (maize, rice, cassava...)",

        maizeName: "🌽 Maize",
        maizeSeason: "Season: Rainy season",
        maizeAdvice: "Advice: Use fertilizer after 2 weeks",

        riceName: "🌾 Rice",
        riceSeason: "Season: Wet lands",
        riceAdvice: "Advice: Needs constant water",

        cassavaName: "🥔 Cassava",
        cassavaSeason: "Season: All year",
        cassavaAdvice: "Advice: Resistant to drought",

        pricesTitle: "💰 Market Prices",
        priceSubtitle: "Live crop price estimates in Togo 📊",
        highlightBtn: "Highlight Prices 📊",

        maizeName: "🌽 Maize",
        riceName: "🌾 Rice",
        cassavaName: "🥔 Cassava",
        groundnutName: "🥜 Groundnut",

        priceLabel: "Price",
        perKg: "per kg",

        diseaseTitle: "🦠 Disease Detection",
        diseaseSubtitle: "Upload a plant image to detect diseases",
        uploadImage: "📁 Upload Image",
        analyzeBtn: "Analyze 🌱",
        fileText: "No file chosen",
        backHome: "⬅ Back Home",

        healthy: "✅ Healthy Plant",
        healthyMsg: "No disease detected. Maintain proper care.",

        blight: "🌿 Leaf Blight",
        blightLevel: "Severity: High ⚠️",
        blightTreatment: "Apply fungicide and remove infected leaves.",

        deficiency: "🍂 Nutrient Deficiency",
        deficiencyLevel: "Severity: Medium ⚠️",
        deficiencyTreatment: "Add fertilizer and improve soil quality.",

        bacteria: "🦠 Bacterial Infection",
        bacteriaLevel: "Severity: High ⚠️",
        bacteriaTreatment: "Remove affected areas and apply treatment.",

        aboutTitle: "ℹ️ About AgriSmart",

        aboutText1: "AgriSmart is a smart digital agriculture platform designed to support farmers in Togo by providing essential tools for decision-making.",

        aboutText2: "The platform integrates weather forecasting, crop management guidance, market price tracking, and disease detection into one simple and accessible system.",

        aboutText3: "The goal of AgriSmart is to bridge the gap between traditional farming practices and modern technology, helping farmers increase productivity, reduce risks, and improve their overall livelihood.",

        backgroundTitle: "🌍 Background and Problem Statement",

        backgroundText1: "Agriculture plays a major role in the economy of Togo, employing a large percentage of the population. However, many farmers still face serious challenges that affect their productivity and income.",

        backgroundText2: "One of the biggest issues is the lack of access to reliable and timely information. Farmers often depend on guesswork or outdated knowledge when making important decisions about planting, harvesting, and selling their crops.",

        backgroundText3: "Climate change has also made weather patterns unpredictable, increasing the risk of crop failure. In addition, farmers struggle to identify crop diseases early, leading to significant losses.",

        backgroundText4: "Market access is another major problem. Farmers often do not know the current market prices of their crops, which leads to poor selling decisions and reduced profits.",

        backgroundText5: "These combined challenges result in low agricultural productivity, financial instability, and food insecurity.",

        solutionTitle: "💡 Proposed Solution",

        solutionText1: "AgriSmart addresses these problems by providing a centralized platform where farmers can access critical agricultural information in real time.",

        solutionText2: "The platform is designed to be simple, user-friendly, and accessible on both mobile and web devices, ensuring that even farmers with limited technical knowledge can use it effectively.",

        solutionText3: "AgriSmart combines multiple features into one system, allowing farmers to make informed decisions based on accurate data rather than guesswork.",

        featuresTitle: "⚙️ System Features",

        feature1: "🌦️ Weather Forecast Module: Provides daily weather updates along with farming advice to help farmers plan their activities.",

        feature2: "🌱 Crop Guide Module: Offers detailed information about different crops, including planting seasons, care instructions, and best practices.",

        feature3: "💰 Market Price Module: Displays current market prices of crops to help farmers make better selling decisions.",

        feature4: "🌿 Disease Detection Module: Allows farmers to upload images of crops and receive possible disease diagnoses along with treatment suggestions.",

        impactTitle: "🚀 Expected Impact",

        impactText1: "AgriSmart has the potential to significantly improve the agricultural sector in Togo by empowering farmers with knowledge and digital tools.",

        impactText2: "Increased agricultural productivity and crop yield",

        impactText3: "Reduction in losses caused by poor weather decisions",

        impactText4: "Improved ability to detect and treat crop diseases early",

        impactText5: "Better financial outcomes through informed market decisions",

        impactText6: "Improved quality of life for farming families",

        impactText7: "It is estimated that AgriSmart could positively impact over 40,000 farming households across the country.",

        sustainabilityTitle: "🌍 Sustainability and Future Development",

        sustainabilityText1: "AgriSmart is designed to be scalable and sustainable. In the future, the platform can be expanded with more advanced technologies and features.",

        sustainabilityText2: "Integration with real-time weather APIs",

        sustainabilityText3: "Advanced AI-based disease detection models",

        sustainabilityText4: "Support for local languages to reach more farmers",

        sustainabilityText5: "Offline functionality for rural areas with limited internet access",

        sustainabilityText6: "Community features to connect farmers and share knowledge",

        conclusionTitle: "🙏 Conclusion",

        conclusionText1: "AgriSmart represents a step toward modernizing agriculture in Togo by combining technology with real farming needs.",

        conclusionText2: "By providing farmers with the right information at the right time, the platform aims to increase productivity, reduce risks, and improve livelihoods.",

        conclusionText3: "This project demonstrates how simple technological solutions can create meaningfull impact in developing communities.",
    },

    fr: {
        title: "Bienvenue à AgriSmart 🌾",
        subtitle: "Votre assistant agricole intelligent",

        weather: "Prévisions météo",
        crops: "Guide des cultures",
        prices: "Prix du marché",
        disease: "Détection de maladies",
        about: "À propos d’AgriSmart",
        contact: "Contacter le support",
        calculator: "Calculateur de ferme",
        community: "Communauté agricole",




        weatherMain: "🌦️ Prévisions météo",
        selectDayText: "Choisir un jour 🌤️",
        tempText: "La température apparaîtra ici",
        adviceTitle: "🌱 Conseils agricoles",
        adviceText: "Choisissez un jour pour voir les conseils",
        selectDay: "Choisir un jour 📅",

        cropTitle: "🌾 Guide des cultures",
        cropSubtitle: "Recherchez des cultures et apprenez à mieux les cultiver au Togo",
        searchPlaceholder: "Rechercher une culture (maïs, riz, manioc...)",

        maizeName: "🌽 Maïs",
        maizeSeason: "Saison : Saison des pluies",
        maizeAdvice: "Conseil : Utiliser de l’engrais après 2 semaines",

        riceName: "🌾 Riz",
        riceSeason: "Saison : Zones humides",
        riceAdvice: "Conseil : Besoin d’eau constante",

        cassavaName: "🥔 Manioc",
        cassavaSeason: "Saison : Toute l’année",
        cassavaAdvice: "Conseil : Résistant à la sécheresse",

        pricesTitle: "💰 Prix du marché",
        priceSubtitle: "Prix des cultures en temps réel au Togo 📊",
        highlightBtn: "Afficher les prix 📊",

        maizeName: "🌽 Maïs",
        riceName: "🌾 Riz",
        cassavaName: "🥔 Manioc",
        groundnutName: "🥜 Arachide",

        priceLabel: "Prix",
        perKg: "par kg",

        diseaseTitle: "🦠 Détection de maladies",
        diseaseSubtitle: "Téléchargez une image pour détecter les maladies",
        uploadImage: "📁 Télécharger une image",
        analyzeBtn: "Analyser 🌱",
        fileText: "Aucun fichier choisi",
        backHome: "⬅ Retour",

        healthy: "✅ Plante saine",
        healthyMsg: "Aucune maladie détectée. Continuez les bons soins.",

        blight: "🌿 Brûlure des feuilles",
        blightLevel: "Gravité : Élevée ⚠️",
        blightTreatment: "Appliquez un fongicide et retirez les feuilles infectées.",

        deficiency: "🍂 Carence nutritive",
        deficiencyLevel: "Gravité : Moyenne ⚠️",
        deficiencyTreatment: "Ajoutez de l’engrais et améliorez le sol.",

        bacteria: "🦠 Infection bactérienne",
        bacteriaLevel: "Gravité : Élevée ⚠️",
        bacteriaTreatment: "Supprimez les parties atteintes et traitez.",

        aboutTitle: "ℹ️ À propos d’AgriSmart",

        aboutText1: "AgriSmart est une plateforme numérique intelligente dédiée à l’agriculture, conçue pour soutenir les agriculteurs du Togo en leur fournissant des outils essentiels à la prise de décision.",

        aboutText2: "La plateforme intègre les prévisions météorologiques, les conseils de gestion des cultures, le suivi des prix du marché et la détection des maladies dans un système simple et accessible.",

        aboutText3: "L’objectif d’AgriSmart est de réduire l’écart entre les pratiques agricoles traditionnelles et les technologies modernes afin d’aider les agriculteurs à augmenter leur productivité, réduire les risques et améliorer leurs conditions de vie.",

        backgroundTitle: "🌍Contexte et Problématique",

        backgroundText1: "L’agriculture joue un rôle majeur dans l’économie du Togo et emploie une grande partie de la population. Cependant, de nombreux agriculteurs font encore face à de sérieux défis qui affectent leur productivité et leurs revenus.",

        backgroundText2: "L’un des principaux problèmes est le manque d’accès à des informations fiables et en temps réel. Les agriculteurs se basent souvent sur des suppositions ou des connaissances dépassées pour prendre des décisions importantes concernant les semis, les récoltes et la vente de leurs produits.",

        backgroundText3: "Le changement climatique a également rendu les conditions météorologiques imprévisibles, augmentant ainsi les risques de pertes agricoles. De plus, les agriculteurs ont des difficultés à identifier rapidement les maladies des cultures, ce qui entraîne des pertes importantes.",

        backgroundText4: "L’accès au marché constitue aussi un problème majeur. Les agriculteurs ne connaissent souvent pas les prix actuels des cultures sur le marché, ce qui conduit à de mauvaises décisions de vente et à une réduction des bénéfices.",

        backgroundText5: "L’ensemble de ces défis entraîne une faible productivité agricole, une instabilité financière et une insécurité alimentaire.",

        solutionTitle: "💡 Solution Proposée",

        solutionText1: "AgriSmart répond à ces problèmes en fournissant une plateforme centralisée où les agriculteurs peuvent accéder à des informations agricoles essentielles en temps réel.",

        solutionText2: "La plateforme est conçue pour être simple, conviviale et accessible aussi bien sur mobile que sur le web, afin que même les agriculteurs ayant peu de connaissances techniques puissent l’utiliser facilement.",

        solutionText3: "AgriSmart regroupe plusieurs fonctionnalités dans un seul système, permettant aux agriculteurs de prendre des décisions éclairées basées sur des données fiables plutôt que sur des suppositions.",

        featuresTitle: "⚙️ Fonctionnalités du Système",

        feature1: "🌦️ Module de Prévisions Météorologiques : Fournit des mises à jour météorologiques quotidiennes accompagnées de conseils agricoles pour aider les agriculteurs à planifier leurs activités.",

        feature2: "🌱 Module Guide des Cultures : Offre des informations détaillées sur différentes cultures, y compris les saisons de plantation, les conseils d’entretien et les meilleures pratiques agricoles.",

        feature3: "💰 Module des Prix du Marché : Affiche les prix actuels des cultures afin d’aider les agriculteurs à prendre de meilleures décisions de vente.",

        feature4: "🌿 Module de Détection des Maladies : Permet aux agriculteurs de télécharger des images des cultures afin d’obtenir un diagnostic possible des maladies ainsi que des suggestions de traitement.",

        impactTitle: "🚀 Impact Attendu",

        impactText1: "AgriSmart a le potentiel d’améliorer considérablement le secteur agricole au Togo en donnant aux agriculteurs accès à des connaissances et à des outils numériques.",

        impactText2: "Augmentation de la productivité agricole et des rendements",

        impactText3: "Réduction des pertes causées par de mauvaises décisions liées à la météo",

        impactText4: "Amélioration de la détection précoce et du traitement des maladies des cultures",

        impactText5: "Meilleurs revenus grâce à des décisions de vente plus éclairées",

        impactText6: "Amélioration des conditions de vie des familles agricoles",

        impactText7: "Il est estimé qu’AgriSmart pourrait avoir un impact positif sur plus de 40 000 ménages agricoles à travers le pays.",

        sustainabilityTitle: "🌍 Durabilité et Développement Futur",

        sustainabilityText1: "AgriSmart est conçu pour être évolutif et durable. À l’avenir, la plateforme pourra être améliorée grâce à des technologies et fonctionnalités plus avancées.",

        sustainabilityText2: "Intégration d’API météorologiques en temps réel",

        sustainabilityText3: "Modèles avancés de détection des maladies basés sur l’intelligence artificielle",

        sustainabilityText4: "Prise en charge des langues locales afin d’atteindre davantage d’agriculteurs",

        sustainabilityText5: "Fonctionnalité hors ligne pour les zones rurales avec un accès limité à Internet",

        sustainabilityText6: "Fonctionnalités communautaires pour connecter les agriculteurs et partager des connaissances",

        conclusionTitle: "🙏 Conclusion",

        conclusionText1: "AgriSmart représente une avancée vers la modernisation de l’agriculture au Togo en combinant la technologie aux besoins réels des agriculteurs.",

        conclusionText2: "En fournissant les bonnes informations au bon moment, la plateforme vise à augmenter la productivité, réduire les risques et améliorer les conditions de vie.",

        conclusionText3: "Ce projet démontre comment des solutions technologiques simples peuvent avoir un impact significatif dans les communautés en développement."

    }
};

// =========================
// 🔄 APPLY LANGUAGE
// =========================

function setLanguage(l) {

    lang = l;
    localStorage.setItem("lang", lang);

    document.querySelectorAll('.lang-btn')
        .forEach(btn => btn.classList.remove('active'));

    if (l === "fr") {
        document.querySelectorAll('.lang-btn')[0]
            .classList.add('active');
    } else {
        document.querySelectorAll('.lang-btn')[1]
            .classList.add('active');
    }

    updateText();
}

function updateText() {

    // HOME PAGE
    if (document.getElementById("title"))
        document.getElementById("title").innerText = text[lang].title;

    if (document.getElementById("subtitle"))
        document.getElementById("subtitle").innerText = text[lang].subtitle;

    if (document.getElementById("weatherText"))
        document.getElementById("weatherText").innerText = text[lang].weather;

    if (document.getElementById("cropsText"))
        document.getElementById("cropsText").innerText = text[lang].crops;

    if (document.getElementById("pricesText"))
        document.getElementById("pricesText").innerText = text[lang].prices;

    if (document.getElementById("diseaseText"))
        document.getElementById("diseaseText").innerText = text[lang].disease;

    if (document.getElementById("aboutText"))
        document.getElementById("aboutText").innerText = text[lang].about;



    if (document.getElementById("contactText"))
        document.getElementById("contactText").innerText = text[lang].contact;

    if (document.getElementById("calculatorText"))
        document.getElementById("calculatorText").innerText = text[lang].calculator;

    if (document.getElementById("forumText"))
        document.getElementById("forumText").innerText = text[lang].community;


    // WEATHER PAGE
    if (document.getElementById("weatherMain"))
        document.getElementById("weatherMain").innerText = text[lang].weatherMain;

    if (document.getElementById("weatherTitle"))
        document.getElementById("weatherTitle").innerText = text[lang].selectDayText;

    if (document.getElementById("temp"))
        document.getElementById("temp").innerText = text[lang].tempText;

    if (document.getElementById("advice"))
        document.getElementById("advice").innerText = text[lang].adviceText;

    if (document.getElementById("cropTitle"))
        document.getElementById("cropTitle").innerText = text[lang].cropTitle;

    if (document.getElementById("cropSubtitle"))
        document.getElementById("cropSubtitle").innerText = text[lang].cropSubtitle;

    if (document.getElementById("searchBox"))
        document.getElementById("searchBox").placeholder = text[lang].searchPlaceholder;

    // MAIZE
    if (document.getElementById("maizeName"))
        document.getElementById("maizeName").innerText = text[lang].maizeName;

    if (document.getElementById("maizeSeason"))
        document.getElementById("maizeSeason").innerText = text[lang].maizeSeason;

    if (document.getElementById("maizeAdvice"))
        document.getElementById("maizeAdvice").innerText = text[lang].maizeAdvice;

    // RICE
    if (document.getElementById("riceName"))
        document.getElementById("riceName").innerText = text[lang].riceName;

    if (document.getElementById("riceSeason"))
        document.getElementById("riceSeason").innerText = text[lang].riceSeason;

    if (document.getElementById("riceAdvice"))
        document.getElementById("riceAdvice").innerText = text[lang].riceAdvice;

    // CASSAVA
    if (document.getElementById("cassavaName"))
        document.getElementById("cassavaName").innerText = text[lang].cassavaName;

    if (document.getElementById("cassavaSeason"))
        document.getElementById("cassavaSeason").innerText = text[lang].cassavaSeason;

    if (document.getElementById("cassavaAdvice"))
        document.getElementById("cassavaAdvice").innerText = text[lang].cassavaAdvice;

    if (document.getElementById("pricesTitle"))
        document.getElementById("pricesTitle").innerText = text[lang].pricesTitle;

    if (document.getElementById("priceSubtitle"))
        document.getElementById("priceSubtitle").innerText = text[lang].priceSubtitle;

    if (document.getElementById("highlightBtn"))
        document.getElementById("highlightBtn").innerText = text[lang].highlightBtn;

    // NAMES
    if (document.getElementById("maizeName"))
        document.getElementById("maizeName").innerText = text[lang].maizeName;

    if (document.getElementById("riceName"))
        document.getElementById("riceName").innerText = text[lang].riceName;

    if (document.getElementById("cassavaName"))
        document.getElementById("cassavaName").innerText = text[lang].cassavaName;

    if (document.getElementById("groundnutName"))
        document.getElementById("groundnutName").innerText = text[lang].groundnutName;

    // PRICES
    if (document.getElementById("maizePrice"))
        document.getElementById("maizePrice").innerText =
            `${text[lang].priceLabel}: 250 - 300 FCFA ${text[lang].perKg}`;


    if (document.getElementById("ricePrice"))
        document.getElementById("ricePrice").innerText =
            `${text[lang].priceLabel}: 400 - 600 FCFA ${text[lang].perKg}`;

    if (document.getElementById("cassavaPrice"))
        document.getElementById("cassavaPrice").innerText =
            `${text[lang].priceLabel}: 150 - 200 FCFA ${text[lang].perKg}`;

    if (document.getElementById("groundnutPrice"))
        document.getElementById("groundnutPrice").innerText =
            `${text[lang].priceLabel}: 500 - 800 FCFA ${text[lang].perKg}`;

    if (document.getElementById("diseaseTitle"))
        document.getElementById("diseaseTitle").innerText = text[lang].diseaseTitle;

    if (document.getElementById("backHome"))
        document.getElementById("backHome").innerText = text[lang].backHome;

    if (document.getElementById("diseaseSubtitle"))
        document.getElementById("diseaseSubtitle").innerText = text[lang].diseaseSubtitle;

    if (document.getElementById("analyzeBtn"))
        document.getElementById("analyzeBtn").innerText = text[lang].analyzeBtn;

    if (document.getElementById("fileText"))
        document.getElementById("fileText").innerText = text[lang].fileText;

    if (document.getElementById("uploadImage"))
        document.getElementById("uploadImage").innerText = text[lang].uploadImage;

    if (document.getElementById("aboutTitle"))
        document.getElementById("aboutTitle").innerText = text[lang].aboutTitle;
    if (document.getElementById("aboutText1"))
        document.getElementById("aboutText1").innerText = text[lang].aboutText1;
    if (document.getElementById("aboutText2"))
        document.getElementById("aboutText2").innerText = text[lang].aboutText2;
    if (document.getElementById("aboutText3"))
        document.getElementById("aboutText3").innerText = text[lang].aboutText3;

    if (document.getElementById("backgroundTitle"))
        document.getElementById("backgroundTitle").innerText = text[lang].backgroundTitle;
    if (document.getElementById("backgroundText1"))
        document.getElementById("backgroundText1").innerText = text[lang].backgroundText1;
    if (document.getElementById("backgroundText2"))
        document.getElementById("backgroundText2").innerText = text[lang].backgroundText2;
    if (document.getElementById("backgroundText3"))
        document.getElementById("backgroundText3").innerText = text[lang].backgroundText3;
    if (document.getElementById("backgroundText4"))
        document.getElementById("backgroundText4").innerText = text[lang].backgroundText4;
    if (document.getElementById("backgroundText5"))
        document.getElementById("backgroundText5").innerText = text[lang].backgroundText5;

    if (document.getElementById("solutionTitle"))
        document.getElementById("solutionTitle").innerText = text[lang].solutionTitle;
    if (document.getElementById("solutionText1"))
        document.getElementById("solutionText1").innerText = text[lang].solutionText1;
    if (document.getElementById("solutionText2"))
        document.getElementById("solutionText2").innerText = text[lang].solutionText2;
    if (document.getElementById("solutionText3"))
        document.getElementById("solutionText3").innerText = text[lang].solutionText3;

    if (document.getElementById("featuresTitle"))
        document.getElementById("featuresTitle").innerText = text[lang].featuresTitle;
    if (document.getElementById("feature1"))
        document.getElementById("feature1").innerText = text[lang].feature1;
    if (document.getElementById("feature2"))
        document.getElementById("feature2").innerText = text[lang].feature2;
    if (document.getElementById("feature3"))
        document.getElementById("feature3").innerText = text[lang].feature3;
    if (document.getElementById("feature4"))
        document.getElementById("feature4").innerText = text[lang].feature4;

    if (document.getElementById("impactTitle"))
        document.getElementById("impactTitle").innerText = text[lang].impactTitle;
    if (document.getElementById("impactText1"))
        document.getElementById("impactText1").innerText = text[lang].impactText1;
    if (document.getElementById("impactText2"))
        document.getElementById("impactText2").innerText = text[lang].impactText2;
    if (document.getElementById("impactText3"))
        document.getElementById("impactText3").innerText = text[lang].impactText3;
    if (document.getElementById("impactText4"))
        document.getElementById("impactText4").innerText = text[lang].impactText4;
    if (document.getElementById("impactText5"))
        document.getElementById("impactText5").innerText = text[lang].impactText5;
    if (document.getElementById("impactText6"))
        document.getElementById("impactText6").innerText = text[lang].impactText6;
    if (document.getElementById("impactText7"))
        document.getElementById("impactText7").innerText = text[lang].impactText7;

    if (document.getElementById("sustainabilityTitle"))
        document.getElementById("sustainabilityTitle").innerText = text[lang].sustainabilityTitle;
    if (document.getElementById("sustainabilityText1"))
        document.getElementById("sustainabilityText1").innerText = text[lang].sustainabilityText1;
    if (document.getElementById("sustainabilityText2"))
        document.getElementById("sustainabilityText2").innerText = text[lang].sustainabilityText2;
    if (document.getElementById("sustainabilityText3"))
        document.getElementById("sustainabilityText3").innerText = text[lang].sustainabilityText3;
    if (document.getElementById("sustainabilityText4"))
        document.getElementById("sustainabilityText4").innerText = text[lang].sustainabilityText4;
    if (document.getElementById("sustainabilityText5"))
        document.getElementById("sustainabilityText5").innerText = text[lang].sustainabilityText5;
    if (document.getElementById("sustainabilityText6"))
        document.getElementById("sustainabilityText6").innerText = text[lang].sustainabilityText6;

    if (document.getElementById("conclusionTitle"))
        document.getElementById("conclusionTitle").innerText = text[lang].conclusionTitle;
    if (document.getElementById("conclusionText1"))
        document.getElementById("conclusionText1").innerText = text[lang].conclusionText1;
    if (document.getElementById("conclusionText2"))
        document.getElementById("conclusionText2").innerText = text[lang].conclusionText2;
    if (document.getElementById("conclusionText3"))
        document.getElementById("conclusionText3").innerText = text[lang].conclusionText3;

}

// load language on start
window.onload = function () {

    updateText();

    if (document.querySelectorAll('.lang-btn').length > 0) {

        if (lang === "fr") {
            document.querySelectorAll('.lang-btn')[0]
                .classList.add('active');
        } else {
            document.querySelectorAll('.lang-btn')[1]
                .classList.add('active');
        }
    }
}


// =========================
// 🌦️ WEATHER FUNCTION
// =========================

function changeWeather(day) {

    const data = {
        today: {
            en: {
                title: "Today: Sunny ☀️",
                temp: "Temperature: 30°C",
                advice: "Good day for farming activities."
            },
            fr: {
                title: "Aujourd’hui : Ensoleillé ☀️",
                temp: "Température : 30°C",
                advice: "Bonne journée pour les activités agricoles."
            }
        },

        day1: {
            en: {
                title: "Day 1: Rainy 🌧️",
                temp: "Temperature: 27°C",
                advice: "Avoid fertilizer and spraying crops."
            },
            fr: {
                title: "Jour 1 : Pluvieux 🌧️",
                temp: "Température : 27°C",
                advice: "Évitez l’engrais et la pulvérisation."
            }
        },

        day2: {
            en: {
                title: "Day 2: Cloudy ☁️",
                temp: "Temperature: 28°C",
                advice: "Good for monitoring crops."
            },
            fr: {
                title: "Jour 2 : Nuageux ☁️",
                temp: "Température : 28°C",
                advice: "Bon pour surveiller les cultures."
            }
        },

        day3: {
            en: {
                title: "Day 3: Sunny ☀️",
                temp: "Temperature: 31°C",
                advice: "Good for planting and harvesting."
            },
            fr: {
                title: "Jour 3 : Ensoleillé ☀️",
                temp: "Température : 31°C",
                advice: "Bon pour planter et récolter."
            }
        }

    };

    const selected = data[day][lang];

    document.getElementById("weatherTitle").innerText = selected.title;
    document.getElementById("temp").innerText = selected.temp;
    document.getElementById("advice").innerText = selected.advice;
}


// =========================
// 🌾 CROP SEARCH
// =========================

function searchCrop() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let crops = document.getElementsByClassName("crop-card");

    for (let i = 0; i < crops.length; i++) {
        let text = crops[i].innerText.toLowerCase();
        crops[i].style.display = text.includes(input) ? "block" : "none";
    }
}


// =========================
// 💰 PRICE HIGHLIGHT
// =========================

function highlightCheap() {
    let cards = document.getElementsByClassName("price-card");

    for (let i = 0; i < cards.length; i++) {
        let text = cards[i].innerText;

        if (text.includes("150") || text.includes("200")) {
            cards[i].style.border = "3px solid green";
        } else {
            cards[i].style.border = "3px solid red";
        }
    }
}


// =========================
// 🌿 DISEASE SIMULATION
// =========================

function analyzeImage() {

    let result = document.getElementById("result");

    let diseases = [
        {
            name: "🌿 Leaf Blight",
            level: "High Risk ⚠️",
            treatment: "Apply fungicide immediately."
        },
        {
            name: "🍂 Nutrient Deficiency",
            level: "Medium Risk ⚠️",
            treatment: "Add fertilizer and improve soil."
        },
        {
            name: "🦠 Bacterial Infection",
            level: "High Risk ⚠️",
            treatment: "Remove infected areas."
        },
        {
            name: "✅ Healthy Plant",
            level: "No Disease",
            treatment: "No treatment needed."
        }
    ];

    let random = Math.floor(Math.random() * diseases.length);
    let d = diseases[random];

    result.innerHTML = `
        <h3>${d.name}</h3>
        <p><b>${d.level}</b></p>
        <p><b>Treatment:</b> ${d.treatment}</p>
    `;
}

