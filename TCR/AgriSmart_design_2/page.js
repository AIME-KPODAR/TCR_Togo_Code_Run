// ===== DATA =====
const i18n = {
  fr:{
    hello:'Bonjour, agriculteur',
    alert_rain:'Fortes pluies prévues dans 48h — Reportez l\'épandage d\'engrais pour éviter le lessivage.',
    q_scan:'Scanner étiquette',q_scan_d:'Identifier un produit en quelques secondes',
    q_disease:'Diagnostiquer',q_disease_d:'Photographiez une feuille malade',
    q_meteo:'Météo agricole',q_meteo_d:'Alertes et conseils personnalisés',
    q_market:'Cours du marché',q_market_d:'Prix réels des marchés locaux',
    cal_title:'Calendrier agricole — Juillet',
    cam_label:'Pointez vers l\'étiquette du produit',
    upload_title:'Prendre une photo de la plante',
    upload_sub:'Appuyez pour ouvrir la caméra · Résultat en 3 secondes',
  },
  ewe:{
    hello:'Woezon, dusimenya ŋutsu',
    alert_rain:'Tsidzidzi ga le xɔme eve me — Ɖeka agble nututi na ame wò le ŋu o.',
    q_scan:'Scan kakla',q_scan_d:'Tia agble ŋuti ɖevi sesie o',
    q_disease:'Agble dɔwɔna',q_disease_d:'Dze foto le fo le nyateƒe',
    q_meteo:'Dzɔdzɔe ŋkume',q_meteo_d:'Sesie kple susu',
    q_market:'Xɔ ŋkume',q_market_d:'Dzedze ŋkume le ago me',
    cal_title:'Agble calendar — Siamlɔm',
    cam_label:'Dze ɛ le kakla ŋu',
    upload_title:'Dze foto le agble me',
    upload_sub:'Tia be wo na camera vɔ · Ŋkuɖoɖo le sekend 3 me',
  },
  kab:{
    hello:'Anγa, agmar n umazay',
    alert_rain:'Anzar amellal d-iteddun deg 48 isragen — Iγ turaliḍ amazay am wakud-nni.',
    q_scan:'Γer label',q_scan_d:'Issin aẓar s wayen ara d-iffeɣ',
    q_disease:'Afran n tenfaliyin',q_disease_d:'Afer tasɣunt n wedfel',
    q_meteo:'Azal n waman',q_meteo_d:'Tilɣivin d tignatin',
    q_market:'Azal n suq',q_market_d:'Isemnaw n suq amalay',
    cal_title:'Taffa n uɣezdis — Yulyu',
    cam_label:'Γer ɣer label n uẓar',
    upload_title:'Afer tasɣunt n tdart',
    upload_sub:'Ddem tasɣunt · Afran deg 3 n teskanin',
  }
};

