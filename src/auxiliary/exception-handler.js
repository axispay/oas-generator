const handler = function(err, req, res, next) {
  console.error(
    process.env.npm_package_name +
      ' : ' +
      req.method +
      ' : ' +
      req.originalUrl +
      ' >>>> \n' +
      err.stack
  );

  res
    .status(500)
    .send({ status: 'error', statusCode: '500', statusMessage: err.message });
};

module.exports = handler;
