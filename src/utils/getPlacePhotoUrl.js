const getPlacePhotoUrl = (photoReference) => {
    const maxWidth = 400;
    const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxWidth}&photoreference=${photoReference}&key=${import.meta.env.VITE_GOOGLEMAP_API_KEY}`;

    return url;
};

export default getPlacePhotoUrl;
