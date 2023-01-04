const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();

const PORT = 5500;
const database = require('./config/database');
const coctels = require('./routes/coctel.routes');
const coctelModel = require('./models/coctel.model');
const ingredientModel = require('./models/ingredient.model');

// App
const app = express();

// Models
database.model('Coctel', coctelModel);
database.model('Ingredient', ingredientModel);

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

// Router
app.use('/coctels', coctels);

// Start the app
app.listen(PORT, () => console.log(`Listening on : http://localhost:${PORT}`));
