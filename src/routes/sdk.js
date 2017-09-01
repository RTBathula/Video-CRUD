import express from "express";
import configKeys from "../config/keys";
import request from "request";
import {getPublicUrl} from "../helpers/ngrok";
const router = express.Router();

/**
 * Get the requested language sdk as zip file
 * Gets the public url froom ngrok
 * Makes REST request to Swagger generated API to get sdk
 * @param lang language
 * @returns zipfile
 */ 
router.get("/:lang", async (req, res) => {	    
	let lang = req.params.lang;

	if(!configKeys.ENABLE_AUTO_DOCS){
		return res.status(400).send("this feature is not enabled");
	}

	try {

		const publicUrl = await getPublicUrl();	
		
		request({
			method: "POST", 
	        url: `http://generator.swagger.io/api/gen/clients/${lang}`,
	        json: {
			    swaggerUrl: `${publicUrl}/api-docs`	
			}
    	},(err, data, body) => {
    	    		
    		if(err || body.type === "error"){
    			return res.status(400).send("unable get the sdk, check the requested language");
    		}

		    request({
				method: "GET", 
		        rejectUnauthorized: false, 
		        url: body.link
	    	})
	    	.on('error', err => {
			    return res.status(400).send("unable get the sdk");
			})
			.pipe(res);
		});		

	}catch(err){
		return res.status(400).send(err);
	}
   
});

export default router;
