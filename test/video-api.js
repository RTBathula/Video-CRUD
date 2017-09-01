import axios from "axios";
let payload = {
	validateStatus: status => {
		return status >= 200 && status < 500; //Customized to catch 400 erros
	}
};

describe("Video CRUD Services", () => {  

	describe("#create", () => {

		it("Should create video object", async function() {
			this.timeout(10000);       

			payload.method = "post";
			payload.url = `${global.baseUrl}/video`;
			payload.data = {     
				"name": "hello",
				"keywords": ["sports", "football"]
			};  

			try{       
				await axios(payload);
				return;      
			}catch(err){
				throw err; 
			}    
     
		});

	});

	describe("#Get video object by id", () => {

		it("Should get video object by id", async function() {
			this.timeout(10000); 

			payload.method = "post";
			payload.url = `${global.baseUrl}/video`;
			payload.data = {     
				"name": "hello2",
				"keywords": ["wild animal", "tiger"]
			};  

			try{       
				const resp = await axios(payload);       
				await axios.get(`${global.baseUrl}/video/${resp.data.data._id}`); 
				return;  
			}catch(err){
				throw err; 
			} 

		});

	});

	describe("#Get video object list", () => {

		it("Should get video object list", async function() {
			this.timeout(10000); 

			try{            
				await axios.get(`${global.baseUrl}/video`); 
				return;  
			}catch(err){
				throw err; 
			} 

		});

	});

	describe("#Update video object by id", () => {

		it("Should update video object by id", async function() {
			this.timeout(10000); 

			payload.method = "post";
			payload.url = `${global.baseUrl}/video`;
			payload.data = {     
				"name": "hello3",
				"keywords": ["film", "titanic"]
			};  

			try{       
				const resp = await axios(payload);

				payload.method = "put"; 
				payload.url = `${global.baseUrl}/video/${resp.data.data._id}`; 
				payload.data = {     
					"name": "hello3-update",
					"keywords": ["film-update", "titanic-update"]
				}; 

				await axios(payload);
				return;  
			}catch(err){
				throw err; 
			} 

		});

	});

	describe("#Delete video object by id", () => {

		it("Should delete video object by id", async function() {
			this.timeout(10000); 

			payload.method = "post";
			payload.url = `${global.baseUrl}/video`;
			payload.data = {     
				"name": "hello4",
				"keywords": ["beautiness", "women"]
			};  

			try{       
				const resp = await axios(payload);       
				await axios.delete(`${global.baseUrl}/video/${resp.data.data._id}`); 
				return;  
			}catch(err){
				throw err; 
			} 

		});

	});  
   
});