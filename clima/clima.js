const axios =require('axios');


const getClima = async(lat,lng) => {
    
    let latitud= encodeURI( lat);
    let longitud= encodeURI( lng);
    let apiKey = encodeURI("6e5d1081d6d92adc97575871fbf881d6");
    
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&units=metric&appid=${apiKey}`);
    
    return resp.data.main.temp;
    
}

module.exports = {
    getClima
}



