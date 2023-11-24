export const options = {
  method: 'GET',
  url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
  params: {
    bl_lat: '32.93533',
    bl_lng: '-121.989979',
    tr_lat: '48.326941',
    tr_lng: '-65.834963',
    limit: '300'
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
    'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
  }
};
export const detailOptions = {
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
    'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
  }
};