const products = [
  {id:1,emoji:'🌿',name:'Engrais NPK 15-15-15',type:'Engrais minéral',cat:'engrais',
   dosage:'2 bouchons (20g) pour 10 litres d\'eau',period:'Au stade 3 feuilles et à la montaison',
   protect:['Gants','Masque','Lunettes'],
   usage:'Dissoudre la dose exacte dans l\'eau avant d\'arroser. Appliquer au pied de la plante, jamais directement sur les feuilles. Arroser le sol après application.',
   risks:[
     {type:'danger',icon:'🌱',title:'Risque culture',desc:'Surdosage → brûlure des racines, jaunissement et mort des feuilles, perte totale de récolte.'},
     {type:'warn',icon:'🫁',title:'Risque santé',desc:'Contact prolongé → irritation cutanée et oculaire. Inhalation → problèmes respiratoires. Porter toujours les équipements.'},
     {type:'eco',icon:'💧',title:'Risque environnement',desc:'Excès d\'azote → pollution des nappes phréatiques, eutrophisation des points d\'eau environnants.'}
   ]},
  {id:2,emoji:'🧴',name:'Glyphosate 360 SL',type:'Herbicide systémique',cat:'pesticide',
   dosage:'3-4 L/ha dilué dans 200L d\'eau',period:'Avant semis ou entre les rangs (hors culture)',
   protect:['Combinaison imperméable','Masque FFP2','Gants nitrile','Bottes'],
   usage:'Ne jamais appliquer par vent fort. Éviter tout contact avec la culture. Attendre 7 jours avant semis. Laver tout le matériel après usage.',
   risks:[
     {type:'danger',icon:'🌱',title:'Risque culture',desc:'Dérive de pulvérisation → mort immédiate des cultures adjacentes. Non sélectif : tue toute végétation.'},
     {type:'warn',icon:'🫁',title:'Risque santé',desc:'Classé potentiellement cancérigène (CIRC). Contact → irritations sévères. Ingestion → urgence médicale immédiate.'},
     {type:'eco',icon:'💧',title:'Risque environnement',desc:'Persistance dans le sol 30-60 jours. Toxique pour les vers de terre et micro-organismes du sol.'}
   ]},
  {id:3,emoji:'🟡',name:'Urée 46%',type:'Engrais azoté',cat:'engrais',
   dosage:'1 bouchon (10g) pour 5 litres d\'eau',period:'Début végétatif et pleine croissance',
   protect:['Gants','Masque'],
   usage:'Appliquer le matin tôt ou le soir pour réduire la volatilisation. Ne pas appliquer avant la pluie. Enterrer légèrement si possible.',
   risks:[
     {type:'danger',icon:'🌱',title:'Risque culture',desc:'Surdosage → brûlures foliaires immédiates. Accumulation → blocage de l\'absorption d\'autres nutriments.'},
     {type:'warn',icon:'🫁',title:'Risque santé',desc:'Poussière → irritation respiratoire. Contact yeux → rincer abondamment à l\'eau.'},
     {type:'eco',icon:'💧',title:'Risque environnement',desc:'Volatilisation en ammoniac → gaz à effet de serre. Lessivage → pollution des eaux souterraines.'}
   ]},
  {id:4,emoji:'🍂',name:'Mancozèbe 80 WP',type:'Fongicide protecteur',cat:'pesticide',
   dosage:'2g pour 1 litre d\'eau',period:'Préventif : tous les 7-10 jours en saison humide',
   protect:['Masque FFP2','Gants','Combinaison'],
   usage:'Agiter avant utilisation. Couvrir toutes les surfaces foliaires. Ne pas appliquer avant la pluie. Respecter un délai de 7 jours avant récolte.',
   risks:[
     {type:'danger',icon:'🌱',title:'Risque culture',desc:'Phytotoxicité si concentration trop forte ou application par forte chaleur.'},
     {type:'warn',icon:'🫁',title:'Risque santé',desc:'Irritant cutané et respiratoire. Exposition prolongée → risques thyroïdiens. Jamais consommé.'},
     {type:'eco',icon:'💧',title:'Risque environnement',desc:'Toxique pour les organismes aquatiques. Ne pas appliquer près des cours d\'eau ou mares.'}
   ]},
  {id:5,emoji:'🌸',name:'Dithane M-45',type:'Fongicide contact',cat:'pesticide',
   dosage:'2.5g pour 1 litre d\'eau',period:'Préventif hebdomadaire en saison humide',
   protect:['Gants','Masque','Lunettes'],
   usage:'Mélanger dans l\'eau froide. Pulvériser en couverture complète. Ne pas dépasser 6 applications par saison. Alterner avec d\'autres fongicides.',
   risks:[
     {type:'danger',icon:'🌱',title:'Risque culture',desc:'Résidus visibles sur fruits → déclassement à la vente.'},
     {type:'warn',icon:'🫁',title:'Risque santé',desc:'Irritant des voies respiratoires. Porter masque FFP2. Laver les mains après usage.'},
     {type:'eco',icon:'💧',title:'Risque environnement',desc:'Très toxique pour les poissons et invertébrés aquatiques.'}
   ]},
  {id:6,emoji:'🟤',name:'DAP (Phosphate diammonique)',type:'Engrais phosphaté',cat:'engrais',
   dosage:'30g par plant au moment du semis',period:'À la plantation, en fond de sillon',
   protect:['Gants'],
   usage:'Placer au fond du sillon avant le semis. Recouvrir de 5cm de terre avant planter. Ne pas mettre en contact direct avec la graine.',
   risks:[
     {type:'danger',icon:'🌱',title:'Risque culture',desc:'Contact direct graine → brûlure de la plantule. Toujours recouvrir de terre.'},
     {type:'warn',icon:'🫁',title:'Risque santé',desc:'Poussière irritante. Éviter inhalation prolongée.'},
     {type:'eco',icon:'💧',title:'Risque environnement',desc:'Excès de phosphore → eutrophisation des eaux. Bloom d\'algues en cas de ruissellement.'}
   ]},
];

