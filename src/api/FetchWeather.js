import axios from 'axios';


const FetchWeather = async () =>  {
            const result = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=tallinn&appid=f33a484cf794d08d0148764789aaba32',
                {
                    params: {
                        units: 'metric',
                    }
                });
        return result;
    };
export default FetchWeather;