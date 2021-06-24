const soma = (req, res) => {
  res.status(200).json({
    message: "chamou a soma"
  });
};

module.exports = soma;
