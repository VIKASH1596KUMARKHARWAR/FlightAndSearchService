const AirportService = require("../services/airport-service");

const airportService = new AirportService();

const create = async (req, res) => {
  try {
    const response = await airportService.create(req.query);
    return res.status(201).json({
      message: "Successfully created the airport",
      err: {},
      data: response,
      succcess: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      succcess: false,
      err: error,
      message: "Cannot create a new airport",
    });
  }
};

module.exports = { create };
