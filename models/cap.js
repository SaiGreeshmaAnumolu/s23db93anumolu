const mongoose = require("mongoose")
const capSchema = mongoose.Schema({
brand: String,
color: String,
price: Number
})
module.exports = mongoose.model("cap",capSchema)