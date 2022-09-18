import axios, {AxiosResponse} from 'axios';
import {Hotel} from "../interfaces/Hotel";

const HOTELS_REST_API_URL = 'http://localhost:8080/hotel/';

export default class HotelApiCalls {
    static getHotels():Promise<AxiosResponse<any>> {
        return axios.get(HOTELS_REST_API_URL);
    }

    static addHotel(hotel: Hotel) {
        return axios.post(HOTELS_REST_API_URL+"create", hotel);
    }

}