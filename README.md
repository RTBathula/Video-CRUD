# Video Cr
Hellofresh test project

# Journey
Enabled ES6 usage with babel support. Abstracted database api. Created a separate folder especially for validations. Validations are done for every end point via middleware style. All the API calls respond in same style, giving consistency and symmetry to responses either errors or success responses. 

Example of success result 
```
{ 
    status     : "success",
    statusCode : 200
    message    : "successfully fetched",
    data       : {} 
}
```

Example of error result
```
{ 
    status     : "error",
    statusCode : 400
    message    : id param is required"   
}
```

#### Search recipe
Made mongodb indexing on recipe name. Also made flexible search api by giving options like
**language**,**case sensitive**, **diacritic sensitive**

Also maintained good file structure, i.e same respective functionality file names and function names.
```
src
    routes
        recipe
    validations
        recipe
    controllers
        recipe        
```    

Finally wrote api tests in way that a "test" database is created and dropped once tests are done.


# Getting Started by docker

## Fork and clone the repository and run. 

``docker-compose -f docker-compose.yml up -d --build``

which runs a nodejs server on default port on 8080 and mongodb on 27017.
End point is **http://docker-machine-ip:8080**

#### On successfull run, a default server admin is created with following credentials

- email    : `admin@admin.com`
- password : `admin`  


## To run api tests

``docker-compose -f docker-compose.test.yml up -d --build``

## Tweak environments
You can change environments in  src/config/keys.js file

Example: under src/config/keys.js
```
{
  development : {
    mongodbConnectUri: "mongodb://mongodb:27017"
  }
}
```
and set environment in docker-compose files

Example: under docker-compose.yml
```
environment:
    NODE_ENV : development
```

# API End points and usage

##### Overview(Admin authentication is need for some routes)

| Name   | Method      | URL                  | Auth required  |
| ---    | ---         | ---                  | ---            |
| List   | `GET`       | `/recipes`           | No             |
| Create | `POST`      | `/recipes`           | Yes            |
| Get    | `GET`       | `/recipes/{id}`      | No             |
| Update | `PUT/PATCH` | `/recipes/{id}`      | Yes            |
| Delete | `DELETE`    | `/recipes/{id}`      | Yes            |
| Rate   | `PUT`       | `/recipes/{id}/rate` | No             |
| Search | `POST`      | `/recipes/search`    | No             |

## Admin login POST -> /admin/login

**As authentication is required for Create,Update,Delete**

> Example CURL Request:

```
curl -X POST -H "Accept: application/json" -H "Content-Type: application/json" -d '{"email":"admin@admin.com","password":"admin"}' http://<docker-machine ip>:8080/admin/login

```

> Result:

```json
{
    "status"     : "success",
    "statusCode" : 200,
    "message"    : "Successfully logged in",
    "token"      : "eyJhbGciOiJIUzI1NiIs"
}
```

### Parameters

Parameter          | Type        | Description
-------------------| ----------- | -------------------------------
email              | string      | admin email
password           | string      | admin password



## Create recipe POST -> /recipes

**Authentication is required** On admin login , you'll recieve a token, pass this token in header as
``Authorization: Bearer <auth-token>``

> Example CURL Request:

```
curl -X POST -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer <auth-token>" -d '{"uniqueId":"pan-cake123","name":"pan cakes","prepTime":30,"difficulty":3,"vegetarian":true}' http://<docker-machine ip>:8080/recipes

```

> Result:

```json
{
    "status"     : "success",
    "statusCode" : 200,
    "message"    : "Successfully created a recipe",
    "data"       : { created recipe object}
}
```

### Parameters(all are required)

Parameter     | Type        | Description
--------------| ----------- | ---------------
uniqueId      | string      | a unique string
name          | string      | recipe name
prepTime      | number      | preparation time in min and greater than 1
difficulty    | number      | diificulty of recipe among 1-3
vegetarian    | boolean     | true for vegetarican recipe, false for no

