/*File name : businessContact.js
  Author's name : Seol Cheon
  Student ID : 301113120
  Web site name : Seol Cheon
  date : Oct 24, 2020 */

let mongoose = require('mongoose');

//create a model class
let contactModel = mongoose.Schema({
    name: String,
    number: Number,
    email: String
    
},
{
    collection: "contacts"
});

module.exports = mongoose.model('Contacts', contactModel);