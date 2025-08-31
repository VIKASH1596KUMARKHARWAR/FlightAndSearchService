const { FlightService } = require("../services/index");
const flightService = new FlightService();

const { SuccessCodes } = require("../utils/error-code");

const create = async (req, res) => {
  try {
    // const { departureTime, arrivalTime } = req.body;

    // Validate departure and arrival times
    // if (new Date(departureTime) >= new Date(arrivalTime)) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Not able to create the flight",
    //     error: "Arrival time cannot be less than departure time",
    //   });
    // }

    let flightRequestDate = {
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
    };

    const flight = await flightService.createFlight(flightRequestDate);
    return res.status(SuccessCodes.CREATED).json({
      success: true,
      message: "Successfully created a flight",
      data: flight,
    });
  } catch (error) {
    console.error("Error creating flight:", error);

    // Make sure error is a string for Postman
    const errorMessage =
      error.message || error.error || "Internal server error";

    return res.status(500).json({
      success: false,
      message: "Not able to create the flight",
      error: errorMessage,
    });
  }
};

const get = async (req, res) => {
  try {
    const response = await flightService.getFlightByid(req.params.id);
    return res.status(SuccessCodes.OK).json({
      data: response,
      success: true,
      message: "Successfully fetched a flight",
      err: {},
    });
  } catch (error) {
    console.error("Error fetching flight:", error);

    return res.status(error.statusCode || 500).json({
      data: {},
      success: false,
      message: "Not able to get the flight",
      err: {
        message: error.message || "Internal Server Error",
      },
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await flightService.getAllFlightData(req.query);
    return res.status(SuccessCodes.OK).json({
      data: response,
      success: true,
      message: "Successfully fetched the flights",
      err: {},
    });
  } catch (error) {
    console.error("Error fetching flights:", error);

    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get the flights",
      err: error.message || error,
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await flightService.updateFlight(req.params.id, req.body);
    return res.status(SuccessCodes.OK).json({
      data: response,
      success: true,
      message: "Successfully updated the flight",
      err: {},
    });
  } catch (error) {
    console.error("Error updating flight:", error);

    return res.status(error.statusCode || 500).json({
      data: {},
      success: false,
      message: "Not able to update the flight",
      err: {
        message: error.message || "Internal Server Error",
      },
    });
  }
};
module.exports = { create, get, getAll, update };
