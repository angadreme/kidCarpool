import * as express from 'express';
import StudentTeam from '../Models/student_teamModel'

let router = express.Router();

router.get('/:id', (req, res) => {
  StudentTeam.findById(req.params.id)
    .then((foundStudentTeam) => res.json(foundStudentTeam))
});

router.delete('/:id', (req, res) => {
  StudentTeam.remove({_id: req.params.id})
    .then((deletedStudentTeam) => res.json(deletedStudentTeam))
    .catch((err) => res.json(err))
});

router.post('/', (req, res) => {
  let newStudentTeam = new StudentTeam();
  newStudentTeam.studentID = req.body.studentID;
  newStudentTeam.teamID = req.body.teamID;
  newStudentTeam.save()
    .then((createdStudentTeam) => res.json(createdStudentTeam))
});



export default router;
