class CrudService {
  constructor(repository) {
    this.repository = repository;
  }

  async create(data) {
    try {
      const response = await this.repository.create(data);
      return response;
    } catch (error) {
      console.log("Something went wrong on the crud  service");
      throw error;
    }
  }

  async destroy(id) {
    try {
      const response = await this.repository.destroy(id);
      return response;
    } catch (error) {
      console.log("Something went,wrong on the crud  service");
      throw error;
    }
  }

  async get(id) {
    try {
      const response = await this.repository.gget(id);
      return response;
    } catch (error) {
      console.log("Something went wrong on the crud  service");
      throw error;
    }
  }

  async getAll(id, data) {
    try {
      const response = await this.repository.update(id, data);
      return response;
    } catch (error) {
      console.log("Something went wrong on the crud  service");
      throw error;
    }
  }

  async update() {
    try {
      const response = await this.repository.getAll();
      return response;
    } catch (error) {
      console.log("Something went wrong on the crud  service");
      throw error;
    }
  }
}

module.exports = CrudService;
