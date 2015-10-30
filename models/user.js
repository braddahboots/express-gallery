module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('users', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
    // type : DataTypes.CHAR(30),
    // required : true
  }, {
    instanceMethods : {
      validPassword: function(password) {
        return (this.password === password);
      }
    }
  }, {
    freezeTableName: true
  });
// User.sync({force: true})
//   .then(function(){
//     return User.create({
//       username: 'Boots',
//       password: 'hello'
//     });
  // });
  return User;

  //   findOne : function (opts, cb) {
  //     var user = {
  //       id : 1,
  //       username: opts.username,
  //       password: 'hello',
  //       //look up instance method for validPassword - maybe also look up dynamic field
  //       validPassword: function(password) {
  //         return (password === 'hello');
  //       }
  //     };
  //     cb(null, user);
  //   }
  // };

};