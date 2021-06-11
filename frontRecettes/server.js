function requireHTTPS(req, res, next) {
   // The 'x-forwarded-proto' check is for Heroku
   if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
       return res.redirect('https://' + req.get('host') + req.url);
   }
   next();
}
const express = require('express');
const app = express();
// le nom doit correspondre au nom de votre projet. cf nom de dossier dans dist
app.use(express.static('./dist/frontRecettes/'));

app.use(requireHTTPS);

// délivre le fichier index.html (peut etre aurte chose, ici SPA)
app.get('/*', function(req, res) {
   res.sendFile('index.html', {root: 'dist/frontRecettes'}
   );
});

// cette lignr lance le serveur web à lécoute du port 8080
app.listen(process.env.PORT || 8080);