import express from "express";
import * as validate from "../validations/video";
import * as videoService from "../services/video";

const router = express.Router();

/*
 * Create video object
 * @param {name,keywords}
 * @return saved video object
 */
router.post("/", validate.createVideo, async (req, res) => {	    
	let videoObj = req.body; 
	let result = {}; 

	try{
		let savedObj = await videoService.createVideo(videoObj.name, videoObj.keywords);

		result.status = "success";
		result.message = "Successfully created";
		result.data = savedObj;
		return res.status(201).json(result);

	}catch(err){
		result.status = "error";	
		result.message = err.message || "unable to create. please check video object";	
		return res.status(400).json(result);
	}  
}); 

/*
 * Get video object by id
 * @param id
 * @return video object
 */
router.get("/:id", validate.getVideoById, async (req, res) => {	    
	let id = req.params.id;  
	let result = {}; 

	try{
		let videoObj = await videoService.getVideoById(id);

		result.status = "success";
		result.message = "Successfully fetched";
		result.data = videoObj;
		return res.status(200).json(result);
	}catch(err){
		result.status = "error";	
		result.message = "unable to get video by given id";
		return res.status(400).json(result);
	}  
});

/*
 * Get video object list
 * @return video list(array)
 */
router.get("/", async (req, res) => {	 	 
	let result = {}; 

	try{
		let list = await videoService.getVideoList();

		result.status = "success";
		result.message = "Successfully fetched video list";
		result.data = list;
		return res.status(200).json(result);
	}catch(err){
		result.status = "error";	
		result.message = "unable to fetch video list";
		return res.status(400).json(result);
	}  
});

/*
 * Update video object by id
 * @param id,{name,keywords}
 * @return success message
 */
router.put("/:id", validate.updateVideoById, async (req, res) => {	    
	let id = req.params.id;  
	let videoObj = req.body;
	let result = {}; 

	try{
		await videoService.updateVideoById(id, videoObj);

		result.status = "success";
		result.message = "Successfully updated";		
		return res.status(200).json(result);
	}catch(err){
		result.status = "error";	
		result.message = "unable to update video object";
		return res.status(400).json(result);
	}  
});

/*
 * Delete video object by id
 * @param id
 * @return success message
 */
router.delete("/:id", validate.deleteVideoById, async (req, res) => {	    
	let id = req.params.id;  	
	let result = {}; 

	try{
		await videoService.deleteVideoById(id);

		result.status = "success";
		result.message = "Successfully deleted";		
		return res.status(200).json(result);
	}catch(err){
		result.status = "error";	
		result.message = "unable to delete video object with given id";
		return res.status(400).json(result);
	}  
});

export default router;
