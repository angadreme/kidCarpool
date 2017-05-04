import * as express from 'express';
import Team from '../Models/teammodel';

let router = express.Router();

router.get('/', (req, res) => {
  Team.find().then((foundTeam) => res.json(foundTeam));
});

router.get('/:id', (req, res) => {
  Team.findById(req.params.id)
    .then((foundTeam) => res.json(foundTeam));
});

router.get('/Organizations/:id/teams', (req, res) =>{
  Team.find({organizationID: req.params.id})
  .then((matches) => res.json(matches));
});

router.delete('/:id', (req, res) => {
  Team.remove({_id: req.params.id})
    .then((deletedTeam) => res.json(deletedTeam))
    .catch((err) => res.json(err));
});

router.post('/', (req, res) => {
  let newTeam = new Team();
  newTeam.teamName = req.body.teamName;
  newTeam.headCoachName = req.body.headCoachName;
  newTeam.organizationID = req.body.organizationID;
  newTeam.save().then((createdTeam) => res.json(createdTeam));
});

router.post('/:id', (req, res) => {
  let id = req.params.id;
  Team.findById(id).then((foundTeam) => {
    foundTeam.teamName = req.body.teamName;
    foundTeam.headCoachName = req.body.headCoachName;
    foundTeam.organizationID = req.body.organizationID;
    foundTeam.save((savedTeam) => res.json(savedTeam));
  });
});

export default router;
