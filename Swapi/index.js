const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
const port = 3000;

// Connexion � MongoDB
mongoose.connect('mongodb://localhost:27017/star-wars-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// V�rification de la connexion � MongoDB
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur de connexion � MongoDB'));
db.once('open', () => {
    console.log('Connect� � MongoDB');
});

// Middleware pour parser les requ�tes en JSON
app.use(express.json());
app.use(cors());

// Routes
const peopleRouter = require('./Routes/People');
app.use('/people', peopleRouter);
const filmsRouter = require('./Routes/Films');
app.use('/films', filmsRouter);
const planetsRouter = require('./Routes/Planets');
app.use('/planets', planetsRouter);
const speciesRouter = require('./Routes/Species');
app.use('/species', speciesRouter);
const starshipsRouter = require('./Routes/Starships');
app.use('/starships', starshipsRouter);
const vehiclesRouter = require('./Routes/Vehicles');
app.use('/vehicles', vehiclesRouter);

// Documentation Swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Lancement du serveur
app.listen(port, () => {
    console.log(`Serveur d�marr� sur le port ${port}`);
});
