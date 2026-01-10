import { ImageData, LegalDocType } from './types';

// --- IMAGES ---
export const IMAGES: Record<string, ImageData> = {
  logo: {
    src: "/logo.jpg",
    fallback: "https://via.placeholder.com/150x150/000000/ffffff?text=Z",
    alt: "Team Zehentbauer Logo"
  },
  hero: {
    src: "/hero.jpg",
    fallback: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    alt: "Gym Hero Background"
  },
  kraft: {
    src: "/kraft.jpg",
    fallback: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Krafttraining"
  },
  laufen: {
    src: "/laufen.jpg",
    fallback: "https://images.unsplash.com/photo-1552674605-46d526748b97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Lauftraining"
  },
  boxen: {
    src: "/boxen.jpg",
    fallback: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Boxtraining"
  }
};

// --- LEGAL TEXTS ---
export const LEGAL_TEXTS: Record<LegalDocType, string> = {
  agb: `
    <h3 class="text-3xl font-black italic uppercase text-brand-red mb-8">Allgemeine Geschäftsbedingungen (AGB)</h3>
    <p class="text-gray-300 leading-relaxed mb-4"><strong class="text-white">Einzelunternehmen:</strong> Christoph Zehentbauer eU<br/>
    <strong class="text-white">Inhaber:</strong> Christoph Zehentbauer</p>

    <h4 class="text-xl font-bold text-white mt-8 mb-3">1. Geltungsbereich</h4>
    <p class="text-gray-300 leading-relaxed mb-4">Diese AGB gelten für sämtliche Dienstleistungen von Christoph Zehentbauer eU, einschließlich Krafttraining, Boxtraining, Lauftraining sowie aller Einzelcoachings, Gruppentrainings, 10er-Blöcke und Monatsabonnements.</p>

    <h4 class="text-xl font-bold text-white mt-8 mb-3">2. Vertragsabschluss</h4>
    <p class="text-gray-300 leading-relaxed mb-4">Ein Vertrag kommt durch Buchung und Bestätigung zustande. Mit der Anmeldung erkennt der Kunde diese AGB verbindlich an. Die Teilnahme setzt volle Geschäftsfähigkeit bzw. bei Minderjährigen die schriftliche Zustimmung der Erziehungsberechtigten voraus.</p>

    <h4 class="text-xl font-bold text-white mt-8 mb-3">3. Leistungsumfang</h4>
    <p class="text-gray-300 leading-relaxed mb-4">Der Leistungsumfang ergibt sich aus der jeweiligen Buchung. Änderungen von Ort, Inhalt, Dauer oder Zeit können aus organisatorischen Gründen erfolgen, ohne dass daraus Ansprüche abgeleitet werden können.</p>

    <h4 class="text-xl font-bold text-white mt-8 mb-3">4. Zahlungsbedingungen</h4>
    <p class="text-gray-300 leading-relaxed mb-4">Die Preise werden vor Vertragsabschluss bekanntgegeben. Zahlungen sind vor Trainingsbeginn oder gemäß Zahlungsvereinbarung fällig. Bei Abonnements erfolgt die Zahlung im Voraus.</p>

    <h4 class="text-xl font-bold text-white mt-8 mb-3">5. Absage, Stornierung, Nichterscheinen</h4>
    <p class="text-gray-300 leading-relaxed mb-4">Einzeltermine können bis 24 Stunden vorher abgesagt werden. Bei späterer Absage oder Nichterscheinen kann die volle Gebühr verrechnet werden. Nicht konsumierte Trainingseinheiten verfallen — eine Rückerstattung erfolgt nicht.</p>

    <h4 class="text-xl font-bold text-white mt-8 mb-3">6. Gesundheit, Risiko und Eigenverantwortung</h4>
    <p class="text-gray-300 leading-relaxed mb-4">(1) Die Teilnahme am Training erfolgt ausschließlich auf eigenes Risiko und in eigener Verantwortung des Kunden.<br/>
    (2) Der Kunde bestätigt, körperlich und gesundheitlich in der Lage zu sein, am Training teilzunehmen.<br/>
    (3) Der Kunde verpflichtet sich, den Trainer vor Beginn über gesundheitliche Einschränkungen, Vorerkrankungen oder Verletzungen zu informieren.<br/>
    (4) Der Kunde trägt selbst die Verantwortung für seine Leistungsgrenzen, körperliche Belastbarkeit und Einschätzung von Risiken.<br/>
    (5) Bei Boxtraining, Sparring, Schlagübungen und Partnerkontakt besteht grundsätzlich ein erhöhtes Verletzungsrisiko, das auch durch korrekte Anleitung nicht ausgeschlossen werden kann.<br/>
    (6) Der Kunde nimmt ausdrücklich zur Kenntnis, dass es zu Muskelkater, Zerrungen, Prellungen, Verstauchungen, Stürzen, Schlägen, Kollisionen oder sonstigen trainingsbedingten körperlichen Auswirkungen kommen kann — ohne dass daraus Haftungsansprüche entstehen.</p>

    <h4 class="text-xl font-bold text-white mt-8 mb-3">7. Haftung</h4>
    <p class="text-gray-300 leading-relaxed mb-4">(1) Christoph Zehentbauer eU haftet ausschließlich bei Vorsatz.<br/>
    (2) Eine Haftung für grobe oder leichte Fahrlässigkeit ist — soweit gesetzlich zulässig — ausgeschlossen.<br/>
    (3) Eine Haftung für Verletzungen oder gesundheitliche Schäden während oder im Zusammenhang mit dem Training ist ausgeschlossen.<br/>
    (4) Eine Haftung für Schäden, die durch Selbstüberschätzung, Missachtung von Anweisungen, bewusste Grenzüberschreitung, falsche Technik, zu hohe Gewichtsbelastung oder sonstiges risikobehaftetes Verhalten entstehen, ist ausgeschlossen.<br/>
    (5) Für Diebstahl, Verlust oder Beschädigung von mitgebrachter Kleidung, Geräten, Wertgegenständen oder persönlichen Gegenständen wird keine Haftung übernommen.<br/>
    (6) Der Kunde verzichtet ausdrücklich auf jegliche Schadenersatzansprüche gegenüber Christoph Zehentbauer eU, ausgenommen solche, die aus nachweislichem Vorsatz entstehen.</p>

    <h4 class="text-xl font-bold text-white mt-8 mb-3">8. Minderjährige</h4>
    <p class="text-gray-300 leading-relaxed mb-4">Die Teilnahme Minderjähriger erfolgt nur mit schriftlicher Einwilligung der Erziehungsberechtigten. Eine Beaufsichtigung durch den Trainer findet nicht statt.</p>

    <h4 class="text-xl font-bold text-white mt-8 mb-3">9. Datenschutz</h4>
    <p class="text-gray-300 leading-relaxed mb-4">Personenbezogene Daten werden ausschließlich zum Zweck der Durchführung der Trainingsdienstleistung verarbeitet und nicht an Dritte weitergegeben, sofern keine gesetzliche Verpflichtung besteht.</p>

    <h4 class="text-xl font-bold text-white mt-8 mb-3">10. Foto- und Videoaufnahmen</h4>
    <p class="text-gray-300 leading-relaxed mb-4">Aufnahmen von Kunden dürfen nur mit deren ausdrücklicher Zustimmung verwendet oder veröffentlicht werden.</p>

    <h4 class="text-xl font-bold text-white mt-8 mb-3">11. Vertragslaufzeit bei Abonnements</h4>
    <p class="text-gray-300 leading-relaxed mb-4">Abos laufen jeweils einen Monat und verlängern sich automatisch, wenn nicht bis spätestens 7 Tage vor Ablauf schriftlich gekündigt wird.</p>

    <h4 class="text-xl font-bold text-white mt-8 mb-3">12. Trainingsdurchführung und Änderungen</h4>
    <p class="text-gray-300 leading-relaxed mb-4">Trainingsinhalte, -zeiten und -orte können aus organisatorischen Gründen geändert werden. Ein Anspruch auf Durchführung einer Einheit mit einem bestimmten Trainer besteht nicht.</p>

    <h4 class="text-xl font-bold text-white mt-8 mb-3">13. Höhere Gewalt und Ausfälle</h4>
    <p class="text-gray-300 leading-relaxed mb-4">Bei Ausfällen durch Krankheit, behördliche Anordnung, Wetterbedingungen oder andere nicht beeinflussbare Ereignisse besteht kein Anspruch auf Rückerstattung. Es kann nach Möglichkeit ein Ersatztermin angeboten werden — ein Anspruch darauf besteht nicht.</p>

    <h4 class="text-xl font-bold text-white mt-8 mb-3">14. Schlussbestimmungen</h4>
    <p class="text-gray-300 leading-relaxed mb-4">Es gilt ausschließlich österreichisches Recht.<br/>
    (1) Gerichtsstand ist, soweit zulässig, der Geschäftssitz von Christoph Zehentbauer eU.<br/>
    (2) Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.<br/>
    (3) Mündliche Nebenabreden bestehen nicht. Änderungen dieser AGB müssen schriftlich erfolgen.</p>
  `,
  impressum: `
    <h3 class="text-3xl font-black italic uppercase text-brand-red mb-8">Impressum</h3>
    <p class="text-gray-300 leading-relaxed mb-4"><strong class="text-white">Christoph Zehentbauer e.U.</strong></p>
    <p class="text-gray-300 leading-relaxed mb-4">Erstellung von Trainingskonzepten für gesundheitsbewusste Personen (freies Gewerbe)<br/>
    Reglementierte Tätigkeit gemäß Gewerbeordnung: Fitnesstrainer</p>
    <p class="text-gray-300 leading-relaxed mb-4">Mitglied der Wirtschaftskammer Österreich – Fachgruppe Freizeit- und Sportbetriebe</p>
    <p class="text-gray-300 leading-relaxed mb-4"><strong class="text-white">Inhaber:</strong> Christoph Zehentbauer<br/>
    <strong class="text-white">Anschrift:</strong> Schießstätte 14, 3580 Horn, Österreich<br/>
    <strong class="text-white">Telefon:</strong> +43 664 885 99 040<br/>
    <strong class="text-white">E-Mail:</strong> ChristophZehentbauer@gmail.com<br/>
    <strong class="text-white">Steuernummer:</strong> 23201/9901<br/>
    <strong class="text-white">Unternehmensform:</strong> Eingetragenes Einzelunternehmen (e.U.)<br/>
    <strong class="text-white">Behörde gemäß ECG:</strong> Bezirkshauptmannschaft Horn</p>
    <h4 class="text-xl font-bold text-white mt-8 mb-3">Haftungsausschluss</h4>
    <p class="text-gray-300 leading-relaxed mb-4">Alle Inhalte dienen ausschließlich Informationszwecken. Die Nutzung der bereitgestellten Inhalte erfolgt auf eigene Verantwortung. Trotz sorgfältiger inhaltlicher Kontrolle wird keine Haftung für Aktualität, Richtigkeit oder Vollständigkeit übernommen.</p>
    <h4 class="text-xl font-bold text-white mt-8 mb-3">Urheberrecht</h4>
    <p class="text-gray-300 leading-relaxed mb-4">Alle Inhalte, Texte, Fotos und Grafiken dieser Webseite unterliegen dem Urheberrecht und dürfen ohne ausdrückliche Zustimmung nicht verwendet werden.</p>
  `,
  datenschutz: `
    <h4 class="text-xl font-bold text-white mt-8 mb-3">Datenschutzerklärung</h4>
    <p class="text-gray-300 leading-relaxed mb-4">Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten personenbezogene Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).</p>
    <h4 class="text-xl font-bold text-white mt-8 mb-3">1. Verantwortlicher</h4>
    <p class="text-gray-300 leading-relaxed mb-4"><strong class="text-white">Christoph Zehentbauer e.U.</strong><br/>
    Schießstätte 14, 3580 Horn, Österreich<br/>
    Telefon: +43 664 885 99 040<br/>
    E-Mail: christophzehentbauer@gmail.com</p>
    <p class="text-gray-300 leading-relaxed mb-4">Vollständige Informationen zum Datenschutz sind in der Kanzlei hinterlegt und können jederzeit angefordert werden.</p>
  `
};

export const SOCIAL_LINKS = {
  whatsapp: "https://api.whatsapp.com/send/?phone=4366488599040",
  email: "mailto:ChristophZehentbauer@gmail.com",
  instagram: "https://www.instagram.com/gebruderzroutine"
};