import mongoose from "mongoose";

/*
 * Checks is json parsable or not
 */
export const isJsonParsable = (json) => {  

	try{
		JSON.parse(json);  
	}catch(e){
		return false;
	}      
  
	return true;
}

/*
 * Checks is json or not
 */
export const isJsonObject = (json) => {  

	if(!json || Object.prototype.toString.call(json) !== "[object Object]"){
		return false;
	}
	
	return true;
}

/*
 * Checks is array or not
 */
export const isArray = (list) => {  

	if(!list || Object.prototype.toString.call(list) !== "[object Array]"){
		return false;
	}
	
	return true;
}

/*
 * Checks is mongo object id or not
 */
export const isMongoObjectIdValid = (id) => {  

	const ObjectId = mongoose.Types.ObjectId;

	if(!id || !ObjectId.isValid(id)){
		return false;
	}
	
	return true;
}
