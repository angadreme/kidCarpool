import * as express from 'express';
import User from '../Models/usermodel';

let router = express.Router();

router.post('/login', (req, res) => {
  User.findOne({userName: req.body.username, password: req.body.password})
    .then((foundUser) => res.json(foundUser))
    .catch((err) => res.json(err));
});

router.get('/:id', (req, res) => {
  User.findOne({_id: req.params.id})
    .then((foundUser) => res.json(foundUser));
});

//need some guidance--- trying to pull all users with the same organizationID.
router.get('/organizations/:id/users', (req, res) => {
  User.find({organizationID: req.params.id})
  .then((matches) => res.json(matches));
});

router.get('/', (req, res) => {
  User.find().then((users) => res.json(users));
});

router.delete('/:id', (req, res) => {
  User.remove({_id: req.params.id})
    .then((deletedUser) => res.json(deletedUser))
    .catch((err) => res.json(err));
});

router.post('/', (req, res) => {
  let newUser = new User();
  newUser.userName = req.body.userName;
  newUser.firstName = req.body.firstName;
  newUser.lastName = req.body.lastName;
  newUser.password = req.body.password;
  newUser.email = req.body.email;
  newUser.address = req.body.address;
  newUser.address2 = req.body.address2;
  newUser.city = req.body.city;
  newUser.state = req.body.state;
  newUser.zip = req.body.zip;
  newUser.phone = req.body.phone;
  newUser.accessLevel =req.body.accessLevel;
  newUser.organizationID = req.body.organizationID;
  newUser.teamID = req.body.teamID;
  newUser.enabled = req.body.enabled;
  newUser.firstLogin = req.body.firstLogin;
  newUser.save()
    .then((createdUser) => res.json(createdUser));
});

router.post('/:id', (req, res) => {
  let id = req.params.id;
  User.findById(id).then((foundUser) => {
    foundUser.userName = req.body.userName;
    foundUser.firstName = req.body.firstName;
    foundUser.lastName = req.body.lastName;
    foundUser.password = req.body.password;
    foundUser.email = req.body.email;
    foundUser.address = req.body.address;
    foundUser.address2 = req.body.address2;
    foundUser.city = req.body.city;
    foundUser.state = req.body.state;
    foundUser.zip = req.body.zip;
    foundUser.phone = req.body.phone;
    foundUser.accessLevel = req.body.accessLevel;
    foundUser.organizationID = req.body.organizationID;
    foundUser.teamID = req.body.teamID;
    foundUser.enabled = req.body.enabled;
    foundUser.firstLogin = req.body.firstLogin;
    foundUser.save().then((savedUser) => res.json(savedUser));
  });
});

export default router;
