export const getLikes = async () => {
  try {
    const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
    const appID = 'os4g1sp0qRngry7c8HYv';
    const requestedURL = `${baseURL}/apps/${appID}/likes`;
    const response = await fetch(requestedURL, {
      method: 'GET',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const postLikes = async (id) => {
  try {
    const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
    const appID = 'os4g1sp0qRngry7c8HYv';
    const requestedURL = `${baseURL}/apps/${appID}/likes`;
    const response = await fetch(requestedURL, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response;
    return data.status;
  } catch (error) {
    return error;
  }
};