const diseases = [
  {id:1,emoji:'🟡',name:'Rouille du maïs',latin:'Puccinia sorghi',crop:'Maïs',img:'🌽',
   remedies:['Ramasser et brûler les feuilles infectées loin du champ','Pulvériser une solution de bicarbonate de soude (10g/L) sur les parties saines','Appliquer du Mancozèbe 80WP (2g/L) en préventif les semaines suivantes','Éviter l\'excès d\'humidité en aérant le feuillage lors des sarclages']},
  {id:2,emoji:'🤎',name:'Cercosporiose bananière',latin:'Mycosphaerella fijiensis',crop:'Bananier',img:'🍌',
   remedies:['Éliminer les feuilles les plus atteintes','Appliquer du soufre micronisé sur les faces inférieures des feuilles','Assurer une bonne circulation d\'air entre les plants','Enrichir le sol en potasse pour fortifier la plante']},
  {id:3,emoji:'⬛',name:'Anthracnose du manioc',latin:'Colletotrichum gloeosporioides',crop:'Manioc',img:'🥔',
   remedies:['Utiliser des boutures saines et certifiées','Traiter les boutures à l\'eau chaude (50°C, 30 min) avant plantation','Éliminer les parties atteintes et brûler','Appliquer Dithane M-45 en pulvérisation']},
  {id:4,emoji:'🟤',name:'Pourriture racinaire',latin:'Phytophthora spp.',crop:'Tomate',img:'🍅',
   remedies:['Améliorer le drainage du sol','Éviter l\'excès d\'irrigation','Traiter le sol avec du phosphonate de potassium','Semer en buttes pour éloigner les racines de l\'eau stagnante']},
];

