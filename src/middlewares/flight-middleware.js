const { ClientErrorCodes } = require("../utils/error-code");

const validateCreateFlight = (req, res, next) => {
  if (
    !req.body.flightNumber ||
    !req.body.airplaneId ||
    !req.body.departureAirportId ||
    !req.body.arrivalAirportId ||
    !req.body.arrivalTime ||
    !req.body.departureTime ||
    !req.body.price
  ) {
    //if any of the body params is missing

    return res.status(ClientErrorCodes.BAD_REQUEST).json({
      data: {},
      succcess: false,
      message: "Invalid request body for the creating flight",
      err: "Missing Mandatory properties to create flight",
    });
  }

  next(); //everything is fine just call the next() -> a middleware
};

const validateUpdateFlight = (req, res, next) => {
  const { flightNumber, airplaneId } = req.body;

  if (flightNumber !== undefined || airplaneId !== undefined) {
    return res.status(400).json({
      data: {},
      success: false,
      message: "You are not allowed to update flightNumber or airplaneId",
      err: {
        blockedFields: {
          flightNumber: "Cannot be updated",
          airplaneId: "Cannot be updated",
        },
      },
    });
  }

  next();
};

module.exports = {
  validateCreateFlight,
  validateUpdateFlight,
};
/*
flightNumber
airplaneId: 
departureAirportId
arrivalAirportId
arrivalTime
departureTime
price,
boardingGate
totalSeats -> airplane //not mandatory, we can caulate from the airplane 
*/
