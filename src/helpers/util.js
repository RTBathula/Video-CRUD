export const isJsonParsable = (json) => {  

	try{
		JSON.parse(json)  
	}catch(e){
		return false
	}      
  
	return true
}
