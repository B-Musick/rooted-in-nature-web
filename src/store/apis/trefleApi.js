import axios from 'axios';

const trefleApi = async (searchTerm) => {
    console.log(import.meta.env.VITE_APP_JWT_TOKEN);
    const response = await axios.get(`${import.meta.env.VITE_APP_TREFLE_API_ENDPOINT}/plants/search`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_APP_JWT_TOKEN}`
        },
        params: {
            q: `${searchTerm}`
        }
    });

    const mappedValue = response.data.data.map((plant) => {
        return {
            ...plant,
            species: plant.scientific_name.split(' ')[1],
            commonName: plant.common_name,
            imageUrl: plant.image_url
        }
    });
    return mappedValue;
}

export default trefleApi;