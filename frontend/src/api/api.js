import axios from 'axios';

let accessToken = localStorage.getItem('access');

const api = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    Authorization: accessToken ? `Bearer ${accessToken}` : '',
  },
});

// request interceptor -- add authorization header
api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('access');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// response interceptor -- check for 401 expired token
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      localStorage.getItem('refresh')
    ) {
      originalRequest._retry = true;

      try {
        const res = await axios.post('http://localhost:8000/api/accounts/token/refresh', {
          refresh: localStorage.getItem('refresh'),
        });

        const { access, refresh } = res.data;
        localStorage.setItem('access', access);
        if (refresh) {
          localStorage.setItem('refresh', refresh)
        }

        api.defaults.headers.Authorization = `Bearer ${access}`;
        originalRequest.headers.Authorization = `Bearer ${access}`;

        return api(originalRequest);
      } catch (err) {
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        window.location.href = '/';
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default api;