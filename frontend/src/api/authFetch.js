export async function authFetch(endpoint, options = {}) {
  const access = localStorage.getItem('access');
  const refresh = localStorage.getItem('refresh');
  const URL = 'http://localhost:8000'

  options.headers = {
    ...options.headers,
    Authorization: `Bearer ${access}`,
    'Content-Type': 'application/json',
  };

  let response = await fetch(endpoint, options);

  if (response.status === 401 && refresh) {
    const refreshRes = await fetch(`${URL}/api/token/refresh`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh }),
    });

    if (refreshRes.ok) {
      const { access: newAccess } = await refreshRes.json();
      localStorage.setItem('access', newAccess);

      options.headers.Authorization = `Bearer ${newAccess}`;
      response = await fetch(`${URL}/${endpoint}`, options);
    } else {
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      throw new Error('Session expired. Please log in again.');
    }
  }

  return response;
}