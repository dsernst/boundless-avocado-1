app.factory('User', function($http, $location) {


  return {

    // userLogout (Object)
    //--------------------
    // returns: null;
    //
    // WHAT IT DOES
    //
    // Receives a callback and sends a POST request to the
    // server. Once the server sends back a response, the
    // callback function is called.
    //
    userLogout: function(cb){
      dropbox.signOut(function() {
        cb();
      });
    },

    login: function(){
      dropbox.authenticate();
    },

    isAuth: function(){
      return dropbox.isAuthenticated();
    }

  };
});
