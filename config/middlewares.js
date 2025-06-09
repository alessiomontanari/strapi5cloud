module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'script-src': ["'self'", "'unsafe-inline'", 'https://cdn.ckeditor.com'],
          'img-src': ["'self'", 'data:', 'blob:', 'https://cdn.ckeditor.com', /* altri domini immagine se ne hai */],
          'media-src': ["'self'", 'data:', 'blob:', 'https://cdn.ckeditor.com', /* altri domini media se ne hai */],
          // Aggiungi o modifica altre direttive se necessario
          // Esempio: 'connect-src': ["'self'", 'https:', 'ws:'] // Per connessioni a WebSocket o API esterne
          upgradeInsecureRequests: null, // Mantenere null se non si vuole forzare HTTPS per tutte le richieste
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
