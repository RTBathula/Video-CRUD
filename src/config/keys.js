let keys = {}

keys.ENV = process.env.NODE_ENV || "development"; //Default to development
keys.NODE_PORT = process.env.PORT || 8081; //Default port
keys.MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017"; //Default to local
keys.DATABASE = "videodb"; //Database name
keys.ENABLE_AUTO_DOCS = true; //Enables /docs to view api docs, allows get sdk's
keys.APIDOCSYML_FILEPATH = "./api-docs.yml"; //Path to api defintion docs

export default keys
