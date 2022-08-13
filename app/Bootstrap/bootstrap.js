const Mongo = require('../Initializers/Mongo')

intializeServices = () => {
  const promiseStack = [];

  const mongoPromise = new Promise((resolve, reject) => {
    try {
      // Mongo.connectToServer(() => {
      //   resolve();
      // })
    } catch (error) {
      reject(new Error('Unable to create connection with mongo, please make sure mongo server is running.'));
    }
  });

  // promiseStack.push(mongoPromise);

  return promiseStack;

}

module.exports = {
  intializeServices
}