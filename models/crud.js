const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let crudSchema = new Schema({
name: {
	type: String
},
colors: {
	type: String
}
})


module.exports = mongoose.model('Crud', crudSchema)
