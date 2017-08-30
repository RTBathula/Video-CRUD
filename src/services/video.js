import Video from "../models/video";

/*
 * Create video object
 * @param {name,keywords}
 * @return saved video object
 */
export const createVideo = (name, keywords) => {               
     
	let video = new Video();
	video.createdDate = new Date();    
    video.name = name;
    video.keywords = keywords;	

	return new Promise((resolve, reject) => {
		video.save((err, savedDoc) => {
		    if (err) {
		    	return reject(err);  
		    }  

		    resolve(savedDoc);		      
		});
	}); 
}

/*
 * Get video object by id
 * @param id
 * @return video object
 */
export const getVideoById = (id) => {     
	return new Promise((resolve, reject) => {
		Video.findOne({_id: id},(err, video) => {
		    if (err) {
		    	return reject(err);  
		    }  

		    if(!video){
		    	return reject("Unable to find video object with given id");
		    }
		    
		    resolve(video);		      
		});
	}); 
}


/*
 * Get video object list
 * @return video list(array)
 */
export const getVideoList = () => {     
	return new Promise((resolve, reject) => {
		Video.find({}).exec((err, list) => {
		    if (err) {
		    	return reject(err);  
		    }     
		    
		    resolve(list);		      
		});
	}); 
}


/*
 * Update video object by id
 * @param id,{name,keywords}
 * @return success message
 */
export const updateVideoById = (id, videoObj) => {     
	return new Promise((resolve, reject) => {

		let newVideoObj = { 
			name: videoObj.name, 
			keywords: videoObj.keywords 
		};

		Video.findOneAndUpdate({_id: id}, newVideoObj, {new: true}, (err, newDoc) => {
		    if (err) {
		    	return reject(err);  
		    }     
		    
		    resolve(newDoc);		      
		})
	}); 
}

/*
 * Delete video object by id
 * @param id
 * @return success message
 */
export const deleteVideoById = (id) => {     
	return new Promise((resolve, reject) => {
		Video.deleteOne({_id: id}, (err, resp) => {
		    if (err) {
		    	return reject(err);  
		    } 		   
		    resolve(resp.deletedCount);		      
		});
	}); 
}