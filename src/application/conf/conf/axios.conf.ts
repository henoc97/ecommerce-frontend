import axios from 'axios';
import { ENDPOINT_BASE_URL } from './url';

axios.defaults.baseURL = ENDPOINT_BASE_URL;
axios.defaults.withCredentials = true; // Inclut automatiquement les cookies dans les requêtes



export const myAxios = axios;