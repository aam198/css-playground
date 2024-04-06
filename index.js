const express = require('express')
// Initialize express
const app = express()
const path = require('path')

const PORT = process.env.PORT || 3000


// Routes 

app.use('/pages', express.static(path.join(__dirname, 'public')));

// to route to styles dir
app.use(express.static(path.join(__dirname, 'public', 'styles')));

// to route src dir
app.use(express.static(path.join(__dirname, 'public', 'src')));

// Home route
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/pages/index.html'));
});

// Accessibility route
app.get('/acc', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/pages/acc.html'));
});

// SVG route
app.get('/svg', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/pages/svg.html'));
});

// SVG-Map route
app.get('/svgMap', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/pages/svgMap.html'));
});

// SVG-Modal route
app.get('/svgModal', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/pages/svgModal.html'));
});

// CSS Course route
app.get('/course', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/pages/course.html'));
});

// Web Component route
app.get('/wc', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/pages/wc.html'));
});

// 404 route
app.use(function (req, res, next) {
  res.status(404);
  res.sendFile(path.join(__dirname + '/public/pages/missing.html'));
});

app.listen(PORT, () => console.log(`Server running on localhost:${PORT}`))
