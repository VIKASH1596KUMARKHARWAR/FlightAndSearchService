const { CityService } = require("../services/index");

const cityService = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);

    return res.status(201).json({
      data: city,
      succes: true,
      message: "Successfully created a city",
      err: {},
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      data: {},
      succes: false,
      message: "Not able to create a city",
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);

    return res.status(200).json({
      data: response,
      succes: true,
      message: "Successfully deleted a city",
      err: {},
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      data: {},
      succes: false,
      message: "Not able to delete  the  city",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const response = await cityService.getCity(req.params.id);

    return res.status(200).json({
      data: response,
      succes: true,
      message: "Successfully fetched a city",
      err: {},
    });
  } catch (error) {
    console.log(error);

    return res.status(200).json({
      data: response,
      succes: true,
      message: "Not able to get the city",
      err: {},
    });
  }
};

//Patch -> city/:id and parameter with wich you are going to update -> inside the req.body
const update = async (req, res) => {
  try {
    const response = await cityService.updateCity(req.params.id, req.body);

    return res.status(200).json({
      data: response,
      succes: true,
      message: "Successfully updated the city",
      err: {},
    });
  } catch (error) {
    console.log(error);

    return res.status(200).json({
      data: response,
      succes: true,
      message: "Not able to update the city",
      err: {},
    });
  }
};

const getAll = async (req, res) => {
  try {
    const cities = await cityService.getAllCities(req.query);

    return res.status(200).json({
      data: cities,
      succes: true,
      message: "Successfully updated the city",
      err: {},
    });
  } catch (error) {
    console.log(error);

    return res.status(200).json({
      data: response,
      succes: true,
      message: "Not able to get all the cities",
      err: {},
    });
  }
};

module.exports = {
  create,
  destroy,
  get,
  update,
  getAll,
};
