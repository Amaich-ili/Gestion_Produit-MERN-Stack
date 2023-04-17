const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const products = require('./routes/api/products');

const swaggerUi = require('swagger-ui-express'),
swaggerJSDoc = require('swagger-jsdoc');

const app = express();

// Swagger configurations
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        version: "1.0.0",
        title: "Final Project MongoDB Express React Nodejs",
        description: "MERN stack documented with Swagger",
        contact: {
            name: ": Goupe Classe",
            email: "iliamaich@gmail.com",
        },
        license: {
            name: "MIT (The MIT License)",
            url: "https://opensource.org/licenses/MIT"
        },
    },
}

const options = {
    swaggerDefinition,
    apis: ['./routes/api/products.js']
};

const swaggerSpec = swaggerJSDoc(options)
app.use('/docs', swaggerUi.serve,  swaggerUi.setup(swaggerSpec));


// Connect Database
connectDB();
app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));
app.use('/api/products', products);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on port ${port}`));

