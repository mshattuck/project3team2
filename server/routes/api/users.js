const router = require("express").Router();
const usersController = require("../../controllers/users");
const passport = require('../../passport');
const User = require('../../database/models/user')

router.post('/', (req, res) => {
  console.log('user signup');

  const { username, password } = req.body
  // ADD VALIDATION
  User.findOne({ username: username }, (err, user) => {
      if (err) {
          console.log('User.js post error: ', err)
      } else if (user) {
          res.json({
              error: `Sorry, already a user with the username: ${username}`
          })
      }
      else {
          const newUser = new User({
              username: username,
              password: password
          })
          newUser.save((err, savedUser) => {
              if (err) return res.json(err)
              res.json(savedUser)
          })
      }
  })
})

router.post(
  '/login',
  function (req, res, next) {
      console.log('routes/user.js, login, req.body: ');
      console.log(req.body)
      next()
  },
  passport.authenticate('local'),
  (req, res) => {
      console.log('logged in', req.user);
      var userInfo = {
          username: req.user.username
      };
      res.send(userInfo);
  }
)

router.get('/', (req, res, next) => {
  console.log('===== user!!======')
  console.log(req.user)
  if (req.user) {
      res.json({ user: req.user })
  } else {
      res.json({ user: null })
  }
})

router.post('/logout', (req, res) => {
  if (req.user) {
      req.logout()
      res.send({ msg: 'logging out' })
  } else {
      res.send({ msg: 'no user to log out' })
  }
})

//from 2
// Matches with "/api/users"
router.route("/")
.get(usersController.findAll)
.post(usersController.create);

//Matches with "/api/users/:id"
router.route("/:id")
.get(usersController.findById)
// .put(usersController.update)
// .delete(usersController.remove);

module.exports = router;