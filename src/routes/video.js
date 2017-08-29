import express from "express";
import * as validate from "../validations/video";
import * as videoService from "../services/video";

const router = express.Router();

/*
 * Create video object
 */
router.post("/", validate.createVideo, async (req, res) => {	
    
	let videoObj = req.body;  

	try{
		let result = await videoService.createVideo(videoObj.name, videoObj.keywords);
		return res.status(201).json(result);
	}catch(err){
		return res.status(400).send(err);
	}  
}); 

/*
 * Get video object by id
 */
router.get("/:id", validate.getVideo, async (req, res) => {	
    
	let id = req.params.id;  

	try{
		let result = await videoService.getVideo(id);
		return res.status(200).json(result);
	}catch(err){
		return res.status(400).send(err);
	}  
});

/*
 * Get video object by id
 */
router.get("/", validate.getVideo, async (req, res) => {	
    
	let id = req.params.id;  

	try{
		let result = await videoService.getVideo(id);
		return res.status(200).json(result);
	}catch(err){
		return res.status(400).send(err);
	}  
});

/*
 * Get video object by id
 */
router.put("/:id", validate.getVideo, async (req, res) => {	
    
	let id = req.params.id;  

	try{
		let result = await videoService.getVideo(id);
		return res.status(200).json(result);
	}catch(err){
		return res.status(400).send(err);
	}  
});

/*
 * Get video object by id
 */
router.delete("/:id", validate.getVideo, async (req, res) => {	
    
	let id = req.params.id;  

	try{
		let result = await videoService.getVideo(id);
		return res.status(200).json(result);
	}catch(err){
		return res.status(400).send(err);
	}  
});

export default router;
