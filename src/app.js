import express from "express";
import bodyParser from "body-parser";
import configKeys from "./config/keys";
import {isJsonParsable} from "./helpers/util";
import swaggerTools from "swagger-tools";
import YAML from "yamljs";
import routes from "./routes/index";

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname));

//Load api docs yml and serve the Swagger documents and Swagger UI		
if(configKeys.ENABLE_AUTO_DOCS){
	const swaggerDoc = YAML.load(configKeys.APIDOCSYML_FILEPATH);
	swaggerTools.initializeMiddleware(swaggerDoc, (middleware) => {  
		app.use(middleware.swaggerUi());
	});
}	

//If req body is a string, convert it to JSON.
app.use((req, res, next) => {
	if(req.text && isJsonParsable(req.text)){
		req.body = JSON.parse(req.text);
	}

	if(req.body && typeof(req.body) === "string" && isJsonParsable(req.body)){
		req.body = JSON.parse(req.body);
	}  
	next();
});  

//Middleware CORS 
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Credentials", true);
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
	res.header("Access-Control-Allow-Headers", "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept");
	next();
});

//Routes
app.use("/", routes);

//Default route
app.get("/", (req, res) => {   
	return res.status(200).send(`Video CRUD API(${configKeys.ENV}) is up and running`);     
});  

//Listen express server
export const listen = () => {   
	app.set("port", configKeys.NODE_PORT);

	return new Promise((resolve) => {
		const server = app.listen(app.get("port"), () => {    
			const status = `Video CRUD API(${configKeys.ENV}) is up and running on PORT: ${app.get("port")}\n`;
			process.stdout.write(status); //To show in CLI that server is running once success	
			resolve(server);
		});
	});
};

//Close express server
export const close = (server) => {
	return new Promise((resolve) => {
		server.close(() => {  			    
			resolve(`Video CRUD API(${configKeys.ENV}) server successfully closed`); 
		});
	});  
};