## Get recipe details GET -> recipes/{recipeid}

> Example CURL Request:

```
curl -X GET  http://<docker-machine ip>:8080/recipes/{recipeid}
```

> Result:

```json
{
    "status"     : "success",
    "statusCode" : 200,
    "message"    : "Successfully fetched the recipe details",
    "data"       : {recipe object}
}
```

## Get recipe list GET -> recipes?skip=0&limit=3

> Example CURL Request:

```
curl -X GET  http://<docker-machine ip>:8080/recipes
```

> Result:

```json
{
  "status"  : "success",
  "message" : "Successfully fetched the recipe list" ,
  "data"    : [{recipe object}]
}
```
### Optional skip and limit query params

Parameter     | Type        | Description
--------------| ----------- | -------------------------------
skip          | integer     |  skip documents 
limit         | integer     |  limit return documents


## Update recipe PUT -> recipes/{recipeid}

**Authentication is required** On admin login , you'll recieve a token, pass this token in header as
``Authorization: Bearer <auth-token>``

> Example CURL Request:

```
curl -X PUT -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer <auth-token>" -d '{"name":"pan caked with honey"}' http://<docker-machine ip>:8080/recipes/{recipeid}

```

> Result:

```json
{
  "status"  : "success",
  "message" : "Successfully updated the recipe"
}
```

### Parameters(any one of them is needed to update recipe)

Parameter     | Type        | Description
--------------| ----------- | -------------------------------
name          | string      | recipe name
prepTime      | number      | preparation time in min and greater than 1
difficulty    | number      | diificulty of recipe among 1-3
vegetarian    | boolean     | true for vegetarican recipe, false for no


## Delete recipe DELETE -> recipes/{recipeid}

**Authentication is required** On admin login , you'll recieve a token, pass this token in header as
``Authorization: Bearer <auth-token>``

> Example CURL Request:

```
curl -X DELETE -H "Authorization: Bearer <auth-token>" http://<docker-machine ip>:8080/recipes/{recipeid}
```

> Result:

```json
{
    "status"     : "success",
    "statusCode" : 200,
    "message"    : "Successfully deleted the recipe"
}
```

## Rate recipe PUT -> recipes/{recipeid}/rate

> Example CURL Request:

```
curl -X PUT -H "Accept: application/json" -H "Content-Type: application/json" -d '{"rate": 3 }' http://<docker-machine ip>:8080/recipes/{recipeid}/rate

```

> Result:

```json
{
  "status"  : "success",
  "message" : "Successfully rated the recipe"
}
```

### Parameters

Parameter     | Type        | Description
--------------| ----------- | -------------------------------
rate          | number      | rating (1-5)


## Search recipe POST -> recipes/search

> Example CURL Request:

```
curl -X POST -H "Accept: application/json" -H "Content-Type: application/json" -d '{"search": "pan" }' http://<docker-machine ip>:8080/recipes/search

```

> Result:

```json
{
  "status"  : "success",
  "message" : "Successfully searched the recipes",
  "data"    : [{recipe object}]
}
```

### Parameters(only search param is required)

Parameter             | Type        | Description
----------------------| ----------- | -------------------------------
search(required)      | string      | recipe name to search
language              | string      | language (default is "en" -english)
caseSensitive         | boolean     | which means e is same as E (default is false)
diacriticSensitive    | boolean     | which means e is same as é (default is false)


### Ways of search can be done by "search" param

Example               | Description        
----------------------| ----------- 
``chicken``            | returns recipes name having string 'chicken'       
``chicken beef``       | returns recipes name having keywords either of chicken OR beef keywords      
``\"chicken soup\"``   | returns recipes name having exact phrase "chicken soup"     
``chicken -beef``       | returns recipes name having keyword "chicken"  but not "beef"      

## Love :heart: to hear feedback from you
RT Bathula-weirdo,coffee lover
battu.network@gmail.com
