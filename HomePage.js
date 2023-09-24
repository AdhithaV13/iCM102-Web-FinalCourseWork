defaultValues();

async function btnSearchClicked(){
    //------------------------Current Weather----------------------------------
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
    //-------------------------------------------------------------------------
}

async function txtDateEntered(){
    //---------------------Historical Weather--------------------
    const apiKey1 = "44c917daebe44e7dbf3153750231409";
    const urlCurrent1 = "http://api.weatherapi.com/v1/history.json?key=";
    let city1 = document.getElementById("txtSearch").value;
    let date = document.getElementById("txtDate").value;

    const response1=await fetch(urlCurrent1+`${apiKey1}&q=`+city1+`&dt=`+date);
    var data1=await response1.json();

    console.log(data1);

    document.getElementById("valuesOfTemperature2").innerHTML = data1.forecast.forecastday[0].day.avgtemp_c+" °C"+"<br>"+data1.forecast.forecastday[0].day.avgtemp_f+" °F"+"<br>"+Math.round(276.15+(data1.forecast.forecastday[0].day.avgtemp_c))+" K";
    document.getElementById("valuesOfHumidity2").innerHTML = data1.forecast.forecastday[0].day.avghumidity+"%";
    document.getElementById("valuesOfPrecipition2").innerHTML = data1.forecast.forecastday[0].day.totalprecip_mm+" mm"+"<br>"+data1.forecast.forecastday[0].day.totalprecip_in+" inch";
    document.getElementById("valuesOfWindSpeed2").innerHTML = data1.forecast.forecastday[0].day.maxwind_kph+" kph"+"<br>"+data1.forecast.forecastday[0].day.maxwind_mph+" mph"
    document.getElementById("conditionIcon2").src = data1.forecast.forecastday[0].day.condition.icon;
    document.getElementById("conditionText2").innerHTML = data1.forecast.forecastday[0].day.condition.text;
    //------------------------------------------------------------
}

async function defaultValues(){
    //--------------------Current Weather----------------------
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
    //-----------------------------------------------------------

    //---------------------Historical Weather--------------------
    const apiKey1 = "44c917daebe44e7dbf3153750231409";
    const urlCurrent1 = "http://api.weatherapi.com/v1/history.json?key=";
    let city1 = "Colombo";
    let date = "2023-09-20";

    const response1=await fetch(urlCurrent1+`${apiKey1}&q=`+city1+`&dt=`+date);
    var data1=await response1.json();

    console.log(data1);

    document.getElementById("valuesOfTemperature2").innerHTML = data1.forecast.forecastday[0].day.avgtemp_c+" °C"+"<br>"+data1.forecast.forecastday[0].day.avgtemp_f+" °F"+"<br>"+Math.round(276.15+(data1.forecast.forecastday[0].day.avgtemp_c))+" K";
    document.getElementById("valuesOfHumidity2").innerHTML = data1.forecast.forecastday[0].day.avghumidity+"%";
    document.getElementById("valuesOfPrecipition2").innerHTML = data1.forecast.forecastday[0].day.totalprecip_mm+" mm"+"<br>"+data1.forecast.forecastday[0].day.totalprecip_in+" inch";
    document.getElementById("valuesOfWindSpeed2").innerHTML = data1.forecast.forecastday[0].day.maxwind_kph+" kph"+"<br>"+data1.forecast.forecastday[0].day.maxwind_mph+" mph"
    document.getElementById("conditionIcon2").src = data1.forecast.forecastday[0].day.condition.icon;
    document.getElementById("conditionText2").innerHTML = data1.forecast.forecastday[0].day.condition.text;
    //------------------------------------------------------------
}