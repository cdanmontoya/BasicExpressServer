const httpStatus = require('http-status');
const util = require('./hello');

const get = async (req, res) => {
  try {
    const ans = util.sayHello();

    if (!ans) {
      return res
        .status(httpStatus.NOT_FOUND)
        .send({ message: 'Not found' });
    }
    return res
      .status(httpStatus.OK)
      .send(ans);
  } catch (error) {
    console.error(error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: 'Interal server error' });
  }
};

module.exports = {
  get,
};
