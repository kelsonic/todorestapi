# Todo REST API
This is a simple todo-list REST API built primarily with Express and Node.

## Getting Started

To test out the API it's recommended to use [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en).

###1. Create your account

   POST to `https://todorestapi.herokuapp.com/api/users`
   
   Body of your request should look like:
   ```javascript
    {
        "email": "me@example.com",
        "password": "abc123456789"
    }
   ```

###2. Login

   POST to `https://todorestapi.herokuapp.com/api/login`
   
   Body of your request should look like:
   ```javascript
    {
        "email": "james@example.com",
        "password": "abc123456789"
    }
   ```

   Copy the generated token in the Auth header and create an environment variable in Postman with it to add Auth to all of the following requests.

###3. Create a Todo Task
   
   POST to `https://todorestapi.herokuapp.com/api/todos`
   
   Body of your request should look like:
   ```javascript
    {
        "description": "Go for a walk",
        "completed": false
    }
   ```

   The response should look similar to this:

   ```javascript
    {
      "id": 1,
      "description": "Go for a walk",
      "completed": false,
      "createdAt": "2016-06-15T00:55:47.956Z",
      "updatedAt": "2016-06-15T00:55:47.982Z",
      "userId": 1
    }
   ```

###4. Get all Todo Tasks You've Created
   
   GET to `https://todorestapi.herokuapp.com/api/todos`

   The response should look similar to this:

   ```javascript
    {
      "id": 1,
      "description": "Go for a walk",
      "completed": false,
      "createdAt": "2016-06-15T00:55:47.956Z",
      "updatedAt": "2016-06-15T00:55:47.982Z",
      "userId": 1
    }
   ```

###5. Get a Specific Todo Task
   
   GET to `https://todorestapi.herokuapp.com/api/todos/1`

   The response should look similar to this:

   ```javascript
    {
      "id": 1,
      "description": "Go for a walk",
      "completed": false,
      "createdAt": "2016-06-15T00:55:47.956Z",
      "updatedAt": "2016-06-15T00:55:47.982Z",
      "userId": 1
    }
   ```

###6. Update a Specific Todo Task
   
   PUT to `https://todorestapi.herokuapp.com/api/todos/1`
   
   Body of your request should look like:

   ```javascript
    {
        "description": "updated description",
        "completed": true
    }
   ```

   The response should look similar to this:

   ```javascript
    {
      "id": 1,
      "description": "updated description",
      "completed": true,
      "createdAt": "2016-06-15T00:55:47.956Z",
      "updatedAt": "2016-06-15T01:01:56.284Z",
      "userId": 1
    }
   ```

###7. Delete a Specific Todo Task
   
   DELETE to `https://todorestapi.herokuapp.com/api/todos/1`

   The response should be a 204 (No Content).

###8. Logout
   
   DELETE to `https://todorestapi.herokuapp.com/api/logout`

   The response should be a 204 (No Content).


## Working with the API locally
```
git clone https://github.com/kelsonic/todorestapi.git

cd /todorestapi

npm install

node server.js
```

(It should now be running on localhost:3000.)

## Dependencies

+ bcryptjs: 2.3.0
+ body-parser: 1.13.3
+ crypto-js: 3.1.5
+ express: 4.13.3
+ JSONWebToken: 5.0.5
+ pg: 4.4.1
+ pg-hstore: 2.3.2
+ sequelize: 3.5.1
+ SQLite: 2.0.2
+ underscore: 1.8.3

## Contributing
If you are interested in contributing, please make a pull-request with a description of your changes.

## License
MIT License. View it in the LICENSE.