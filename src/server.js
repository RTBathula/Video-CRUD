import {listen} from "./app";
import mongoose from'mongoose';
import configKeys from "./config/keys";

/*
 * Bootup database and run express server
 */
(async () => {		
	await mongoose.connect(`${configKeys.MONGO_URL}/${configKeys.DATABASE}`);	
	listen(); //Run express server		
})()









