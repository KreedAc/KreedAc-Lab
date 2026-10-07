/* =========================================================================
   KreedAc Lab — interactions + bilingual content
   ========================================================================= */

/* ---- Dictionary ------------------------------------------------------ */
const I18N = {
  it: {
    "nav.work": "Lavori",
    "nav.services": "Servizi",
    "nav.contact": "Contatti",
    "nav.cta": "Lavoriamo insieme",
    "nav.wa": "WhatsApp",

    "hero.eyebrow": "Giovanni Avignone — sviluppatore web e app",
    "hero.t1": "Io ci",
    "hero.t2": "credo.",
    "hero.t3": "Cridacci",
    "hero.t4": "pure tu.",
    "hero.lead": "Siti vetrina e web app su misura per piccole attività e professionisti. Dal primo schizzo al pulsante che converte.",
    "hero.cta1": "Scrivimi su WhatsApp",
    "hero.cta2": "Vedi i lavori",
    "hero.m1k": "Sede",
    "hero.m1v": "Calabria, IT — da remoto",
    "hero.m2k": "Cosa faccio",
    "hero.m2v": "Siti vetrina · Web app · App mobile",
    "hero.m3k": "Per chi",
    "hero.m3v": "Attività locali · Freelance",
    "hero.m4k": "Disponibilità",
    "hero.m4v": "Disponibile per nuovi progetti",


    "srv.num": "02 — Servizi",
    "srv.title": "Cosa costruisco",
    "srv.aside": "Tre servizi, un solo standard: pensati per farti fare bella figura e farti risparmiare tempo.",
    "srv.1name1": "Siti", "srv.1name2": "vetrina",
    "srv.1desc": "La tua attività online, con stile. Pagine veloci, mobile-first, ottimizzate per farti trovare e contattare.",
    "srv.1price": "da progetto",
    "srv.2name1": "Web", "srv.2name2": "app",
    "srv.2desc": "Strumenti che lavorano per te: prenotazioni, menù digitali, gestionali. Lato cliente e lato admin, su misura.",
    "srv.2price": "su preventivo",
    "srv.3name1": "App", "srv.3name2": "mobile",
    "srv.3desc": "La tua attività nella tasca dei clienti: app pubblicate su App Store e Play Store, con notifiche push per conferme e promemoria.",
    "srv.3price": "su preventivo",


    "wrk.num": "01 — Lavori selezionati",
    "wrk.title": "Progetti in cui ho creduto",
    "wrk.aside": "Una selezione di prodotti reali, dal concept al rilascio.",

    "p1.index": "Progetto 01",
    "p1.kicker": "Hair studio · Barber shop",
    "p1.name1": "Prenotazioni", "p1.name2": "senza attriti",
    "p1.desc": "App di prenotazione per barber shop, pubblicata su App Store e Play Store: servizi, barbiere e orario in tre passaggi, con conferme e promemoria via notifica push. L'admin gestisce agenda e disponibilità in tempo reale.",
    "p1.r1k": "Ruolo", "p1.r1v": "Design + Sviluppo",
    "p1.r2k": "Piattaforme", "p1.r2v": "iOS · Android · Web",
    "p1.r3k": "Tipo", "p1.r3v": "App prenotazioni",
    "p1.visit": "Visita il sito",

    "p2.index": "Progetto 02",
    "p2.kicker": "Mayo · Smash burger",
    "p2.name1": "Dal menù al", "p2.name2": "WhatsApp",
    "p2.desc": "Al posto di un menù digitale in abbonamento, una piattaforma di proprietà con l'identità del locale: il cliente sceglie varianti e orario di ritiro e manda l'ordine su WhatsApp. Prodotti, prezzi e orari si aggiornano dal pannello admin, senza sviluppatore.",
    "p2.r1k": "Ruolo", "p2.r1v": "Design + Sviluppo",
    "p2.r2k": "Feature", "p2.r2v": "Carrello → WhatsApp",
    "p2.r3k": "Tipo", "p2.r3v": "Ordini + gestionale",
    "p2.visit": "Visita il sito",

    "p3.index": "Progetto 03",
    "p3.kicker": "Il Punto Antenna · Lamezia Terme",
    "p3.name1": "Trovati", "p3.name2": "su Google",
    "p3.desc": "Sito vetrina di sette pagine per un'attività storica di elettronica: una landing per ogni servizio, costruita attorno alla ricerca locale. HTML e CSS puri, zero JavaScript, dati strutturati e scheda Google collegata.",
    "p3.r1k": "Ruolo", "p3.r1v": "Design + Sviluppo",
    "p3.r2k": "Focus", "p3.r2v": "SEO locale",
    "p3.r3k": "Tipo", "p3.r3v": "Vetrina 7 pagine",
    "p3.r4k": "Scheda Google", "p3.r4v": "4,9 ★ · 105 recensioni",
    "p3.visit": "Visita il sito",

    "p4.index": "Progetto 04",
    "p4.kicker": "Le CandLex · Candele e arredo",
    "p4.name1": "Il catalogo", "p4.name2": "in mano sua",
    "p4.desc": "Catalogo online per un laboratorio di candele scultura, arredo in ceramica e bomboniere: oltre 200 pezzi divisi per collezioni, ordini su WhatsApp e un pannello da cui la titolare aggiorna foto, prezzi e prodotti da sola. Lo seguo anche dopo la messa online.",
    "p4.r1k": "Ruolo", "p4.r1v": "Design + Sviluppo + Gestione",
    "p4.r2k": "Ordini", "p4.r2v": "Su WhatsApp",
    "p4.r3k": "Tipo", "p4.r3v": "Catalogo + pannello",
    "p4.visit": "Visita il sito",

    "p5.index": "Progetto 05",
    "p5.kicker": "Quadra · App Android",
    "p5.name1": "Far quadrare", "p5.name2": "i conti",
    "p5.desc": "App per le spese personali con una regola sola: i dati non escono dal telefono. Nessun account, nessun server, nemmeno un permesso Android. Un conto per ogni carta, spese ricorrenti che avvisano invece di pagare da sole, e un tastierino che fa le somme al posto tuo.",
    "p5.r1k": "Ruolo", "p5.r1v": "Design + Sviluppo",
    "p5.r2k": "Piattaforma", "p5.r2v": "Android",
    "p5.r3k": "Privacy", "p5.r3v": "Zero permessi, zero server",
    "p5.visit": "Scaricala su Google Play",

    "cta.num": "03 — Parliamone",
    "cta.eyebrow": "Pronto a partire?",
    "cta.b1": "Io ci credo.",
    "cta.b2": "Ora tocca a te.",
    "cta.mail": "giovanni.avignone@gmail.com",
    "cta.callk": "Oppure chiamami",
    "cta.s1": "Scrivimi su WhatsApp",
    "cta.s2": "LinkedIn",

    "foot.rights": "© 2026 Giovanni Avignone — KreedAc Lab",
    "foot.made": "Fatto con cura, in Calabria",
  },
  en: {
    "nav.work": "Work",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "nav.cta": "Let's work together",
    "nav.wa": "WhatsApp",

    "hero.eyebrow": "Giovanni Avignone — web and app developer",
    "hero.t1": "I",
    "hero.t2": "believe.",
    "hero.t3": "So will",
    "hero.t4": "you.",
    "hero.lead": "Bespoke sites and web apps for small businesses and professionals. From first sketch to the button that converts.",
    "hero.cta1": "Message me on WhatsApp",
    "hero.cta2": "See the work",
    "hero.m1k": "Based",
    "hero.m1v": "Calabria, IT — remote",
    "hero.m2k": "What I do",
    "hero.m2v": "Showcase sites · Web apps · Mobile apps",
    "hero.m3k": "For",
    "hero.m3v": "Local businesses · Freelancers",
    "hero.m4k": "Availability",
    "hero.m4v": "Available for new projects",


    "srv.num": "02 — Services",
    "srv.title": "What I build",
    "srv.aside": "Three services, one standard: built to make you look good and save you time.",
    "srv.1name1": "Showcase", "srv.1name2": "sites",
    "srv.1desc": "Your business online, with style. Fast, mobile-first pages, optimized to be found and contacted.",
    "srv.1price": "project-based",
    "srv.2name1": "Web", "srv.2name2": "apps",
    "srv.2desc": "Tools that work for you: bookings, digital menus, dashboards. Client-side and admin-side, made to measure.",
    "srv.2price": "on quote",
    "srv.3name1": "Mobile", "srv.3name2": "apps",
    "srv.3desc": "Your business in your customers' pocket: apps published on the App Store and Play Store, with push notifications for confirmations and reminders.",
    "srv.3price": "on quote",


    "wrk.num": "01 — Selected work",
    "wrk.title": "Projects I believed in",
    "wrk.aside": "A selection of real products, from concept to release.",

    "p1.index": "Project 01",
    "p1.kicker": "Hair studio · Barber shop",
    "p1.name1": "Frictionless", "p1.name2": "bookings",
    "p1.desc": "A booking app for barber shops, published on the App Store and Play Store: services, barber and time in three steps, with confirmations and reminders by push notification. Admin manages calendar and availability in real time.",
    "p1.r1k": "Role", "p1.r1v": "Design + Development",
    "p1.r2k": "Platforms", "p1.r2v": "iOS · Android · Web",
    "p1.r3k": "Type", "p1.r3v": "Booking app",
    "p1.visit": "Visit the site",

    "p2.index": "Project 02",
    "p2.kicker": "Mayo · Smash burger",
    "p2.name1": "From menu to", "p2.name2": "WhatsApp",
    "p2.desc": "Replacing a subscription menu service with a platform the venue owns, carrying its own identity: customers pick variants and a pickup slot, then send the order to WhatsApp. Products, prices and hours update from the admin panel, no developer needed.",
    "p2.r1k": "Role", "p2.r1v": "Design + Development",
    "p2.r2k": "Feature", "p2.r2v": "Cart → WhatsApp",
    "p2.r3k": "Type", "p2.r3v": "Orders + dashboard",
    "p2.visit": "Visit the site",

    "p3.index": "Project 03",
    "p3.kicker": "Il Punto Antenna · Lamezia Terme",
    "p3.name1": "Found on", "p3.name2": "Google",
    "p3.desc": "A seven-page showcase site for a long-standing electronics shop: one landing per service, built around local search. Pure HTML and CSS, zero JavaScript, structured data and a linked Google Business profile.",
    "p3.r1k": "Role", "p3.r1v": "Design + Development",
    "p3.r2k": "Focus", "p3.r2v": "Local SEO",
    "p3.r3k": "Type", "p3.r3v": "7-page showcase",
    "p3.r4k": "Google profile", "p3.r4v": "4.9 ★ · 105 reviews",
    "p3.visit": "Visit the site",

    "p4.index": "Project 04",
    "p4.kicker": "Le CandLex · Candles and decor",
    "p4.name1": "A catalogue", "p4.name2": "she runs herself",
    "p4.desc": "An online catalogue for a studio making sculptural candles, ceramic decor and wedding favours: over 200 pieces grouped into collections, orders over WhatsApp, and a panel where the owner updates photos, prices and products on her own. I keep looking after it after launch.",
    "p4.r1k": "Role", "p4.r1v": "Design + Development + Care",
    "p4.r2k": "Orders", "p4.r2v": "Via WhatsApp",
    "p4.r3k": "Type", "p4.r3v": "Catalogue + admin panel",
    "p4.visit": "Visit the site",

    "p5.index": "Project 05",
    "p5.kicker": "Quadra · Android app",
    "p5.name1": "Making ends", "p5.name2": "meet",
    "p5.desc": "A personal expenses app with a single rule: your data never leaves the phone. No account, no server, not a single Android permission. One account per card, recurring bills that remind you instead of paying themselves, and a keypad that does the sums for you.",
    "p5.r1k": "Role", "p5.r1v": "Design + Development",
    "p5.r2k": "Platform", "p5.r2v": "Android",
    "p5.r3k": "Privacy", "p5.r3v": "No permissions, no server",
    "p5.visit": "Get it on Google Play",

    "cta.num": "03 — Let's talk",
    "cta.eyebrow": "Ready to start?",
    "cta.b1": "I believe.",
    "cta.b2": "Now it's your turn.",
    "cta.mail": "giovanni.avignone@gmail.com",
    "cta.callk": "Or call me",
    "cta.s1": "Message me on WhatsApp",
    "cta.s2": "LinkedIn",

    "foot.rights": "© 2026 Giovanni Avignone — KreedAc Lab",
    "foot.made": "Made with care, in Calabria",
  }
};

