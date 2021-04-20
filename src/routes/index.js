const { Router } = require('express');
const router = Router();

router.get('/login', (req, res) => {
    const user =  "";
    res.render('login', {
        user
    });
});



router.post('/login', (req, res) => {

    let user = "";
    if(!req.session.user_data) { 
        user = req.session.user_data=req.body;
        res.render('login', {user})       
    } else {
        req.session.destroy();
        res.render('login', {user})
    }
});

router.post('/logout',(req, res) => {
    
    const user = req.session.user_data
    res.render('logout', {user});
    req.session.destroy(err => {
        if(!err) console.log('Logout ok!');
        else console.log('Logout error');
    });
});

module.exports = router;