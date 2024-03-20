interface RequestOptions {
  headers?: Record<string, string>;
  body?: any;
}

class HttpClientSoftruck {
  baseURL;
  static get: any;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async get(path: string, options: RequestOptions) {
    const method = 'GET';

    return this.makeRequest(path, options, method);
  }

  async makeRequest(
    path: string,
    options: RequestOptions,
    method: string,
  ): Promise<any> {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    const response = await fetch(`${this.baseURL}${path}`, {
      method,
      headers,
    });

    return response.json();
  }
}

export default HttpClientSoftruck;
