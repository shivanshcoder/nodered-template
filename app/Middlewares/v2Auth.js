const { jwtAuthVerifyV2 } = require('../Helper/Common');

async function v2Auth(request, response, next) {
  try {
    request.context = {
      customer_id: -1
    };
    const jwtToken = request.headers['x-refresh-token'] || request.headers['x-access-token'];
    
    if (jwtToken) {
      const responseBody = await jwtAuthVerifyV2(jwtToken);
      const jsonResponse = JSON.parse(responseBody);
      request.context = jsonResponse.message.data;
    }else{
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

module.exports={
  v2Auth
}
