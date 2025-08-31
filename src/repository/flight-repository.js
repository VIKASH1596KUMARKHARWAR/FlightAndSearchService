const { Flights, Sequelize } = require("../models");
const { Op } = Sequelize;

class FlightRepository {
  #createFilter(data) {
    let filter = {};
    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }
    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }
    if (data.minPrice || data.maxPrice) {
      filter.price = {};
      if (data.minPrice) {
        filter.price[Op.gte] = data.minPrice;
      }
      if (data.maxPrice) {
        filter.price[Op.lte] = data.maxPrice;
      }
    }
    return filter;
  }

  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async getFlight(flightId) {
    try {
      const flight = await Flights.findByPk(flightId);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw error;
    }
  }

  async getAllFlights(filter) {
    try {
      const filterObject = await this.#createFilter(filter);

      const flight = await Flights.findAll({
        where: filterObject,
      });
      return flight;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async updateFlight(flightId, data) {
    try {
      console.log("Updating flightId:", flightId, "with data:", data);

      const [updatedCount] = await Flights.update(data, {
        where: { id: flightId },
      });

      if (updatedCount === 0) {
        throw new Error("Flight not found or no changes applied");
      }

      // Fetch the updated flight
      const updatedFlight = await Flights.findByPk(flightId);
      return updatedFlight;
    } catch (error) {
      console.log(
        "Something went wrong in the repository layer",
        error.message
      );
      throw error; // don't wrap unnecessarily
    }
  }
}

module.exports = FlightRepository;
