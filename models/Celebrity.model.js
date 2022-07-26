//  Add your code here
const { Schema, model } = require("mongoose");
const Celebrity = require("./Celebrity.model");

const celebritySchema = new Schema ({
name:{
    type: String,
    required: "true"
},
occupation:{
    type: String,
    required: "true",
    default: "unknown"
},
catchphrase:{
    type: String,
    required: "true"
}
})

const Celebrity = model("Celebrity", celebritySchema);

module.exports = Celebrity