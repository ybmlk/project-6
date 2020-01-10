const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

// '/projects' will redirect to the first project
router.get('/', (req, res)=> {
    res.redirect('/project/1')
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const currentProject = projects[parseInt(id) - 1]

    const { project_name } = currentProject;
    const { description } = currentProject;
    const { technologies } = currentProject;
    const { live_link } = currentProject;
    const { github_link } = currentProject;
    const { image_urls } = currentProject;

    res.render('project', { project_name, description, technologies, live_link, github_link, image_urls });
});

module.exports = router;