import { Analytics } from '@vercel/analytics/react';
import { useState } from 'react';
import React from 'react'; 

// --- BILD KONFIGURATION ---
const BILDER = {
  logo: {
    src: "/logo.png", 
    fallback: "https://via.placeholder.com/150x150/000000/ffffff?text=Z"
  },
  hero: {
    src: "/hero.jpg",
    fallback: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
  },
  kraft: {
    src: "/kraft.jpg", 
    fallback: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  laufen: {
    src: "/laufen.jpg",
    fallback: "https://images.unsplash.com/photo-1552674605-46d526748b97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  boxen: {
    src: "/boxen.jpg",
    fallback: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
};

// --- RECHTLICHE TEXTE (VOLLSTÄNDIG) ---
const LEGAL_TEXTS = {
  agb: `
    <h3>Allgemeine Geschäftsbedingungen (AGB)</h3>
    <p><strong>Einzelunternehmen:</strong> Christoph Zehentbauer eU<br/>
    <strong>Inhaber:</strong> Christoph Zehentbauer</p>

    <h4>1. Geltungsbereich</h4>
    <p>Diese AGB gelten für sämtliche Dienstleistungen von Christoph Zehentbauer eU, einschließlich Krafttraining, Boxtraining, Lauftraining sowie aller Einzelcoachings, Gruppentrainings, 10er-Blöcke und Monatsabonnements.</p>

    <h4>2. Vertragsabschluss</h4>
    <p>Ein Vertrag kommt durch Buchung und Bestätigung zustande. Mit der Anmeldung erkennt der Kunde diese AGB verbindlich an. Die Teilnahme setzt volle Geschäftsfähigkeit bzw. bei Minderjährigen die schriftliche Zustimmung der Erziehungsberechtigten voraus.</p>

    <h4>3. Leistungsumfang</h4>
    <p>Der Leistungsumfang ergibt sich aus der jeweiligen Buchung. Änderungen von Ort, Inhalt, Dauer oder Zeit können aus organisatorischen Gründen erfolgen, ohne dass daraus Ansprüche abgeleitet werden können.</p>

    <h4>4. Zahlungsbedingungen</h4>
    <p>Die Preise werden vor Vertragsabschluss bekanntgegeben. Zahlungen sind vor Trainingsbeginn oder gemäß Zahlungsvereinbarung fällig. Bei Abonnements erfolgt die Zahlung im Voraus.</p>

    <h4>5. Absage, Stornierung, Nichterscheinen</h4>
    <p>Einzeltermine können bis 24 Stunden vorher abgesagt werden. Bei späterer Absage oder Nichterscheinen kann die volle Gebühr verrechnet werden. Nicht konsumierte Trainingseinheiten verfallen — eine Rückerstattung erfolgt nicht.</p>

    <h4>6. Gesundheit, Risiko und Eigenverantwortung</h4>
    <p>(1) Die Teilnahme am Training erfolgt ausschließlich auf eigenes Risiko und in eigener Verantwortung des Kunden.<br/>
    (2) Der Kunde bestätigt, körperlich und gesundheitlich in der Lage zu sein, am Training teilzunehmen.<br/>
    (3) Der Kunde verpflichtet sich, den Trainer vor Beginn über gesundheitliche Einschränkungen, Vorerkrankungen oder Verletzungen zu informieren.<br/>
    (4) Der Kunde trägt selbst die Verantwortung für seine Leistungsgrenzen, körperliche Belastbarkeit und Einschätzung von Risiken.<br/>
    (5) Bei Boxtraining, Sparring, Schlagübungen und Partnerkontakt besteht grundsätzlich ein erhöhtes Verletzungsrisiko, das auch durch korrekte Anleitung nicht ausgeschlossen werden kann.<br/>
    (6) Der Kunde nimmt ausdrücklich zur Kenntnis, dass es zu Muskelkater, Zerrungen, Prellungen, Verstauchungen, Stürzen, Schlägen, Kollisionen oder sonstigen trainingsbedingten körperlichen Auswirkungen kommen kann — ohne dass daraus Haftungsansprüche entstehen.</p>

    <h4>7. Haftung</h4>
    <p>(1) Christoph Zehentbauer eU haftet ausschließlich bei Vorsatz.<br/>
    (2) Eine Haftung für grobe oder leichte Fahrlässigkeit ist — soweit gesetzlich zulässig — ausgeschlossen.<br/>
    (3) Eine Haftung für Verletzungen oder gesundheitliche Schäden während oder im Zusammenhang mit dem Training ist ausgeschlossen.<br/>
    (4) Eine Haftung für Schäden, die durch Selbstüberschätzung, Missachtung von Anweisungen, bewusste Grenzüberschreitung, falsche Technik, zu hohe Gewichtsbelastung oder sonstiges risikobehaftetes Verhalten entstehen, ist ausgeschlossen.<br/>
    (5) Für Diebstahl, Verlust oder Beschädigung von mitgebrachter Kleidung, Geräten, Wertgegenständen oder persönlichen Gegenständen wird keine Haftung übernommen.<br/>
    (6) Der Kunde verzichtet ausdrücklich auf jegliche Schadenersatzansprüche gegenüber Christoph Zehentbauer eU, ausgenommen solche, die aus nachweislichem Vorsatz entstehen.</p>

    <h4>8. Minderjährige</h4>
    <p>Die Teilnahme Minderjähriger erfolgt nur mit schriftlicher Einwilligung der Erziehungsberechtigten. Eine Beaufsichtigung durch den Trainer findet nicht statt.</p>

    <h4>9. Datenschutz</h4>
    <p>Personenbezogene Daten werden ausschließlich zum Zweck der Durchführung der Trainingsdienstleistung verarbeitet und nicht an Dritte weitergegeben, sofern keine gesetzliche Verpflichtung besteht.</p>

    <h4>10. Foto- und Videoaufnahmen</h4>
    <p>Aufnahmen von Kunden dürfen nur mit deren ausdrücklicher Zustimmung verwendet oder veröffentlicht werden.</p>

    <h4>11. Vertragslaufzeit bei Abonnements</h4>
    <p>Abos laufen jeweils einen Monat und verlängern sich automatisch, wenn nicht bis spätestens 7 Tage vor Ablauf schriftlich gekündigt wird.</p>

    <h4>12. Trainingsdurchführung und Änderungen</h4>
    <p>Trainingsinhalte, -zeiten und -orte können aus organisatorischen Gründen geändert werden. Ein Anspruch auf Durchführung einer Einheit mit einem bestimmten Trainer besteht nicht.</p>

    <h4>13. Höhere Gewalt und Ausfälle</h4>
    <p>Bei Ausfällen durch Krankheit, behördliche Anordnung, Wetterbedingungen oder andere nicht beeinflussbare Ereignisse besteht kein Anspruch auf Rückerstattung. Es kann nach Möglichkeit ein Ersatztermin angeboten werden — ein Anspruch darauf besteht nicht.</p>

    <h4>14. Schlussbestimmungen</h4>
    <p>Es gilt ausschließlich österreichisches Recht.<br/>
    (1) Gerichtsstand ist, soweit zulässig, der Geschäftssitz von Christoph Zehentbauer eU.<br/>
    (2) Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.<br/>
    (3) Mündliche Nebenabreden bestehen nicht. Änderungen dieser AGB müssen schriftlich erfolgen.</p>
  `,
  impressum: `
    <h3>Impressum</h3>
    <p><strong>Christoph Zehentbauer e.U.</strong></p>
    <p>Erstellung von Trainingskonzepten für gesundheitsbewusste Personen (freies Gewerbe)<br/>
    Reglementierte Tätigkeit gemäß Gewerbeordnung: Fitnesstrainer</p>
    <p>Mitglied der Wirtschaftskammer Österreich – Fachgruppe Freizeit- und Sportbetriebe</p>
    <p><strong>Inhaber:</strong> Christoph Zehentbauer<br/>
    <strong>Anschrift:</strong> Schießstätte 14, 3580 Horn, Österreich<br/>
    <strong>Telefon:</strong> +43 664 885 99 040<br/>
    <strong>E-Mail:</strong> ChristophZehentbauer@gmail.com<br/>
    <strong>Steuernummer:</strong> 23201/9901<br/>
    <strong>Unternehmensform:</strong> Eingetragenes Einzelunternehmen (e.U.)<br/>
    <strong>Behörde gemäß ECG:</strong> Bezirkshauptmannschaft Horn</p>
    <h4>Haftungsausschluss</h4>
    <p>Alle Inhalte dienen ausschließlich Informationszwecken. Die Nutzung der bereitgestellten Inhalte erfolgt auf eigene Verantwortung. Trotz sorgfältiger inhaltlicher Kontrolle wird keine Haftung für Aktualität, Richtigkeit oder Vollständigkeit übernommen.</p>
    <h4>Urheberrecht</h4>
    <p>Alle Inhalte, Texte, Fotos und Grafiken dieser Webseite unterliegen dem Urheberrecht und dürfen ohne ausdrückliche Zustimmung nicht verwendet werden.</p>
  `,
  datenschutz: `
    <h3>Datenschutzerklärung</h3>
    <p>Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten personenbezogene Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003). In diesen Datenschutzinformationen informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen dieser Website.</p>

    <h4>1. Verantwortlicher</h4>
    <p><strong>Christoph Zehentbauer e.U.</strong><br/>
    Schießstätte 14<br/>
    3580 Horn, Österreich<br/>
    Telefon: +43 664 885 99 040<br/>
    E-Mail: christophzehentbauer@gmail.com</p>

    <h4>2. Erfassung und Verarbeitung personenbezogener Daten</h4>
    <p>Wir verarbeiten jene personenbezogenen Daten, die Sie uns freiwillig im Rahmen einer Kontaktaufnahme zur Verfügung stellen, wie:</p>
    <ul>
    <li>Name</li>
    <li>Telefonnummer</li>
    <li>E-Mail-Adresse</li>
    <li>trainingsbezogene Angaben</li>
    </ul>
    <p>Die Verarbeitung erfolgt ausschließlich zur Kommunikation mit Ihnen und zur Durchführung vorvertraglicher oder vertraglicher Maßnahmen.</p>

    <h4>3. Rechtsgrundlagen der Verarbeitung</h4>
    <p>Die Verarbeitung erfolgt auf Basis von:<br/>
    Art. 6 Abs. 1 lit. b DSGVO (Vertrag & Trainingsabwicklung)<br/>
    Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)<br/>
    Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</p>
    <p>Es werden keine sensiblen medizinischen Gesundheitsdaten im Sinne der DSGVO verarbeitet.</p>

    <h4>4. Speicherdauer</h4>
    <p>Personenbezogene Daten werden nur so lange gespeichert, wie dies zur Erfüllung der Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen dies vorschreiben.</p>
    <p><strong>Hinweis zur Rechnungslegung:</strong><br/>
    Im Rahmen der Rechnungslegung werden personenbezogene Daten gemäß den steuerlichen Aufbewahrungsfristen 7 Jahre gespeichert.</p>

    <h4>5. Weitergabe von Daten</h4>
    <p>Eine Weitergabe an Dritte erfolgt ausschließlich:</p>
    <ul>
    <li>wenn dies gesetzlich notwendig ist</li>
    <li>wenn es zur Vertragserfüllung benötigt wird</li>
    <li>wenn Sie ausdrücklich zustimmen</li>
    </ul>
    <p>Eine Weiterleitung an Drittstaaten findet nicht statt.</p>

    <h4>6. Datensicherheit</h4>
    <p>Wir treffen angemessene technische und organisatorische Maßnahmen, um personenbezogene Daten vor unbefugtem Zugriff, Verlust oder Missbrauch zu schützen.</p>

    <h4>7. Zugriffsdaten / Server-Logs</h4>
    <p>Beim Besuch dieser Website werden automatisch technische Daten gespeichert (z. B. Browsertyp, IP-Adresse, Zeitpunkt).<br/>
    Diese Daten dienen ausschließlich der technischen Funktionssicherheit und erlauben keinen Rückschluss auf bestimmte Personen.</p>

    <h4>8. Cookies</h4>
    <p>Diese Website kann Cookies verwenden, um die Funktionalität zu verbessern.<br/>
    Sie können Cookies über Ihren Browser deaktivieren — die Nutzung der Website ist auch ohne Cookies möglich.</p>
    <p><strong>Cookie-Banner:</strong><br/>
    Diese Website verwendet Cookies. Mit der Nutzung stimmen Sie der Verarbeitung gemäß Datenschutzerklärung zu.</p>

    <h4>9. Kontaktaufnahme & Terminvereinbarung</h4>
    <p>Bei Kontaktaufnahme über Telefon, E-Mail, Kontaktformular oder WhatsApp werden personenbezogene Daten ausschließlich zur Bearbeitung der Anfrage verarbeitet und nicht an Dritte weitergegeben.</p>

    <h4>10. WhatsApp-Datenschutzhinweis</h4>
    <p>Die Kontaktaufnahme über WhatsApp erfolgt freiwillig. Dabei werden personenbezogene Daten über die Server von WhatsApp verarbeitet. Mit der Kontaktaufnahme stimmen Sie dieser Übertragung zu. Eine alternative Kontaktmöglichkeit besteht über Telefon oder E-Mail.</p>

    <h4>11. Social-Media-Hinweis</h4>
    <p>Beim Anklicken von Links zu Social-Media-Plattformen (Instagram, Facebook etc.) verlassen Sie unsere Website.<br/>
    Es gelten dann die Datenschutzbestimmungen der jeweiligen Plattform — auf die wir keinen Einfluss haben.</p>

    <h4>12. Fotos, Videos & Leistungsdaten im Training</h4>
    <p>Vor einer eventuellen Veröffentlichung von Fotos, Videos oder Trainingsfortschritten erfolgt eine ausdrückliche Einwilligung durch den Kunden.</p>
    <p><strong>Einwilligungserklärung:</strong><br/>
    Der Kunde kann freiwillig zustimmen, dass Trainingsbilder oder Leistungsdaten dokumentiert werden. Eine Veröffentlichung erfolgt ausschließlich bei gesonderter Zustimmung. Ein Widerruf ist jederzeit möglich.</p>

    <h4>13. Keine medizinische Beratung</h4>
    <p>Im Rahmen der Kommunikation werden keine medizinischen Diagnosen oder therapeutischen Empfehlungen gegeben. Unsere Tätigkeit bezieht sich ausschließlich auf sportliche Trainingsbetreuung.</p>

    <h4>14. Rechte der betroffenen Personen</h4>
    <p>Sie haben jederzeit das Recht auf:</p>
    <ul>
    <li>Auskunft (Art. 15 DSGVO)</li>
    <li>Berichtigung (Art. 16 DSGVO)</li>
    <li>Löschung (Art. 17 DSGVO)</li>
    <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
    <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
    <li>Widerspruch (Art. 21 DSGVO)</li>
    </ul>
    <p>Bei Fragen wenden Sie sich bitte direkt an uns.</p>
    <p>Beschwerden können außerdem an die österreichische Datenschutzbehörde gerichtet werden:<br/>
    <a href='https://www.dsb.gv.at' target='_blank' style='color: #dc2626;'>www.dsb.gv.at</a></p>

    <h4>15. Kontakt für Datenschutzanliegen</h4>
    <p><strong>Christoph Zehentbauer e.U.</strong><br/>
    Schießstätte 14<br/>
    3580 Horn, Österreich<br/>
    Telefon: +43 664 885 99 040<br/>
    E-Mail: christophzehentbauer@gmail.com</p>

    <h4>16. Änderungen der Datenschutzerklärung</h4>
    <p>Diese Datenschutzerklärung kann bei gesetzlichen Änderungen oder Erweiterung unserer Leistungen angepasst werden.</p>
  `
};

// --- GLOBAL STYLES (Design) ---
const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');

  * { box-sizing: border-box; }
   
  html, body {
    width: 100%;
    margin: 0; 
    padding: 0; 
    background-color: #000000; 
    color: #f3f4f6;
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  
  #root {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
  }

  .container { 
    width: 100%;
    max-width: 1400px; 
    margin: 0 auto; 
    padding: 0 20px; 
  }
   
  .text-red { color: #dc2626; }
  .bg-red { background-color: #dc2626; color: white; }
  .bg-dark { background-color: #111; }
   
  .text-white { color: #ffffff; }
   
  .uppercase { text-transform: uppercase; }
  .italic { font-style: italic; }
  .font-black { font-weight: 900; }
  .font-bold { font-weight: 700; }
   
  .flex { display: flex; }
  .flex-col { flex-direction: column; }
  .items-center { align-items: center; }
  .justify-center { justify-content: center; }
  .justify-between { justify-content: space-between; }
  .gap-4 { gap: 1rem; }
  .gap-8 { gap: 2rem; }
   
  .grid { display: grid; gap: 20px; }
   
  .text-responsive-huge { font-size: 2.5rem; } 
  .text-responsive-large { font-size: 2rem; } 
  
  .value-header {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 10px;
  }
  .value-header h4 {
    margin: 0;
  }

  /* --- CARD OVERLAY OPTIMIERUNG --- */
  .card-overlay {
    position: absolute; 
    bottom: 0; 
    left: 0; 
    width: 100%;
    /* Stärkerer Gradient für bessere Lesbarkeit auf dem Handy */
    background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%);
    z-index: 2;
    padding: 20px;
  }

  /* RESPONSIVE SCHRIFTGRÖSSEN FÜR KARTEN-TITEL */
  .card-title {
    font-size: 1.5rem; 
    margin: 0 0 8px 0;
    color: white;
    text-transform: uppercase;
    font-style: italic;
    font-weight: 900;
    display: flex;
    align-items: center;
    gap: 10px;
    line-height: 1.1;
    text-shadow: 0 2px 10px rgba(0,0,0,0.8);
  }

  .card-description {
     color: #e5e7eb; 
     font-size: 0.9rem; 
     line-height: 1.4;
     text-shadow: 0 1px 4px rgba(0,0,0,0.8);
  }

  /* --- DESKTOP STYLES --- */
  @media (min-width: 768px) {
    .md-row { flex-direction: row !important; }
    .md-grid-2 { grid-template-columns: 1fr 1fr; }
    .md-grid-3 { grid-template-columns: 1fr 1fr 1fr; }
    .md-text-left { text-align: left; }
    .md-hide { display: none !important; }
    
    .md-span-2-col { grid-column: span 2; }
    .md-span-2-row { grid-row: span 2; }
    
    .bento-grid { grid-auto-rows: 500px; }
    
    h1 { font-size: 5rem; line-height: 0.95; }
    
    .text-responsive-huge { font-size: 4rem; }
    .text-responsive-large { font-size: 3rem; }

    .value-header { display: block; }
    .value-header .text-red { margin-bottom: 15px; }
    .value-header h4 { margin-bottom: 10px; }
    .value-card { padding: 30px; }
    
    .nav-gap-wide { gap: 3rem; }

    /* Desktop Overlay und Schrift */
    .card-overlay {
      padding: 30px;
      background: linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.1));
    }
    .card-title {
      font-size: 2rem;
      margin-bottom: 10px;
      gap: 1rem;
    }
    .card-description {
      font-size: 1rem; 
      line-height: 1.5;
    }
  }

  @media (min-width: 1440px) {
    h1 { font-size: 7rem; }
    .bento-grid { grid-auto-rows: 600px; }
    .container { max-width: 1600px; }
  }

  .values-grid {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr; 
    width: 100%;
  }
  @media (min-width: 768px) {
    .values-grid { grid-template-columns: 1fr 1fr; }
  }

  /* --- MOBILE SPECIFICS --- */
  @media (max-width: 767px) {
    .mobile-hide { display: none; }
    .mobile-col { flex-direction: column; }
    
    h1 { font-size: 3.5rem; line-height: 1.1; letter-spacing: -1px; }
    
    .grid { grid-template-columns: 1fr; }
    .bento-grid { grid-auto-rows: auto; }
    
    .card { height: 400px; min-height: 400px; } 
    
    .hero-content { padding-top: 80px; }
    .value-card { padding: 20px; }
  }

  .nav-fixed { 
    position: fixed; top: 0; left: 0; width: 100%; z-index: 100; 
    background: rgba(0,0,0,0.9); backdrop-filter: blur(10px); 
    padding: 20px 0; 
    border-bottom: 1px solid #333; 
  }
   
  .nav-link { 
    color: #e5e7eb; text-decoration: none; font-weight: 700; text-transform: uppercase; font-size: 0.9rem; letter-spacing: 1px; transition: color 0.3s ease; 
  }
  .nav-link:hover { color: #dc2626; }

  .nav-highlight {
    color: #dc2626; border: 1px solid #dc2626; padding: 8px 16px; border-radius: 4px; transition: all 0.3s ease;
  }
  .nav-highlight:hover { background-color: #dc2626; color: white; }

  .hero-section { position: relative; height: 100vh; min-height: 600px; display: flex; align-items: center; justify-content: center; text-align: center; overflow: hidden; z-index: 0; width: 100%; }
  .hero-bg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.5; z-index: 0; filter: grayscale(100%); }
  .hero-gradient { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to top, black, transparent); z-index: 1; }
  .hero-content { position: relative; z-index: 10; width: 100%; }
   
  .card { background: #111; border: 1px solid #333; border-radius: 20px; overflow: hidden; position: relative; transition: transform 0.3s; }
  .card:hover { transform: translateY(-5px); border-color: #555; }
  .card-img { width: 100%; height: 100%; object-fit: cover; opacity: 0.6; transition: 0.5s; filter: grayscale(100%); }
  .card:hover .card-img { opacity: 0.8; filter: grayscale(0%); transform: scale(1.05); }

  .value-card {
    background-color: #111; border-radius: 15px; border: 1px solid #222;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: flex; flex-direction: column; justify-content: flex-start; height: 100%;
  }

  .value-card:hover { transform: scale(1.05); background-color: #161616; border-color: #dc2626; box-shadow: 0 20px 40px rgba(220, 38, 38, 0.15); }
  .value-card h4 { font-weight: 900; text-transform: uppercase; color: #fff; letter-spacing: 1px; }
  .value-card p { color: #c7c7c7; font-size: 0.9rem; line-height: 1.6; }

  .pricing-card { background: #111; border: 1px solid #333; padding: 30px; border-radius: 20px; display: flex; flex-direction: column; height: 100%; }
  .pricing-card.popular { border: 2px solid #dc2626; box-shadow: 0 0 20px rgba(220, 38, 38, 0.2); }
   
  .btn { display: inline-flex; align-items: center; gap: 10px; padding: 15px 30px; font-weight: 900; text-transform: uppercase; text-decoration: none; border-radius: 4px; transition: 0.2s; cursor: pointer; border: none; }
  .btn-primary { background: #dc2626; color: white !important; }
  .btn-primary:hover { background: #b91c1c; transform: translateY(-2px); color: white !important; }
   
  .btn-outline { border: 2px solid #333; color: white; background: transparent; }
  .btn-outline:hover { border-color: white; background: white; color: black; }

  .contact-card {
    background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 20px; border-radius: 12px; display: flex; align-items: center; gap: 15px; text-decoration: none; color: white;
    transition: all 0.3s ease; width: 100%; position: relative; overflow: hidden;
  }
  .contact-card:hover { background: rgba(220, 38, 38, 0.15); border-color: #dc2626; transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.3); }
  .contact-icon { width: 50px; height: 50px; border-radius: 12px; background: rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; color: white; transition: all 0.3s ease; }
  .contact-card:hover .contact-icon { background: #dc2626; transform: scale(1.1); }
   
  .modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.9); z-index: 2000; display: flex; justify-content: center; alignItems: center; padding: 20px; }
  .modal-content { background: #111; border: 1px solid #333; border-radius: 10px; max-width: 800px; width: 100%; max-height: 80vh; overflow-y: auto; padding: 40px; position: relative; }
  .modal-close { position: absolute; top: 20px; right: 20px; background: none; border: none; color: white; cursor: pointer; }
  .modal-content h3 { color: #dc2626; margin-top: 0; }
  .modal-content h4 { margin-top: 20px; margin-bottom: 10px; color: white; }
  .modal-content p { color: #ccc; line-height: 1.6; margin-bottom: 10px; }
  .modal-content ul { padding-left: 20px; margin-bottom: 10px; color: #ccc; }
  .modal-content li { margin-bottom: 5px; }

  h1 { margin-bottom: 20px; letter-spacing: -2px; }
  h2 { font-size: 1.5rem; margin-bottom: 10px; }
  h3 { font-size: 2.5rem; margin: 0; line-height: 1; }
`;

// --- INTERFACES ---

interface IconProps {
  children?: React.ReactNode; 
  size?: number;
  className?: string;
}

interface SmartImageProps {
    id: keyof typeof BILDER;
    alt: string;
    className?: string;
    style?: React.CSSProperties;
}

interface ModalProps {
    content: string | null;
    onClose: () => void;
}

interface PricingCardProps {
    title: string;
    price: string;
    period?: string;
    features: string[];
    popular?: boolean;
    link: string;
}

interface ContactProps {
    onOpenLegal: (type: keyof typeof LEGAL_TEXTS) => void;
}


// --- ICONS ---
const IconWrapper = ({ children, size = 24, className = "" }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle' }} className={className}>{children}</svg>
);
const ArrowUpRight = (p: Omit<IconProps, 'children'>) => <IconWrapper {...p}><path d="M7 7h10v10"/><path d="M7 17 17 7"/></IconWrapper>;
const MenuIcon = (p: Omit<IconProps, 'children'>) => <IconWrapper {...p}><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></IconWrapper>;
const XIcon = (p: Omit<IconProps, 'children'>) => <IconWrapper {...p}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></IconWrapper>;
const Dumbbell = (p: Omit<IconProps, 'children'>) => <IconWrapper {...p}><path d="m6.5 6.5 11 11"/><path d="m21 21-1-1"/><path d="m3 3 1 1"/><path d="m18 22 4-4"/><path d="m2 6 4-4"/><path d="m3 10 7-7"/><path d="m14 21 7-7"/></IconWrapper>;
const Activity = (p: Omit<IconProps, 'children'>) => <IconWrapper {...p}><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></IconWrapper>;
const Zap = (p: Omit<IconProps, 'children'>) => <IconWrapper {...p}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></IconWrapper>;
const Instagram = (p: Omit<IconProps, 'children'>) => <IconWrapper {...p}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></IconWrapper>;
const Mail = (p: Omit<IconProps, 'children'>) => <IconWrapper {...p}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></IconWrapper>;
const CheckCircle2 = (p: Omit<IconProps, 'children'>) => <IconWrapper {...p}><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></IconWrapper>;
const Phone = (p: Omit<IconProps, 'children'>) => <IconWrapper {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></IconWrapper>;

// --- Helper für Bilder ---
const SmartImage = ({ id, alt, className, style }: SmartImageProps) => {
  const config = BILDER[id];
  return (
    <img 
      src={config.src} 
      alt={alt}
      className={className}
      style={style}
      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
        const target = e.target as HTMLImageElement; 
        target.onerror = null; 
        target.src = config.fallback;
      }}
    />
  );
};

// --- MODAL KOMPONENTE ---
const Modal = ({ content, onClose }: ModalProps) => {
  if (!content) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><XIcon size={32} /></button>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <nav className="nav-fixed">
        <div className="container flex justify-between items-center">
          <div className="flex items-center" style={{ gap: '15px' }}>
            <button 
              onClick={scrollToTop}
              className="font-black italic" 
              style={{ fontSize: '1.5rem', color: 'white', background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              TEAM<span className="text-red">Z</span>
            </button>
          </div>
           
          <div className="mobile-hide flex gap-8 items-center nav-gap-wide"> 
            <a href="#warum-wir" className="nav-link nav-highlight">Warum wir</a> 
            {['Training', 'Preise', 'Kontakt'].map((item: string) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="nav-link">{item}</a>
            ))}
            <a href="#kontakt" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.8rem' }}>Starten <ArrowUpRight size={16} /></a>
          </div>
          <button onClick={() => setIsOpen(true)} className="md-hide" style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}><MenuIcon size={32} /></button>
        </div>
      </nav>
      {isOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'black', zIndex: 200, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}>
          <button onClick={() => setIsOpen(false)} style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: 'white' }}><XIcon size={40} /></button>
          <a key="Warum wir" href="#warum-wir" onClick={() => setIsOpen(false)} style={{ fontSize: '2rem', fontWeight: '900', color: '#dc2626', textDecoration: 'none', textTransform: 'uppercase', fontStyle: 'italic' }}>Warum wir</a>
          {['Training', 'Preise', 'Kontakt'].map((item: string) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={() => setIsOpen(false)} style={{ fontSize: '2rem', fontWeight: '900', color: 'white', textDecoration: 'none', textTransform: 'uppercase', fontStyle: 'italic' }}>{item}</a>
          ))}
        </div>
      )}
    </>
  );
};

const Hero = () => {
  return (
    <section className="hero-section">
      <SmartImage id="hero" className="hero-bg" alt="Gym" style={{}} /> 
      <div className="hero-gradient"></div>
      <div className="container hero-content">
        <h1 className="uppercase italic font-black">DEINE <span className="text-red">STÄRKE.</span><br />UNSER ZIEL.</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto 40px auto', color: '#e5e7eb', fontSize: '1.2rem', lineHeight: '1.6' }}>Individuelles Krafttraining, Laufen und Boxen. Wir machen dich stärker, gesünder und selbstbewusster.</p>
        <div className="flex justify-center mobile-col gap-4">
          <a 
            href="https://api.whatsapp.com/send/?phone=4366488599040&text=Hallo+Christoph%2C+ich+will+gern+bei+einem+Probetraining+mitmachen+und+freue+mich+auf+genaue+Infos." 
            className="btn btn-primary"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Probetraining
          </a>
          <a href="#training" className="btn btn-outline">Angebote ansehen</a>
        </div>
      </div>
    </section>
  );
};

const Philosophy = () => {
  return (
    <section id="warum-wir" style={{ padding: '100px 0', background: 'black' }}>
      <div className="container">
        <div className="flex md-row flex-col items-center" style={{ gap: '60px' }}>
            <div style={{ flex: 1 }}>
                <h2 className="text-red uppercase" style={{ letterSpacing: '2px', fontSize: '1rem', marginBottom: '10px' }}>Unsere DNA</h2>
                <h3 className="uppercase italic font-black text-responsive-large" style={{ marginBottom: '30px', lineHeight: 1, color: 'white' }}>
                    Mehr als nur <br/><span className="text-white">Gewichte heben.</span>
                </h3>
                <p style={{ color: '#d1d5db', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
                    Wir sind Christoph & Mario. Zwei Brüder, ein Ziel: Ehrliches Training ohne Schnickschnack. 
                    Bei uns gibt es keine leeren Versprechungen, sondern fundiertes Wissen aus über 10 Jahren Erfahrung.
                </p>
                <p style={{ color: '#d1d5db', fontSize: '1.1rem', lineHeight: '1.8' }}>
                    Wir glauben an die Kombination aus <strong className="text-white">Kraft</strong>, <strong className="text-white">Ausdauer</strong> und dem richtigen <strong className="text-white">Mindset</strong>. 
                    Egal ob du Anfänger bist oder Profi – wir holen dich dort ab, wo du stehst.
                </p>
            </div>
             <div style={{ flex: 1 }} className="values-grid">
                <div className="value-card">
                    <div className="value-header">
                        <div className="text-red"><Dumbbell size={32} /></div>
                        <h4>Ehrlich</h4>
                    </div>
                    <p>Kein Bullshit. Wir sagen dir, was Sache ist und wie du deine Ziele erreichst.</p>
                </div>
                <div className="value-card">
                    <div className="value-header">
                        <div className="text-red"><Activity size={32} /></div>
                        <h4>Ausgewogen</h4>
                    </div>
                    <p>Kraft ist gut, aber Ausdauer und Gesundheit gehören für uns dazu.</p>
                </div>
                <div className="value-card">
                    <div className="value-header">
                        <div className="text-red"><Zap size={32} /></div>
                        <h4>Leidenschaft</h4>
                    </div>
                    <p>Wir brennen für das, was wir tun. Und das wirst du im Training spüren.</p>
                </div>
                <div className="value-card">
                    <div className="value-header">
                        <div className="text-red"><CheckCircle2 size={32} /></div>
                        <h4>Individuell</h4>
                    </div>
                    <p>Kein Plan von der Stange. Dein Training passt zu deinem Leben.</p>
                </div>
             </div>
        </div>
      </div>
    </section>
  )
}

const BentoGrid = () => {
  return (
    <section id="training" style={{ padding: '100px 0', background: 'black' }}>
      <div className="container">
        <div style={{ marginBottom: '60px' }}>
          <h2 className="text-red uppercase" style={{ letterSpacing: '2px', fontSize: '1rem' }}>Disziplinen</h2>
          <h3 className="uppercase italic font-black" style={{ color: 'white', marginBottom: '10px' }}>Wähle deinen Weg</h3>
          <p style={{ color: '#d1d5db', margin: 0 }}>Kombiniere unsere Angebote für maximale Performance.</p>
        </div>
        
        <div className="grid md-grid-3 bento-grid">
           
          {/* Card 1: Krafttraining */}
          <div className="card md-span-2-col">
            <SmartImage id="kraft" className="card-img" alt="Krafttraining" style={{ objectPosition: '50% 28%' }} />
            <div className="card-overlay">
              <h4 className="card-title">
                <span className="text-red"><Dumbbell size={32} /></span>
                Krafttraining
              </h4>
              <p className="card-description">Individuelle Pläne, Technik-Check und messbare Fortschritte. Wir bauen das Fundament für deinen Körper.</p>
            </div>
          </div>
           
          {/* Card 2: Laufen */}
          <div className="card md-span-2-row">
            <SmartImage id="laufen" className="card-img" alt="Laufen" style={{}} /> 
            <div className="card-overlay">
              <h4 className="card-title">
                <span className="text-red"><Activity size={32} /></span>
                Laufen
              </h4>
              <p className="card-description" style={{marginBottom: '10px'}}>Neben Krafttraining setzen wir bewusst auf regelmäßige Laufeinheiten.</p>
            </div>
          </div>
           
          {/* Card 3: Boxen */}
          <div className="card">
            <SmartImage id="boxen" className="card-img" alt="Boxen" style={{}} /> 
            <div className="card-overlay">
              <h4 className="card-title">
                <span className="text-red"><Zap size={32} /></span>
                Boxen
              </h4>
              <p className="card-description">Klassisches Boxen, kleine Sparrings und Elemente aus dem MMA.</p>
            </div>
          </div>
           
          {/* Card 4: Stats */}
          <div className="bg-red" style={{ borderRadius: '20px', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white', textAlign: 'center', minHeight: '300px' }}>
            <div style={{ fontSize: '4rem', fontWeight: '900', lineHeight: 1 }}>10+</div>
            <div className="uppercase" style={{ letterSpacing: '2px', fontWeight: 'bold', marginBottom: '20px' }}>Jahre Erfahrung</div>
            <div style={{ height: '1px', width: '50%', background: 'white', marginBottom: '20px', opacity: 0.3 }}></div>
            <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>"Harte Workouts,<br/>echte Ergebnisse."</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ title, price, period, features, popular, link }: PricingCardProps) => (
  <div className={`pricing-card ${popular ? 'popular' : ''}`}>
    {popular && <div className="text-red uppercase font-bold" style={{ fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '10px' }}>Empfehlung</div>}
    <h4 className="uppercase italic font-bold" style={{ fontSize: '1.5rem', marginBottom: '10px', color: 'white' }}>{title}</h4>
    <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '20px' }}>
      <span style={{ fontSize: '2.5rem', fontWeight: '900', color: popular ? '#dc2626' : 'white' }}>{price}</span>
      {period && <span style={{ color: '#9ca3af', marginLeft: '10px' }}>{period}</span>}
    </div>
    <div style={{ flexGrow: 1, marginBottom: '30px' }}>
      {features.map((feat: string, i: number) => (
        <div key={i} className="flex" style={{ gap: '10px', marginBottom: '10px', alignItems: 'start' }}>
          <div className="text-red" style={{ marginTop: '2px' }}><CheckCircle2 size={16} /></div>
          <span style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: '1.4' }}>{feat}</span>
        </div>
      ))}
    </div>
    <a href={link} target="_blank" rel="noopener noreferrer" className={popular ? 'btn btn-primary' : 'btn btn-outline'} style={{ width: '100%', justifyContent: 'center' }}>Auswählen</a>
  </div>
);

const Pricing = () => {
  const getWhatsAppLink = (paketName: string) => {
    const text = `Hallo Christoph, ich interessiere mich für das Paket: ${paketName}. Bitte melde dich bei mir.`;
    return `https://api.whatsapp.com/send/?phone=4366488599040&text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="preise" style={{ padding: '100px 0', background: '#050505' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className="uppercase italic font-black" style={{ fontSize: '3rem', margin: 0 }}>Investiere in <span className="text-red">Dich</span></h2>
          <p style={{ color: '#d1d5db' }}>Transparente Preise. Keine versteckten Kosten.</p>
        </div>
        <div className="grid md-grid-3" style={{ gap: '30px', marginBottom: '30px' }}>
          <PricingCard 
            title="Einzeltraining" 
            price="49 €" 
            period="/ Einheit" 
            features={["60-80 Min Krafttraining", "Kostenlose Körperanalyse", "Individueller Fokus", "100% Personal Training"]} 
            link={getWhatsAppLink("Einzeltraining")}
            popular={false} 
          />
          <PricingCard 
            title="10er Block" 
            price="400 €" 
            popular={true} 
            features={["12 Monate gültig", "Flexibel einteilbar", "Volle Flexibilität", "Ideal für Regelmäßigkeit"]} 
            link={getWhatsAppLink("10er Block")}
            period={""} 
          />
          <PricingCard 
            title="Monats-Abo" 
            price="39 €" 
            period="/ Monat" 
            features={["1 Training pro Monat", "WhatsApp Support inkl.", "Mindestlaufzeit 1 Jahr", "Für Dranbleiber"]} 
            link={getWhatsAppLink("Monats-Abo")}
            popular={false} 
          />
        </div>
        <div className="grid md-grid-2" style={{ gap: '30px', maxWidth: '800px', margin: '0 auto' }}>
          <PricingCard 
            title="Boxen / Laufen" 
            price="49 €" 
            period="/ Einheit" 
            features={["60 Min im Freien", "Technik & Ausdauer", "Auch zu zweit möglich (+15€)", "Handschuhe vorhanden"]} 
            link={getWhatsAppLink("Boxen / Laufen")}
            popular={false} 
          />
          <PricingCard 
            title="Ernährung" 
            price="49 €" 
            period="Pauschal" 
            features={["PDF Guide & Tipps", "Support nach Absprache", "Praktische Umsetzung", "Kein Verzicht - Balance"]} 
            link={getWhatsAppLink("Ernährung")}
            popular={false} 
          />
        </div>
      </div>
    </section>
  );
};

const Contact = ({ onOpenLegal }: ContactProps) => {
  return (
    <footer id="kontakt" className="bg-red" style={{ padding: '100px 0', color: 'white', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, rgba(220,38,38,0) 50%)', pointerEvents: 'none' }}></div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="flex md-row flex-col justify-between" style={{ gap: '60px' }}>
          <div style={{ flex: 1, maxWidth: '600px' }}>
            <h2 className="uppercase italic font-black text-responsive-huge" style={{ lineHeight: '0.9', marginBottom: '30px' }}>Lass uns <br/>anfangen.</h2>
            <p style={{ fontSize: '1.2rem', fontWeight: '500', marginBottom: '40px', opacity: 0.9 }}>Schreib uns einfach auf WhatsApp oder per Mail. <br/>Wir melden uns für ein unverbindliches Erstgespräch.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
              <a href="https://api.whatsapp.com/send/?phone=4366488599040&text=Hallo+Christoph%2C+meld+dich+bitte+bei+mir+f%C3%BCr+ein+unverbindliches+Erstgespr%C3%A4ch." className="contact-card" target="_blank" rel="noopener noreferrer">
                <div className="contact-icon" style={{ background: '#25D366' }}><Phone size={24} /></div>
                <div><div style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.9rem' }}>WhatsApp</div><div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Direkt chatten</div></div>
              </a>
              <a 
                href="mailto:ChristophZehentbauer@gmail.com?subject=Anfrage%20f%C3%BCr%20Probetraining&body=Hallo%20Christoph%2C%0A%0Aich%20will%20gern%20bei%20einem%20Probetraining%20mitmachen%20und%20freue%20mich%20auf%20genaue%20Infos." 
                className="contact-card"
              >
                <div className="contact-icon" style={{ background: 'black' }}><Mail size={24} /></div>
                <div><div style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.9rem' }}>Email senden</div><div style={{ fontSize: '0.8rem', opacity: 0.8 }}>ChristophZehentbauer@gmail.com</div></div>
              </a>
              <a href="https://www.instagram.com/gebruderzroutine" className="contact-card" target="_blank" rel="noopener noreferrer">
                <div className="contact-icon" style={{ background: 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)' }}><Instagram size={24} /></div>
                <div><div style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.9rem' }}>Instagram</div><div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Folge uns</div></div>
              </a>
            </div>
          </div>
          <div className="mobile-hide" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-start', paddingTop: '20px' }}>
            <div className="font-black italic" style={{ fontSize: '3rem', color: 'rgba(255,255,255,0.2)', marginBottom: '20px' }}>TEAM ZEHENTBAUER</div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '30px', marginTop: '80px', display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', opacity: 0.8 }}>
          <p>&copy; 2025 Team Zehentbauer</p>
          <div className="flex gap-4">
            <button onClick={() => onOpenLegal('impressum')} style={{ color: 'white', textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>Impressum</button>
            <button onClick={() => onOpenLegal('datenschutz')} style={{ color: 'white', textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>Datenschutz</button>
            <button onClick={() => onOpenLegal('agb')} style={{ color: 'white', textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>AGB</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  const [modalContent, setModalContent] = useState<string | null>(null); 

  const openLegal = (type: keyof typeof LEGAL_TEXTS) => {
    setModalContent(LEGAL_TEXTS[type]);
  };

  return (
    <div>
      <style>{GLOBAL_STYLES}</style>
      <Navbar />
      <Hero />
      <Philosophy />
      <BentoGrid />
      <Pricing />
      <Contact onOpenLegal={openLegal} />
      {modalContent && <Modal content={modalContent} onClose={() => setModalContent(null)} />}
      
      {/* HIER IST DIE ANALYTICS-KOMPONENTE EINGEFÜGT: */}
      <Analytics />
      
    </div>
  );
};

export default App;