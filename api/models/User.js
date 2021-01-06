/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: "users",

  attributes: {
    id: {
      type: "number",
      autoIncrement: true,
      columnName: "id"
    },

    fullName: {
      type: "string",
      required: true,
      columnName: "full_name",
    },

    email: {
      type: "string",
      required: true,
      columnName: "email",
      unique: true,
      isEmail: true,
    }, 

    password: {
      type: "string",
      required: true,
      columnName: "password",
    }
  },

  customToJSON: function () {
    // Return a shallow copy of this record with the password and ssn removed.
    return _.omit(this, ['password']);
  },


  hashPassword: async function (password) {
    // Hash password
    let hashedPassword = await sails.helpers.passwords.hashPassword(
      password
    );
    return hashedPassword;
  },


  login: async function (obj, exits) {
    //checking if email exists
    let email = obj.email.toLowerCase();

    let user = await User.findOne({ email: email });

    console.log(user);

    //if no user is found
    if (!user) {
      return { msg: "No user found", status: false };
    }

    //if user is found
    let res = await sails.helpers.passwords
      .checkPassword(obj.password, user.password)
      .intercept('incorrect', (error) => {
        exits.passwordMismatch({ error: error.message });
      });
    
    let token = await sails.helpers.generateNewJwtToken(user.email);
  
    return {user, status: true, token};
  },

  getEmail: async function (email) {
    return await User.findOne({ email: email });
  }

};

