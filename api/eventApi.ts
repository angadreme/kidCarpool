import * as express from 'express';
import Event from '../Models/eventmodel';

let router = express.Router();

router.get('/', (req, res) => {
  Event.find().then((events) => res.json(events));
});

router.get('/:id', (req, res) => {
  Event.findById(req.params.id)
    .then((foundEvent) => res.json(foundEvent));
});

router.delete('/:id', (req, res) => {
  Event.remove({_id: req.params.id})
  .then((deletedEvent) => res.json(deletedEvent))
  .catch((err) => res.json(err));
});

router.post('/', (req, res) => {
  let newEvent = new Event();
  newEvent.eventName = req.body.eventName;
  newEvent.eventDate = req.body.eventDate;
  newEvent.eventLocation = req.body.eventLocation;
  newEvent.locationAddress = req.body.locationAddress;
  newEvent.startTime = req.body.startTime;
  newEvent.endTime = req.body.endTime;
  newEvent.teamID = req.body.teamID;
  newEvent.save()
    .then((createdEvent) => res.json(createdEvent));
});

router.post('/:id', (req, res) => {
  let id = req.params.id;
  Event.findById(id).then((foundEvent) => {
    foundEvent.eventName = req.body.eventName;
    foundEvent.eventDate = req.body.eventDate;
    foundEvent.eventLocation = req.body.eventLocation;
    foundEvent.locationAddress = req.body.locationAddress;
    foundEvent.startTime = req.body.startTime;
    foundEvent.endTime = req.body.endTime;
    foundEvent.teamID = req.body.teamID;
    foundEvent.save().then((savedEvent) => res.json(savedEvent));
  });
});

/* find matching movies */
// router.get('/movies/search/:search', function(req, res, next) {
//     let search = req.params['search'];
//     let matches = movies.filter((movie)=>{
//       return movie.title.indexOf(search) == 0;
//     });
//     res.json(matches);
// });

export default router;
