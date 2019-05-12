const mongoose = require("mongoose");
const {Schema} = mongoose;
const RK = mongoose.Schema.ObjectId;

const imageSchema = new Schema({

	imglink:String,
	user:{type:RK, ref:'User'},
	created:{type:Date, default:Date.now},
	upvotes:Number,
	downvotes:Number


})


mongoose.model("Images", imageSchema);