const express = require('express');
const router = express.Router();
const studyController = require('../controllers/StudyController');

router.get('/:id',studyController.get);
router.post('/',studyController.post);

module.exports = router;