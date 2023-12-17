const apiUrl = 'https://burgers-hub.p.rapidapi.com/burgers';

const fetchMenu = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b53678a251msh64e4aca459cf9b6p149262jsn6bb0b0a674f6',
      'X-RapidAPI-Host': 'burgers-hub.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(apiUrl, options);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};

export { fetchMenu };
