const router = require('express').Router();

router.get('', async (req, res, next) => {
    return res.render("homepage.pug", {});
});

module.exports = router;