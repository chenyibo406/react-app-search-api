import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 3Tsad7eygjkhYFjKK4zROD_ZTRfropd73PDblNxygcI",
    },
    params: {
      query: term,
    },
  });
  // console.log(response);
  return response.data.results;
};

export default searchImages;
