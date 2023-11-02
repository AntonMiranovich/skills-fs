function bildResponse(res, code, message) {
  res.status(code).send(message);
}

module.exports = { bildResponse };
