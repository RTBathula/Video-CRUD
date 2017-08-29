import {
	isJsonObject, 
	isMongoObjectIdValid,
	isArray
} from "../helpers/util";

export const createVideo = (req, res, next) => { 	
	let videoObj = req.body || null; 	 

	let errorMsg = _isValidVideoObject(videoObj);
	if(errorMsg){
		let result = {};
		result.status = "error";	
		result.message = errorMsg;	
		return res.status(400).json(result);
	}

	return next();
}

export const getVideoById = (req, res, next) => { 		
	let id = req.params.id; 		

	let errorMsg = _isValidateId(id);
	if(errorMsg){
		let result = {};
		result.status = "error";	
		result.message = errorMsg;	
		return res.status(400).json(result);
	}

	return next();
}

export const updateVideoById = (req, res, next) => { 		
	let id = req.params.id; 
	let videoObj = req.body || null; 
		
	let errorMsg = _isValidateId(id);
	if(errorMsg){
		let result = {};
		result.status = "error";	
		result.message = errorMsg;	
		return res.status(400).json(result);
	}

	errorMsg = _isValidVideoObject(videoObj);
	if(errorMsg){
		let result = {};
		result.status = "error";	
		result.message = errorMsg;	
		return res.status(400).json(result);
	}

	return next();
}

export const deleteVideoById = (req, res, next) => { 		
	let id = req.params.id; 		

	let errorMsg = _isValidateId(id);
	if(errorMsg){
		let result = {};
		result.status = "error";	
		result.message = errorMsg;	
		return res.status(400).json(result);
	}

	return next();
}

//Private functions
const _isValidVideoObject = (videoObj) => { 	

	if(!isJsonObject(videoObj)){
		return "invalid video object";	
	}

	if(!videoObj.name){		
		return "name is required";			
	}

	if(!videoObj.keywords){		
		return "keywords is required";		
	}

	if(!isArray(videoObj.keywords)){			
		return "keywords should be array";			
	}

	if(videoObj.keywords.length === 0){			
		return "keywords should have atleast one keyword";			
	}

	return null;
}	

const _isValidateId = (id) => { 	

	if(!id){		
		return "id is required";			
	}

	if(!isMongoObjectIdValid(id)){	
		return "invalid id";		
	}

	return null;
}