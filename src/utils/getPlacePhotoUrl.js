// utils/getPlacePhotoUrl.js
const getPlacePhotoUrl = (photoReference) => {
    // The maximum width of the photo you want to request
    const maxWidth = 400;
    // Construct the photo URL using Google Places API endpoint
    const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxWidth}&photoreference=${photoReference}&key=${import.meta.env.VITE_GOOGLEMAP_API_KEY}`;

    return url;
};

export default getPlacePhotoUrl;
