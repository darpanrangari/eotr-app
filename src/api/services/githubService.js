const axios = require('axios');
const logger = require('../../config/logger');

// Function to get repositories for a given user
exports.getRepositories = async (username) => {
  try {
    const response = await axios.get(`${process.env.GITHUB_URL}/users/${username}/repos`, {
      headers: {
        'Accept': 'application/vnd.github+json',
        'Authorization': `token ${process.env.GITHUB_TOKEN}`,
        'X-GitHub-Api-Version':'2022-11-28',
        'User-Agent':'Thunder Client'
      }
    });
    return response.data;
  } catch (error) {
    logger.error('Error fetching GitHub repositories:', error);
    throw error;
  }
};
