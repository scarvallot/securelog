exports.index = (req, res) => {
  res.json({
    success: true,
    message: "SecureLog API is running ",
    timestamp: new Date(),
  });
};
