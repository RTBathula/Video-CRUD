import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

//Video object schema definition
const videoSchema = new Schema({
	id: ObjectId,
	createdDate: Date,
	name: String,
	keywords: Array
}, { collection: "video", versionKey: false});

export default mongoose.model("Video", videoSchema);