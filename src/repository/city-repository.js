const { where } = require("sequelize");
const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      //update take the first parameter as an of object --> data here, key values pair of type>>> "name" : "the_correct_name" to update and second parameter is also a parameter of obj type taking the where clause.
      // const city = await City.update(data, {
      //   where: {
      //     id: cityId,
      //   },
      // });
      //the above will return the updated array with no. of affected row..but to also return  the updated data in json do..
      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      console.log(city);
      return city;

      //let's make the logs..of update function stages...
      // const city = await City.findByPk(cityId);
      // console.log("Before update:", city.dataValues);
      // city.name = data.name;
      // console.log("Old value:", city._previousDataValues.name);
      // console.log("New value (pending):", city.dataValues.name);
      // await city.save();
      // console.log("After save:", city.dataValues);
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }
  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async getAllCities() {
    try {
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }
}

module.exports = CityRepository;
