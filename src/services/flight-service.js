const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper");

class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }

  async createFlight(data) {
    try {
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        throw { error: "Arrival time cannot be less than departure time" };
      }

      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }

  async getFlightByid(flightId) {
    try {
      const flight = await this.flightRepository.getFlight(flightId);
      if (!flight) {
        const error = new Error("Flight does not exist");
        error.statusCode = 404;
        throw error;
      }
      return flight;
    } catch (error) {
      console.error(
        "Something went wrong in the service layer:",
        error.message
      );
      throw error;
    }
  }

  async getAllFlightData(data) {
    try {
      const flight = await this.flightRepository.getAllFlights(data);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }
  async updateFlight(flightId, data) {
    try {
      const updatedFlight = await this.flightRepository.updateFlight(
        flightId,
        data
      );
      return updatedFlight;
    } catch (error) {
      console.log("Something went wrong in the service layer", error.message);
      throw error; // propagate the real error
    }
  }
}
module.exports = FlightService;

/*
flightNumber
airplaneId: 
departureAirportId
arrivalAirportId
arrivalTime
departureTime
price,
boardingGate
totalSeats -> airplane
*/
