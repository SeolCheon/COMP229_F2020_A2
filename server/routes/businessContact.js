let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our Contact Model
let Contacts = require('../models/businessContact');

let contactController = require('../controllers/businessContact');

/* GET Route for the Contact List page - READ Operation */
router.get('/', contactController.displayContactList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', contactController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', contactController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', contactController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', contactController.processEditPage);

/* GET to perform Contact Deletion - DELETE Operation */
router.get('/delete/:id', contactController.performDelete );
module.exports = router;