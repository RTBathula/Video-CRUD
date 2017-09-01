import express from "express";
import request from "request";
import {getPublicUrl} from "../helpers/ngrok";
const router = express.Router();

/*
 * Get sdk by given language
 * @param lang
 * @return zipped sdk
 */
router.get("/:lang", async (req, res) => {	    
	let lang = req.params.lang;

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
