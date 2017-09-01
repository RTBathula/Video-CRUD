import ngrok from "ngrok";
import configKeys from "../config/keys";
let publicUrl = null;

/*
 * Get public Url
 */
export const getPublicUrl = () => {  
	return new Promise((resolve, reject) => {

		if(publicUrl){
			return resolve(publicUrl)
		}

		ngrok.connect(configKeys.NODE_PORT, (err, url) => {			
			if(err){
				return reject("Unable to get the public Url")
			}

			publicUrl = url;
			resolve(publicUrl);
		});
	});	
}



