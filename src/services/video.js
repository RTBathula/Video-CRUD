import Video from "../models/video";

/**
 * @ Create video
 */
export const createVideo = async (name, keywords) => {               
     
	let video = new Video();
	video.createdDate = new Date();    
    video.name = name;
    video.keywords = keywords;	

	return new Promise((resolve, reject) => {
		video.save((err, reply) => {
		    if (err) {
		    	return reject(err);  
		    }  

		    resolve(reply);		      
		});
	}); 
}

/**
 * @ Create video
 */
export const getVideo = async (id) => {     
	return new Promise((resolve, reject) => {
		Video.findOne({_id: id },(err, video) => {
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

