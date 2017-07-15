'use strict';
module.exports = function(app) {
  var user_routes = require('../controllers/loginController');
 
  app.route('/login/isUserResgistered').get(user_routes.isUserResgistered);

  app.route('/login/checkUserNamePassword').get(user_routes.checkUserNamePassword);

   app.route('/login/registerUser').post(user_routes.registerUser);

};
