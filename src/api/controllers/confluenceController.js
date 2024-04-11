const { getConfluencePage } = require('../services/confluenceService');

exports.getPage = async (req, res) => {
  try {
    const pageId = req.params.pageId;
    const pageData = await getConfluencePage(pageId);
    res.json(pageData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
