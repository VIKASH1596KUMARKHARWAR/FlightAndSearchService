// airplane-repository.js
const { Airplane } = require("../models");

class AirplaneRepository {
  async getAirplane(id) {
    try {
      const airplane = await Airplane.findByPk(id);
      return airplane;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw error;
    }
  }
}

module.exports = AirplaneRepository;
