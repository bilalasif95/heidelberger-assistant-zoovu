require('dotenv').config();
const { URL } = require('url');
const BrowserSync = require("browser-sync").create();

const PORT = process.env.PORT || 3000;

const advisorPreviewUrl = new URL(`http://localhost:${PORT}/preview-dev.html`);

if (process.env.ADVISOR_CODE) advisorPreviewUrl.searchParams.set('advisorCode', process.env.ADVISOR_CODE);
if (process.env.API_CONTEXT_PATH) advisorPreviewUrl.searchParams.set('apiContextPath', process.env.API_CONTEXT_PATH);
if (process.env.SESSION_PERSISTENCE) advisorPreviewUrl.searchParams.set('sessionPersistence', process.env.SESSION_PERSISTENCE);
if (process.env.SESSION_PERSISTENCE_ENDPOINT) advisorPreviewUrl.searchParams.set('sessionPersistenceEndpoint', process.env.SESSION_PERSISTENCE_ENDPOINT);

BrowserSync.init({
  port: PORT,
  server: {
    baseDir: './build',
    // index: 'preview-dev.html' + advisorPreviewUrl.search,
    middleware: [{
      route: '/',
      handle: function(request, response, nextMiddleware) {
        response.writeHead(302,  { 'Location': '/preview-dev.html' + advisorPreviewUrl.search })   ;                                                                                                                                                             
        response.end();
        nextMiddleware();
      }
    }],
  },
  watch: true,
  ignore: [
    './.idea/**/*',
    './.vscode/**/*',
    './node_modules/**/*',
  ],
});