const crops = [
  {emoji:'🌽',name:'Maïs',region:'Maritime & Plateaux',duration:'90-120 jours',
   stats:{rendement:'2-4 t/ha',eau:'500-800mm',temp:'25-30°C'},
   stages:[
     {name:'Préparation & Semis',desc:'Labourer à 20cm de profondeur. Semer à 25cm sur le rang, 75cm entre rangs. Profondeur de semis : 3-5cm. Date idéale : début des pluies.',duration:'J0 → J10',color:'#16A34A'},
     {name:'Germination & Levée',desc:'Maintenir l\'humidité constante. Ne pas laisser croûter la surface. Désherbage préventif dès le 5e jour.',duration:'J5 → J15',color:'#4ADE80'},
     {name:'Épandage engrais NPK',desc:'Stade 3-4 feuilles : apporter 200kg/ha de NPK 15-15-15. Stade montaison : urée en complément (50kg/ha).',duration:'J20 → J45',color:'#D97706'},
     {name:'Floraison & Pollinisation',desc:'Période critique. Pas de stress hydrique. Surveiller les parasites (chenilles légionnaires). Pas de traitements fongicides à cette période.',duration:'J50 → J70',color:'#7C3AED'},
     {name:'Maturation & Récolte',desc:'Attendre le dessèchement complet des spathes. Récolter quand l\'humidité du grain descend sous 25%. Stocker en lieu sec et aéré.',duration:'J90 → J120',color:'#C9841A'},
   ]},
  {emoji:'🥔',name:'Manioc',region:'Maritime',duration:'9-18 mois',
   stats:{rendement:'8-15 t/ha',eau:'600-1000mm',temp:'25-29°C'},
   stages:[
     {name:'Préparation des boutures',desc:'Sélectionner des tiges de plants sains âgés de 9-12 mois. Couper en sections de 20-25cm avec 5-7 nœuds. Tremper dans fongicide avant plantation.',duration:'J-7 → J0',color:'#16A34A'},
     {name:'Plantation',desc:'Planter à l\'horizontale à 5cm de profondeur. Écartement : 1m x 1m. Éviter les zones inondables. Plantation en buttes recommandée.',duration:'J0 → J15',color:'#4ADE80'},
     {name:'Entretien végétatif',desc:'Sarcler à J30 et J60. Apporter 100kg/ha de NPK 15-15-15 à J45. Surveiller la cochenille farineuse.',duration:'J30 → J120',color:'#D97706'},
     {name:'Contrôle sanitaire',desc:'Inspecter mensuellement. Éliminer les feuilles atteintes d\'anthracnose. Traiter avec Dithane M-45 si nécessaire.',duration:'J60 → J180',color:'#7C3AED'},
     {name:'Récolte',desc:'Racines prêtes à 9-18 mois selon variété. Arracher manuellement ou mécaniquement. Commercialiser rapidement (2-3 jours max après récolte).',duration:'J270+',color:'#C9841A'},
   ]},
  {emoji:'🍠',name:'Igname',region:'Plateaux',duration:'6-9 mois',
   stats:{rendement:'10-20 t/ha',eau:'800-1200mm',temp:'25-30°C'},
   stages:[
     {name:'Préparation du sol',desc:'Labour profond à 40-60cm impératif. Confectionner des buttes de 70cm de hauteur. Espacement : 1m x 1.5m. Sol bien drainé essentiel.',duration:'J-30 → J0',color:'#16A34A'},
     {name:'Plantation des semences',desc:'Utiliser des petits tubercules (tubercules-semences) de 100-200g. Planter au sommet de la butte à 10cm de profondeur. Attendre les premières pluies.',duration:'J0 → J15',color:'#4ADE80'},
     {name:'Tuteurage & croissance',desc:'Placer les tuteurs de 2m dès la levée. L\'igname est une liane : le tuteur est indispensable. Sarcler régulièrement.',duration:'J20 → J60',color:'#D97706'},
     {name:'Fertilisation',desc:'Apporter 300kg/ha NPK 10-20-10 à J30. Complément en urée (60kg/ha) à J60 lors de la montée des lianes.',duration:'J30 → J60',color:'#7C3AED'},
     {name:'Récolte',desc:'Sonder les buttes délicatement à partir de 6 mois. Arracher à la main avec précaution. Stocker dans un endroit frais, sombre et ventilé.',duration:'J180-J270',color:'#C9841A'},
   ]},
  {emoji:'🌾',name:'Sorgho',region:'Plateaux Nord',duration:'90-150 jours',
   stats:{rendement:'1.5-3 t/ha',eau:'300-600mm',temp:'26-34°C'},
   stages:[
     {name:'Semis',desc:'Semer en poquets de 3-4 graines à 5cm de profondeur. Écartement : 60x40cm. Démarier à 2 plants par poquet à J10.',duration:'J0 → J10',color:'#16A34A'},
     {name:'Démariage & sarclo-binage',desc:'Conserver 2 plants vigoureux par poquet. Premier sarclo-binage à J15. Deuxième à J30. Le sorgho tolère la sécheresse mais pas la concurrence.',duration:'J10 → J40',color:'#4ADE80'},
     {name:'Fertilisation',desc:'Apporter 100kg/ha de NPK 14-7-7 à la montée en épis. Le sorgho est économe : éviter les doses excessives en azote.',duration:'J35 → J50',color:'#D97706'},
     {name:'Récolte',desc:'Couper les épis à maturité complète (grains durs). Battre et sécher à 12% d\'humidité. Excellent stockage : résiste jusqu\'à 3 ans en grenier.',duration:'J90 → J150',color:'#C9841A'},
   ]},
];

