/** Plain JS mirror for next.config.js (CommonJS). Keep in sync with lib/routes.ts urlMigrations. */
module.exports = {
  urlMigrations: [
    { from: '/kamerarendszer-telepites-szekesfehervar', to: '/kamerarendszer-telepites', permanent: true },
    { from: '/kamerarendszer-javitas-szekesfehervar', to: '/kamerarendszer-javitas', permanent: true },
    { from: '/kamerarendszer-bovites', to: '/kamerarendszer-javitas', permanent: true },
    { from: '/ip-kamerarendszer', to: '/', permanent: true },
    { from: '/uzleti-kamerarendszer', to: '/uzlet-telephely', permanent: true },
    { from: '/otthoni-kamerarendszer', to: '/csaladi-haz-nyaralo', permanent: true },
    { from: '/riaszto-es-beleptetes', to: '/', permanent: true },
    { from: '/adatkezeles', to: '/adatvedelem', permanent: true },
  ],
};
