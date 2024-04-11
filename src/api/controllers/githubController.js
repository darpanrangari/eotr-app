// src/controllers/githubController.js

import githubService from '../services/githubService.js';
import logger from '../../config/logger.js';

const githubController = {
    async getUser(req, res) {
        try {
            const userData = await githubService.getUserData(req.params.username);
            res.json(userData);
        } catch (error) {
            logger.error('Failed to fetch user data: %O', error);
            res.status(500).send('Failed to fetch user data');
        }
    },

    async getRepos(req, res) {
        try {
            const repos = await githubService.listRepositories(req.params.username);
            logger.info(`Fetched ${repos.length} repositories`)
            res.json(repos);
        } catch (error) {
            logger.error('Failed to fetch repositories: %O', error);
            res.status(500).send('Failed to fetch repositories');
        }
    },

    async checkAuthenticationStatus(req, res) {
        try {
            const user = await githubService.checkAuthenticationStatus(req.params.username);
            logger.info(`User is : ${user.name}`);
            res.json(user);
        } catch (error) {
            logger.error('User not authenticated', error);
            res.status(500).send('User not authenticated');
        }
    }
};

export default githubController;
