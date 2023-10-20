const router = require('express').Router();
const { Blog, User } = require('../models');

router.get('/', (req, res) => {
    try {
        const blogData = await Blog.findAll({
            include: {
                {
                model: User,
                attributes: ["name"],
            },
            },
});

const blogs = blogData.map((project) => project.get({ plain: true }));

res.render('homepage', { projects, logged_in: req.session.logged_in });
    } catch (error) {
    res.status(500).json(error);
}
});

module.exports = router;