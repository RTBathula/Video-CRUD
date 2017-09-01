# Video CRUD API
A video CRUD API having features api docs and sdk generation

# Journey
Enabled ES6 usage with babel support. Abstracted database api. Created a separate folder especially for validations. Validations are done for every end point via middleware style. All the API calls respond in same style, giving consistency and symmetry to responses either errors or success responses. 

Example of success result 
```
{ 
    status     : "success",   
    message    : "successfully fetched",
    data       : {} 
}
```

Example of error result
```
{ 
    status     : "error",  
    message    : id param is required"   
}
```
# Getting Started by docker

## Clone the repository and run. 

``docker-compose -f docker-compose.yml up -d --build``

which runs a nodejs server on default port on 8080 and mongodb on 27017.
End point is **http://docker-machine-ip:8080**

## API Docs
Open **http://docker-machine-ip:8080/docs** in browser to see API documentation

## SDK Generation
Open **http://docker-machine-ip:8080/sdk/{lang}** in browser 
to get preferred language sdk to download

Example: http://localhost:8080/sdk/javascript

Alternatively you can create sdk in current directory if you running docker with following command
```
./gen-sdk {lang}

//Example
./gen-sdk javascript
```
Which creates javascript sdk in sdk folder


## To run simple api tests

``docker-compose -f docker-compose.test.yml up -d --build``

## Tweak configuration
You can change configuration in  src/config/keys.js file

Example: under src/config/keys.js
```
//Enable or disable api docs and sdk
keys.ENABLE_AUTO_DOCS = false; 
```

You can also set environments by creating **.env** file.
Currently using **.env.example** file for demo purpose

## Love :heart: to hear feedback from you
RT Bathula-weirdo,coffee lover
battu.network@gmail.com
