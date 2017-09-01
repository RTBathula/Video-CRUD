import {listen,close} from '../dist/app';
import configKeys from "../dist/config/keys";
import mongoose from "mongoose";
var server

/*
  Bootup database and run express server
*/
before(async() => {
	try{
		await mongoose.connect(`${configKeys.MONGO_URL}/${configKeys.DATABASE}`,{useMongoClient: true});			
		server = await listen();
		return;			
	}catch(err){
		throw err;
	}
});

/*
  Close server
*/
after(async() => {
	await close(server);
	return;		
})
