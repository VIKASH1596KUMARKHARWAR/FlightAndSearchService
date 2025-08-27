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

    return res.status(400).json({
      data: {},
      succcess: false,
      message: "Invalid request body for the creating flight",
      err: "Missing Mandatory properties to create flight",
    });
  }

  next(); //everything is fine just call the nest() -> a middleware
};

module.exports = {
  validateCreateFlight,
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
