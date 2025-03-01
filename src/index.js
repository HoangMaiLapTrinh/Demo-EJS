const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;
const mongoose = require('mongoose');


app.use(express.static(path.join(__dirname, "public")));

// MongoDB Connection
mongoose.connect('mongodb+srv://hoangmai020603:mldQUI1udP6GuV7D@hoangmai.al06t.mongodb.net/DATABASE?retryWrites=true&w=majority')
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch(error => console.error('❌ Could not connect to MongoDB Atlas:', error));

// HTTP Logger
app.use(morgan('combined'));

// Template Engine
app.engine('hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Define a route
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

// Start the server
app.listen(port, () => console.log(`Server is running on port ${port}`));
