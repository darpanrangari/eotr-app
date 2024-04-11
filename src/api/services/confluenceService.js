const axios = require('axios');
const logger = require('../../config/logger');

exports.getConfluencePage = async (pageId) => {
  try {
    const response = await axios.get(`${process.env.CONFLUENCE_URL}/content/${pageId}`, {
      auth: {
        username: process.env.CONFLUENCE_USER,
        password: process.env.CONFLUENCE_PASS
      },
      headers: {
        'Accept': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    logger.error('Failed to fetch Confluence page: ' + error.message + process.env.CONFLUENCE_URL);
    throw error;
  }
};
