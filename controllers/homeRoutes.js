const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth')

router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    res.render('homepage', { blogs, logged_in: req.session.logged_in });
    } catch (error) {
    res.status(500).json(error);
}
});

router.get('/blog/:id', async (req, res) => {
    try {
      const blogData = await Blog.findByPk(req.params.id, {
        include: [
            {
                model: User, 
            },
            {
                model: Comment, 
            },
        ],
      });
    
      const blog = blogData.get({ plain: true });

      res.render('blog', {
        ...blog,
        logged_in: req.session.logged_in,
      });
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/dashboard', withAuth, async (req, res) => {
    const userData = await User.findByPk(req.session.user_id, {
        attributes: {exclude: ['password'] },
        include: [{ model: Blog }],
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
        ...user,
        logged_in: true,
    });
});

router.get('/login', (req, res) => {
    if(req.session.logged_in){
        res.redirect('/dashboard');
        return;
    }

    res.render('login')
});

router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
  });

module.exports = router;