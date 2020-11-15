import axios from 'axios';

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://api.openweathermap.org/data/2.5/weather?q=tallinn&appid=f33a484cf794d08d0148764789aaba32"; // site that doesn’t send Access-Control-*

const FetchWeather = async () =>  {
            const result = await axios.get(proxyurl + url,
                {
                    params: {
                        units: 'metric',
                    }
                });
        return result;
    };
export default FetchWeather;