const market = [
  {emoji:'🌽',name:'Maïs grain',unit:'sac 100kg',price:15000,trend:8,currency:'FCFA'},
  {emoji:'🥔',name:'Manioc frais',unit:'kg',price:180,trend:-3,currency:'FCFA'},
  {emoji:'🍠',name:'Igname blanche',unit:'kg',price:350,trend:5,currency:'FCFA'},
  {emoji:'🌾',name:'Sorgho',unit:'sac 50kg',price:9500,trend:2,currency:'FCFA'},
  {emoji:'🍅',name:'Tomate',unit:'caisse 15kg',price:6000,trend:-8,currency:'FCFA'},
  {emoji:'🥬',name:'Gombo frais',unit:'tas',price:500,trend:12,currency:'FCFA'},
  {emoji:'🥜',name:'Arachide décortiquée',unit:'kg',price:650,trend:1,currency:'FCFA'},
  {emoji:'🍌',name:'Banane plantain',unit:'régime',price:2500,trend:-5,currency:'FCFA'},
];

// ===== STATE =====
let currentLang = 'fr';
let currentPage = 'home';

// ===== INIT =====
window.onload = function(){
  renderProducts();
  renderDiseaseGallery();
  renderCropGrid();
  renderMarket();
  buildAudioWave();
};

// ===== NAVIGATION =====
function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.tab-item').forEach(t=>t.classList.remove('active'));
  const pg = document.getElementById('page-'+id);
  const tab = document.getElementById('tab-'+id);
  if(pg) pg.classList.add('active');
  if(tab) tab.classList.add('active');
  currentPage = id;
}
function goHome(){ showPage('home'); }

// ===== LANGUAGE =====
function setLang(lang, btn){
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  const t = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(t[key]) el.textContent = t[key];
  });
}

// ===== PRODUCTS =====
function renderProducts(filter=''){
  const list = document.getElementById('productList');
  const filtered = filter ? products.filter(p=>p.name.toLowerCase().includes(filter.toLowerCase())||p.type.toLowerCase().includes(filter.toLowerCase())) : products;
  list.innerHTML = '<div class="section-label">'+(filter?'Résultats de recherche':'Produits récents')+'</div>';
  filtered.forEach(p=>{
    const d = document.createElement('div');
    d.className = 'product-card';
    d.innerHTML = `
      <div class="product-emoji">${p.emoji}</div>
      <div class="flex-1">
        <div class="product-name">${p.name}</div>
        <div class="product-cat">${p.type}</div>
      </div>
      <span class="badge badge-${p.cat==='engrais'?'success':'warning'}">${p.cat}</span>
      <div class="product-arrow">›</div>
    `;
    d.onclick = ()=>openDetail(p);
    list.appendChild(d);
  });
}

function filterProducts(){
  const v = document.getElementById('searchInput').value;
  renderProducts(v);
}

function simulateScan(){
  const line = document.getElementById('scanLine');
  line.style.background = '#fff';
  setTimeout(()=>{
    line.style.background = 'var(--leaf)';
    const p = products[Math.floor(Math.random()*products.length)];
    openDetail(p);
  },1500);
}

// ===== PRODUCT DETAIL =====
function openDetail(p){
  document.getElementById('detailEmoji').textContent = p.emoji;
  document.getElementById('detailName').textContent = p.name;
  document.getElementById('detailType').textContent = p.type;
  renderDetailContent(p,'text');
  document.getElementById('detailContent').dataset.product = p.id;
  document.getElementById('detailOverlay').classList.add('open');
}
function closeDetail(){
  document.getElementById('detailOverlay').classList.remove('open');
}

