// ! This library is just for decoding the JWT Token
// ! The server needs to verify the token when decoding, so that it can be sure that the jwt was signed by us only!
const jwt_decode = require("jwt-decode");

// ! For server side we use some library like this which enables us to verify the authenticity by a secret or private key
const jwt = require('jsonwebtoken');
const fs = require('fs');

let secret = fs.readFileSync('./config/rsa_pub_key').toString();

async function StageAuth(request, response, next) {
  try {
    request.context = {
      customer_id: -1
    };
    const jwtToken = request.headers['authorization'].slice(7);
    
    if (jwtToken) {
      let decoded = await jwt.verify(jwtToken, secret, { algorithms: "RS512" });
      console.log(decoded);
      // var decoded = jwt_decode(jwtToken);
      request.context = { phone: decoded.phone, admin: decoded.admin, user_type: decoded.user_type };
    } else {
      response.send({
        code: 401,
        msg: "Please Provide Token",
        data: null
      });
      return;
    }
  } catch (error) {
    console.log(error);
  }
  next();
}

module.exports = {
  StageAuth
}
