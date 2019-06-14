import axios from 'axios';

const urlBaseMarvel = 'https://gateway.marvel.com:443/v1/public/';
const apiKey = '7edb1622ef4343dd804c55d510932e87';

export default {
    getAllComics: (limit, callback) => {
        const urlComics = urlBaseMarvel + 'characters?apikey=' + apiKey + '&limit=' + limit;
        axios.get(urlComics).then((comics) => {
            if (callback) {
                callback(comics);
            }
        })
    },

    getById: (limit, callback, id) => {
        const urlComics = urlBaseMarvel + 'characters/' + id + '?apikey=' + apiKey + '&limit=' + limit;
        axios.get(urlComics).then((comics) => {
            if (callback) {
                callback(comics);
            }
        })
    }
}