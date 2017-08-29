export const createVideo = (req, res, next) => { 	
	let adminObj = req.body || null  

	if(!adminObj){
		return false
	}

	return next()
}
