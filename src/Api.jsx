export const API_URL = 'https://dogsapi.origamid.dev/json';

export const TOKEN_POST = (body) => {
  return {
    url: `${API_URL}/jwt-auth/v1/token`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
};

export const TOKEN_VALIDATE_POST = (token) => {
  return {
    url: `${API_URL}/jwt-auth/v1/token/validate`,
    options: {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
};

export const USER_GET = (token) => {
  return {
    url: `${API_URL}/api/user`,
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
};

export const USER_POST = (body) => {
  return {
    url: `${API_URL}/api/user`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
};

export const PHOTO_POST = (formData, token) => {
  return {
    url: `${API_URL}/api/photo`,
    options: {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    },
  };
};

export const PHOTOS_GET = ({ page, total, user }) => {
  return {
    url: `${API_URL}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
};

export const PHOTO_GET = (id) => {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
};

export const INFO_PHOTO_GET = (id) => {
  return {
    url: `${API_URL}/api/photo/${id}`,
  };
};

export const PHOTO_DELETE = (id, token) => {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
};

export const COMMENT_POST = (id, body, token) => {
  return {
    url: `${API_URL}/api/comment/${id}`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    },
  };
};

export const LOST_PASSWORD = (body) => {
  return {
    url: `${API_URL}/api/password/lost`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
};

export const PASSWORD_RESET = (body) => {
  return {
    url: `${API_URL}/api/password/reset`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
};

export const STATS_GET = (token) => {
  return {
    url: `${API_URL}/api/stats`,
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
};
