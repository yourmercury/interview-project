module.exports = {


  friendlyName: 'Signup',


  description: 'Signup something.',


  inputs: {

    fullName: {
      type: "string",
      required: true,
    },

    email: {
      type: "string",
      required: true,
      unique: true,
      isEmail: true,
    },

    password: {
      type: "string",
      required: true,
      minLength: 6
    }

  },


  exits: {
    success: {
      statusCode: 201,
      description: 'New user created',
    },
    emailAlreadyInUse: {
      statusCode: 400,
      description: 'A User already exits with this Email',
    },
    error: {
      description: 'Something went wrong',
    },
  },


  fn: async function (inputs) {

    try {

      let email = inputs.email.toLowerCase();

      let user = await User.findOne({ email: email });

      //if user already exists
      if (user) {
        return { msg: "User already exists with this email", status: false };
      }
      
      //check for pasword length
      if (inputs.password.length < 6) {
        return { msg: "password is less than 6 characters", status: false };
      }
      //hash password
      let password = await User.hashPassword(inputs.password);

      user = await User.create({
        fullName: inputs.fullName,
        email: email,
        password: password,
      }).fetch();
      
      return user;

    } catch (err) {
      return err;
    }    

  }


};
