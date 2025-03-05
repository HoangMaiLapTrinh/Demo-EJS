const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, "public")));

// MongoDB Connection
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://hoangmai020603:0971172603@hoangmai.al06t.mongodb.net/?retryWrites=true&w=majority&appName=HoangMai";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

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
