const getComments = async (id) => {
  try {
    const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
    const appID = 'os4g1sp0qRngry7c8HYv';
    const requestedURL = `${baseURL}/apps/${appID}/comments?item_id=${id}`;
    const response = await fetch(requestedURL, {
      method: 'GET',
    });
    const data = await response.json();
    return data;
  }
  catch(error) {
    return error;
  }
};

export { getComments} ;
