# REST API: This API contain signup, login, fetch user list, fetch user details. For authentication there is use of JWT.

Signup: Signup is done by entering some details like first Name, last Name, username, password, after that we can generate authentication token.

Login: Login is done by entering his/her username and password, after that we generate the authentication token for further verification.

Fetch User List: It is a get request (http://localhost:3000/users), to get the list of all users you have to request on above route.

Fetch User Detail: It is a get request (http://localhost:3000/userdetails), to get the all-details user have to request on above route.

Note: In this API we use bcrypt.js for encrypting the password & JWT for generating token.
