// =========================
// 🌍 LANGUAGE SYSTEM (FIXED)
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
        calculator: "Farm Calculator",
        community: "Farmer Community",

        weatherMain: "🌦️ Weather Forecast",
        selectDayText: "Select a day 🌤️",
        tempText: "Temperature will appear here",
        adviceTitle: "🌱 Farming Advice",
        adviceText: "Select a day to see advice",

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

        groundnutName: "🥜 Groundnut",
        priceLabel: "Price",
        perKg: "per kg",

        diseaseTitle: "🦠 Disease Detection",
        diseaseSubtitle: "Upload a plant image to detect diseases",
        uploadImage: "📁 Upload Image",
        analyzeBtn: "Analyze 🌱",
        fileText: "No file chosen",
        backHome: "⬅ Back Home"
    },

    fr: {
        title: "Bienvenue à AgriSmart 🌾",
        subtitle: "Votre assistant agricole intelligent",
        weather: "Prévisions météo",
        crops: "Guide des cultures",
        prices: "Prix du marché",
        disease: "Détection de maladies",
        about: "À propos d’AgriSmart",
        contact: "Support",
        calculator: "Calculateur de ferme",
        community: "Communauté",

        weatherMain: "🌦️ Prévisions météo",
        selectDayText: "Choisir un jour 🌤️",
        tempText: "La température apparaîtra ici",
        adviceTitle: "🌱 Conseils agricoles",
        adviceText: "Choisissez un jour pour voir les conseils",

        cropTitle: "🌾 Guide des cultures",
        cropSubtitle: "Recherchez des cultures et apprenez à mieux les cultiver au Togo",
        searchPlaceholder: "Rechercher une culture...",

        maizeName: "🌽 Maïs",
        maizeSeason: "Saison : Pluies",
        maizeAdvice: "Conseil : Engrais après 2 semaines",

        riceName: "🌾 Riz",
        riceSeason: "Saison : Zones humides",
        riceAdvice: "Conseil : Eau constante",

        cassavaName: "🥔 Manioc",
        cassavaSeason: "Saison : Toute l’année",
        cassavaAdvice: "Conseil : Résistant à la sécheresse",

        pricesTitle: "💰 Prix du marché",
        priceSubtitle: "Prix en temps réel 📊",
        highlightBtn: "Mettre en évidence 📊",

        groundnutName: "🥜 Arachide",
        priceLabel: "Prix",
        perKg: "par kg",

        diseaseTitle: "🦠 Détection de maladies",
        diseaseSubtitle: "Téléchargez une image",
        uploadImage: "📁 Télécharger",
        analyzeBtn: "Analyser 🌱",
        fileText: "Aucun fichier",
        backHome: "⬅ Retour"
    }
};

// =========================
// APPLY LANGUAGE
// =========================

function setLanguage(l) {
    lang = l;
    localStorage.setItem("lang", lang);

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    updateText();
}

function updateText() {
    const t = text[lang];

    const set = (id, value) => {
        const el = document.getElementById(id);
        if (el) el.innerText = value;
    };

    const setPlaceholder = (id, value) => {
        const el = document.getElementById(id);
        if (el) el.placeholder = value;
    };

    set("title", t.title);
    set("subtitle", t.subtitle);
    set("weatherText", t.weather);
    set("cropsText", t.crops);
    set("pricesText", t.prices);
    set("diseaseText", t.disease);
    set("aboutText", t.about);
    set("contactText", t.contact);
    set("calculatorText", t.calculator);
    set("forumText", t.community);

    set("weatherMain", t.weatherMain);
    set("weatherTitle", t.selectDayText);
    set("temp", t.tempText);
    set("advice", t.adviceText);

    set("cropTitle", t.cropTitle);
    set("cropSubtitle", t.cropSubtitle);
    setPlaceholder("searchBox", t.searchPlaceholder);

    set("maizeName", t.maizeName);
    set("riceName", t.riceName);
    set("cassavaName", t.cassavaName);

    set("pricesTitle", t.pricesTitle);
    set("priceSubtitle", t.priceSubtitle);
    set("highlightBtn", t.highlightBtn);

    set("groundnutName", t.groundnutName);

    set("diseaseTitle", t.diseaseTitle);
    set("diseaseSubtitle", t.diseaseSubtitle);
    set("uploadImage", t.uploadImage);
    set("analyzeBtn", t.analyzeBtn);
    set("fileText", t.fileText);
    set("backHome", t.backHome);
}

// INIT
window.addEventListener("DOMContentLoaded", () => {
    updateText();
    document.querySelectorAll(".lang-btn").forEach(btn => {
        if (btn.dataset.lang === lang) btn.classList.add("active");
    });
});