const axios =require('axios');

const getLugarLatLng = async(direccion) => {
    
    
    let encodeURL= encodeURI( direccion);

   let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeURL }&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`);
       
   
    if(resp.data.status=== 'ZERO_RESULTS'){
        throw new Error(`No hay resultados para la direccion ${ direccion }`);
    }
    
    let location = resp.data.results[0];
    let coors = location.geometry.location;
   
    
    return{
        direccion: location.formatted_address,
        lag: coors.lat,
        lng: coors.lng
    }
    
}

module.exports = {
    getLugarLatLng
}

