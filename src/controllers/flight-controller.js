const { query } = require("express");
const { FlightService } = require("../services/index");
const flightService = new FlightService();

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

    const flight = await flightService.createFlight(req.body);
    return res.status(201).json({
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

const getFlightByid = async (req, res) => {
  try {
    const response = await flightService.getFlightByid(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully fetched a flight",
      err: {},
    });
  } catch (error) {
    console.error("Error fetching flight:", error);

    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get the flight",
      err: error.message || error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await flightService.getAllFlightData(req.query);
    return res.status(200).json({
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

module.exports = { create, getFlightByid, getAll };