/* ---- Language -------------------------------------------------------- */
function applyLang(lang) {
  const dict = I18N[lang] || I18N.it;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.getAttribute("data-i18n-ph");
    if (dict[key] != null) el.setAttribute("placeholder", dict[key]);
  });
  document.querySelectorAll(".lang button").forEach((b) => {
    const on = b.dataset.lang === lang;
    b.classList.toggle("is-active", on);
    b.setAttribute("aria-pressed", on ? "true" : "false");
  });
  try { localStorage.setItem("kreedac_lang", lang); } catch (e) {}
}

function initLang() {
  let saved = "it";
  try { saved = localStorage.getItem("kreedac_lang") || "it"; } catch (e) {}
  applyLang(saved);
  document.querySelectorAll(".lang button").forEach((b) =>
    b.addEventListener("click", () => applyLang(b.dataset.lang))
  );
}

/* ---- Scroll reveal --------------------------------------------------- */
function initReveal() {
  const items = Array.from(document.querySelectorAll(".reveal"));
  const check = () => {
    const vh = window.innerHeight || document.documentElement.clientHeight;
    for (const el of items) {
      if (el.classList.contains("in")) continue;
      const top = el.getBoundingClientRect().top;
      if (top < vh * 0.92) el.classList.add("in");
    }
  };
  check();
  window.addEventListener("scroll", check, { passive: true });
  window.addEventListener("resize", check);
  // failsafe: never leave content hidden
  setTimeout(() => items.forEach((el) => el.classList.add("in")), 2200);
}

/* ---- Nav ------------------------------------------------------------- */
function initNav() {
  const nav = document.querySelector(".nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const btn = document.querySelector(".nav__menu-btn");
  const links = document.querySelector(".nav__links");
  if (btn) {
    const setOpen = (open) => {
      links.classList.toggle("open", open);
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    };
    btn.addEventListener("click", () => setOpen(!links.classList.contains("open")));
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => setOpen(false))
    );
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && links.classList.contains("open")) {
        setOpen(false);
        btn.focus();
      }
    });
    document.addEventListener("click", (e) => {
      if (links.classList.contains("open") && !links.contains(e.target) && !btn.contains(e.target)) setOpen(false);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initLang();
  initReveal();
  initNav();
});
