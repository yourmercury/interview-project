const jwt = require("jsonwebtoken");

module.exports = {


  friendlyName: 'jwt token',


  description: '',


  inputs: {
    email: {
      type: "string",
      required: true
    }
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs) {
    let payload = {
      sub: inputs.email,
      iss: "Polycarp Momoh"
    }

    let secret = process.env.JWT_SECRET || sails.config.jwtSecret;

    let token = jwt.sign(payload, secret, { expiresIn: "1d" });

    return token;
  }


};

