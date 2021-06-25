var mongoose = require("mongoose");
var pslSchema = mongoose.Schema({
  City: String,
  Date: String,
  TeamName:String,
 
});
var PSL = mongoose.model("PSL", pslSchema);
module.exports = PSL
