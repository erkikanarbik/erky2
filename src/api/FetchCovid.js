import axios from 'axios';
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://opendata.digilugu.ee/opendata_covid19_tests_total.json"; // site that doesn’t send Access-Control-*


const FetchCovid = async () =>  {

   /* const result = await fetch(proxyurl + url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    console.log(result.json())
    return result; */
    const result = await axios.get(proxyurl + url);
    return result;


};
export default FetchCovid;
