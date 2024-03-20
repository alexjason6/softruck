import HttpClient from './utils/HttpClient';

class SoftruckService {
  httpClient = HttpClient;

  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async getInfos() {
    const response = await this.httpClient.get('/api/infos_vehicle');

    return response;
  }

  async getPosition() {
    const response = await this.httpClient.get('/api/last_position');

    return response;
  }

  async getCourses() {
    const response = await this.httpClient.get('/api/courses');

    return response;
  }
}

export default new SoftruckService();
