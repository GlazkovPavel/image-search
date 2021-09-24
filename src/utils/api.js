class Api {
  constructor({ baseUrl, apiKey }) {
    this._baseUrl = baseUrl;
    this._apiKey = apiKey;
  }

  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  search(query, page, per_page = 12) {
    return fetch(`${this._baseUrl}/search/photos?query=${query}&page=${page}&per_page=${per_page}&order_by='popular'`, {
      headers: {
        Authorization: `Client-ID ${this._apiKey}`,
      },
    }).then(this._getResponse);
  }

  getRandom(count=12) {
    return fetch(`${this._baseUrl}/photos/random?&count=${count}`, {
      headers: {
        Authorization: `Client-ID ${this._apiKey}`,
      },
    }).then(this._getResponse);
  }

  getPhotoId(id){
    return fetch(`${this._baseUrl}/photos/${id}`, {
      headers: {
        Authorization: `Client-ID ${this._apiKey}`,
      }
    }).then(this._getResponse);
  }

}

const api = new Api({
  baseUrl: "https://api.unsplash.com/",
  apiKey: "P2hzfuCuOqvhuqX4A9npRfIU6HLhQKOPLO87eBJKhmI",
});

export default api;