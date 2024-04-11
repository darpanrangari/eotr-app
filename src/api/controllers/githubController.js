const { getRepositories } = require('../services/githubService');

exports.getRepos = async (req, res) => {
  try {
    const username = req.params.username;
    const repos = await getRepositories(username);
    res.json(repos);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
