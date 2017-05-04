import * as express from 'express';
import Organization from '../Models/organizationModel';

let router = express.Router();

router.get('/', (req, res) => {
  Organization.find().then((organizations) => res.json(organizations));
});

router.get('/:id', (req, res) => {
  Organization.findOne({_id: req.params.id})
    .then((foundOrg) => res.json(foundOrg));
});

router.post('/', (req, res) => {
  let newOrg = new Organization();
  newOrg.organizationName = req.body.organizationName;
  newOrg.Logo = req.body.Logo;
  newOrg.enabled = req.body.enabled;
  newOrg.save().then((createdOrg) => res.json(createdOrg));
});

export default router;
