let keys = {}

keys.ENV = process.env.NODE_ENV || "development"; //Default to development
keys.NODE_PORT = process.env.PORT || 8080; //Default port
keys.MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017"; //Default to local
keys.DATABASE = "videodb";
keys.ENABLE_APIDOCS = true;
keys.APIDOCSYML_FILEPATH = "./api-docs.yml";

export default keys
