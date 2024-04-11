require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('./config/logger');
const confluenceRoutes = require('./api/routes/confluenceRoutes');
const githubRoutes = require('./api/routes/githubRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    logger.info('Visited the root endpoint');
    res.send('Welcome to the Node.js Confluence & GitHub API Integration Example');
});

app.use('/api', confluenceRoutes);
app.use('/api', githubRoutes);

app.use((err, req, res, next) => {
    logger.error(`${err.status || 500} - ${err.message}`);
    res.status(err.status || 500).send(err.message);
});

app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}.`);
});
