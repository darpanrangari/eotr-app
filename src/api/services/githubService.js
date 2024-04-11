// src/services/githubService.js

import logger from '../../config/logger.js';
import { Octokit } from "@octokit/core";
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

const githubService = {
    async getUserData(username) {
        try {
            const response = await octokit.request('GET /users/{username}', {
                username
            });
            return response.data;
        } catch (error) {
            logger.error('Error fetching user data: %O', error);
            throw error;
        }
    },

    async listRepositories(username) {
        try {
            const response = await octokit.request('GET /users/{username}/repos', {
                username,
                per_page: 100
            });
            return response.data;
        } catch (error) {
            logger.error('Error listing repositories: %O', error);
            throw error;
        }
    },

    async checkAuthenticationStatus(username) {
        try {
            const response = await octokit.request('GET /user');
            return response.data;
        } catch (error) {
            logger.error('Failed to authenticare user via github', error);
            throw error;
        }
    }
};

export default githubService;
