const User = require("../models/User");
const jwt = require('jsonwebtoken')

module.exports = {


  friendlyName: 'Login',


  description: 'Login something.',


  inputs: {
    email: {
      type: "string",
      required: true,
      isEmail: true,
    },

    password: {
      type: "string",
      required: true,
      minLength: 6
    }
  },


  exits: {

  },


  fn: async function (inputs) {

    let user = await User.login(inputs);


    console.log(this.res.cookie);

    if (!user.status) {
      return user
    }

    
      let expiresIn = 60 * 60 * 24 * 10

    this.res.cookie(process.env.LOGIN_COOKIE || 'jwt', user.token, { maxAge: expiresIn * 1000, httpOnly: true });

    return user.user;

  }


};
