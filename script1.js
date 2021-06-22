var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function()
{
    var data = JSON.parse(this.response);
    for( var  i  in data)
    {
        try{
            var name = data[i].name;
            var lang=data[i].latlng;
            if(lang.length ===0) throw new Error("Longitude and longitude is not found");
            weatherdata(name,...lang);
        }
        catch(e) //e is just exceptional variable
        {
        //output 
        console.log("Invalid cordinate  for the country " +name+" "+e.mesage);
        }
    
    }
    
}
var weatherdata =function(name,lat,lang)
{
//console.log(name + lat + lon);
var request = new XMLHttpRequest();
var url = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lang+'&appid=909401fedd926cc26e93697963294f70&units=metric';

request.open('GET',url,true);
request.send();
request.onload = function(){
    try{var res = JSON.parse(this.response);
        console.log(`${name} :${res.main.temp}`); //we are using
    }
    catch(e){
        console.log("Invalid cordinates for country"+name)
    }
     
}
}

