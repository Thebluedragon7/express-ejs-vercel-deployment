module.exports = {
  get: async (req, res) => {
    res.status(200).json({
      status: "success",
      message: "Peek-a-boo!",
    });
  },
  getById: async (req, res) => {
    const id = req.params.id;
    res.status(200).json({
      status: "success",
      message: `You have me on '/${id}'`,
    });
  },
};