function renderDetailContent(p, mode){
  const el = document.getElementById('detailContent');
  if(mode==='audio'){
    el.innerHTML = `
      <div style="text-align:center;padding:2rem 0">
        <div style="font-size:60px;margin-bottom:1rem">🔊</div>
        <div style="font-size:14px;color:var(--soil);font-weight:600;margin-bottom:0.5rem">Lecture audio en cours</div>
        <div style="font-size:12px;color:var(--soil-light)">Instructions en ${currentLang==='fr'?'Français':currentLang==='ewe'?'Éwé':'Kabyè'} — ${p.name}</div>
        <div style="margin-top:1.5rem;display:flex;gap:10px;justify-content:center">
          <button class="btn btn-primary" style="width:auto" onclick="togglePlay(this)">▶ Lire les instructions</button>
        </div>
      </div>
    `;
    return;
  }
  if(mode==='video'){
    el.innerHTML = `
      <div style="text-align:center;padding:2rem 0">
        <div style="font-size:60px;margin-bottom:1rem">📹</div>
        <div style="font-size:14px;color:var(--soil);font-weight:600;margin-bottom:0.5rem">Micro-tutoriel vidéo</div>
        <div style="font-size:12px;color:var(--soil-light)">Démonstration geste technique — ${p.name}</div>
        <div style="background:var(--cream);border-radius:12px;margin-top:1rem;padding:2rem;color:var(--soil-light);font-size:12px">
          Vidéo disponible hors connexion après premier téléchargement ✓
        </div>
      </div>
    `;
    return;
  }
  // TEXT mode
  let html = `
    <div class="dosage-box">
      <div class="dosage-title">Dosage recommandé</div>
      <div class="dosage-val">${p.dosage}</div>
      <div class="dosage-note">📅 Période : ${p.period}</div>
    </div>
    <div style="margin-bottom:1rem">
      <div class="section-label">Mode d'emploi</div>
      <div style="font-size:13px;color:var(--soil);line-height:1.7">${p.usage}</div>
    </div>
    <div style="margin-bottom:1rem">
      <div class="section-label">Équipements de protection</div>
      <div class="protect-row">
        ${p.protect.map(e=>`<div class="protect-chip">🛡️ ${e}</div>`).join('')}
      </div>
    </div>
    <div>
      <div class="section-label">⚠️ Risques en cas de mauvaise utilisation</div>
      ${p.risks.map(r=>`
        <div class="risk-chip ${r.type}">
          <div class="risk-chip-icon">${r.icon}</div>
          <div>
            <div class="risk-chip-title">${r.title}</div>
            <div class="risk-chip-desc">${r.desc}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  el.innerHTML = html;
}

