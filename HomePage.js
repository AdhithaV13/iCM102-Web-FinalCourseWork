defaultValues();

async function btnSearchClicked(){
    const apiKey = "44c917daebe44e7dbf3153750231409";
    const urlCurrent = "http://api.weatherapi.com/v1/current.json?key=";
    let city = document.getElementById('txtSearch').value;
        
    const response=await fetch(urlCurrent+`${apiKey}&q=`+city);
    var data=await response.json();

    console.log(data);

    document.getElementById("valuesOfTemperature1").innerHTML = data.current.temp_c+" °C"+"<br>"+data.current.temp_f+" °F"+"<br>"+Math.round(data.current.temp_c+273.15)+" K";
    document.getElementById("valuesOfHumidity1").innerHTML = data.current.humidity+"%";
    document.getElementById("valuesOfPrecipition1").innerHTML = data.current.precip_mm+" mm"+"<br>"+data.current.precip_in+" inch";
    document.getElementById("valuesOfWindSpeed1").innerHTML = data.current.wind_kph+" kph"+"<br>"+data.current.wind_mph+" mph";
    document.getElementById("conditionIcon1").src = data.current.condition.icon;
    document.getElementById("conditionText1").innerHTML = data.current.condition.text;
}

async function defaultValues(){
    const apiKey = "44c917daebe44e7dbf3153750231409";
    const urlCurrent = "http://api.weatherapi.com/v1/current.json?key=";
    let city = "Colombo";
        
    const response=await fetch(urlCurrent+`${apiKey}&q=`+city);
    var data=await response.json();

    document.getElementById("valuesOfTemperature1").innerHTML = data.current.temp_c+" °C"+"<br>"+data.current.temp_f+" °F"+"<br>"+Math.round(data.current.temp_c+273.15)+" K";
    document.getElementById("valuesOfHumidity1").innerHTML = data.current.humidity+"%";
    document.getElementById("valuesOfPrecipition1").innerHTML = data.current.precip_mm+" mm"+"<br>"+data.current.precip_in+" inch";
    document.getElementById("valuesOfWindSpeed1").innerHTML = data.current.wind_kph+" kph"+"<br>"+data.current.wind_mph+" mph";
    document.getElementById("conditionIcon1").src = data.current.condition.icon;
    document.getElementById("conditionText1").innerHTML = data.current.condition.text;
}