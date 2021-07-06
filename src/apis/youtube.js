import axios from 'axios';

const KEY = 'AIzaSyBA9coMtDZzoRZgyJ_xfCdD3q_c5LELh64';


//Crear instancia preconfigurada
export default  axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults:5,
        key: KEY
    }
});