function setMode(mode, btn){
  document.querySelectorAll('.mode-tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  const pid = document.getElementById('detailContent').dataset.product;
  const p = products.find(x=>x.id==pid);
  if(p) renderDetailContent(p, mode);
}

// ===== DISEASE =====
function renderDiseaseGallery(){
  const g = document.getElementById('diseaseGallery');
  diseases.forEach(d=>{
    g.innerHTML += `
      <div class="disease-card" onclick="showDiseaseResult(${d.id})">
        <div class="disease-img">${d.img}</div>
        <div class="disease-info">
          <div class="disease-info-name">${d.name}</div>
          <div class="disease-info-crop">${d.crop}</div>
        </div>
      </div>
    `;
  });
}

function simulateDisease(){
  const idx = Math.floor(Math.random()*diseases.length);
  showDiseaseResult(diseases[idx].id);
}

function showDiseaseResult(id){
  const d = diseases.find(x=>x.id==id);
  if(!d) return;
  document.getElementById('diseaseName').textContent = d.name;
  document.getElementById('diseaseLatin').textContent = d.latin;
  const rl = document.getElementById('remedyList');
  rl.innerHTML = d.remedies.map((r,i)=>`
    <div class="remedy-item">
      <div class="remedy-num">${i+1}</div>
      <div class="remedy-text">${r}</div>
    </div>
  `).join('');
  const res = document.getElementById('diseaseResult');
  res.classList.add('show');
  res.scrollIntoView({behavior:'smooth',block:'nearest'});
}

// ===== CROPS =====
function renderCropGrid(){
  const g = document.getElementById('cropGrid');
  crops.forEach(c=>{
    g.innerHTML += `
      <div class="crop-card" onclick="openCropDetail('${c.name}')">
        <div class="crop-img">${c.emoji}</div>
        <div class="crop-info">
          <div class="crop-name">${c.name}</div>
          <div class="crop-region">📍 ${c.region}</div>
          <div style="font-size:11px;color:var(--ocre);margin-top:4px;font-weight:600">⏱ ${c.duration}</div>
        </div>
      </div>
    `;
  });
}

function openCropDetail(name){
  const c = crops.find(x=>x.name===name);
  if(!c) return;
  document.getElementById('cropDetailEmoji').textContent = c.emoji;
  document.getElementById('cropDetailName').textContent = c.name;
  document.getElementById('cropDetailRegion').textContent = `📍 ${c.region}`;
  const el = document.getElementById('cropDetailContent');
  el.innerHTML = `
    <div class="stats-row">
      <div class="stat-box"><div class="stat-box-num">${c.stats.rendement}</div><div class="stat-box-label">Rendement moyen</div></div>
      <div class="stat-box"><div class="stat-box-num">${c.stats.eau}</div><div class="stat-box-label">Eau nécessaire</div></div>
      <div class="stat-box"><div class="stat-box-num">${c.stats.temp}</div><div class="stat-box-label">Température</div></div>
    </div>
    <div class="section-label">Calendrier cultural complet</div>
    ${c.stages.map(s=>`
      <div class="crop-stage">
        <div class="stage-dot" style="background:${s.color}"></div>
        <div>
          <div class="stage-name">${s.name}</div>
          <div class="stage-desc">${s.desc}</div>
          <div class="stage-duration">⏱ ${s.duration}</div>
        </div>
      </div>
    `).join('')}
  `;
  document.getElementById('cropOverlay').classList.add('open');
}
function closeCropDetail(){
  document.getElementById('cropOverlay').classList.remove('open');
}

// ===== MARKET =====
function renderMarket(){
  const el = document.getElementById('marketItems');
  market.forEach(m=>{
    const up = m.trend > 0;
    el.innerHTML += `
      <div class="market-item">
        <div class="market-crop-icon">${m.emoji}</div>
        <div>
          <div class="market-crop-name">${m.name}</div>
          <div class="market-crop-unit">Par ${m.unit}</div>
        </div>
        <div class="market-price-col">
          <div class="market-price">${m.price.toLocaleString()}</div>
          <div class="market-price-unit">${m.currency}</div>
          <div class="market-trend ${up?'trend-up':'trend-down'}">${up?'↑':'↓'} ${Math.abs(m.trend)}%</div>
        </div>
      </div>
    `;
  });
}

// ===== AUDIO =====
function buildAudioWave(){
  const w = document.getElementById('audioWave');
  if(!w) return;
  const heights = [6,10,14,18,14,22,14,10,18,14,8,16,20,12,8,16,22,14,10,18,12,8];
  w.innerHTML = heights.map(h=>`<div class="wave-bar" style="height:${h}px"></div>`).join('');
}
let playing = false;
function togglePlay(btn){
  playing = !playing;
  btn.textContent = playing ? '⏸' : '▶';
  if(playing){
    const bars = document.querySelectorAll('.wave-bar');
    let i = 0;
    const iv = setInterval(()=>{
      bars.forEach(b=>b.style.background='rgba(74,222,128,0.4)');
      if(i<bars.length){ bars[i].style.background='var(--leaf)'; i++; }
      else{ clearInterval(iv); playing=false; btn.textContent='▶'; bars.forEach(b=>b.style.background='rgba(74,222,128,0.4)'); }
    }, 80);
  }
}