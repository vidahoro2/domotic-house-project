//LINKS SECURITY
//This function is for know if the user is logged
module.exports = {
  isLoggedIn(req, res, next) {
    //isAutenticated() is a method from passport for know if an user is logged
    if (req.isAuthenticated()) {
      return next();
    } else {
      return console.log("The user is not logged");
    }
  },
  isNotLoggedIn(req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    } else {
      return console.log("The user is logged");
    }
  },
};
