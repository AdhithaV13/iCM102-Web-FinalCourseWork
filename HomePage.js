defaultValues();

async function btnSearchClicked(){
    //------------------------Current Weather----------------------------------
    const apiKey = "44c917daebe44e7dbf3153750231409";
    const urlCurrent = "https://api.weatherapi.com/v1/current.json?key=";
    let city = document.getElementById('txtSearch').value;
        
    const response=await fetch(urlCurrent+`${apiKey}&q=`+city);
    var data=await response.json();

    document.getElementById("valuesOfTemperature1").innerHTML = data.current.temp_c+" °C"+"<br>"+data.current.temp_f+" °F"+"<br>"+Math.round(data.current.temp_c+273.15)+" K";
    document.getElementById("valuesOfHumidity1").innerHTML = data.current.humidity+"%";
    document.getElementById("valuesOfPrecipition1").innerHTML = data.current.precip_mm+" mm"+"<br>"+data.current.precip_in+" inch";
    document.getElementById("valuesOfWindSpeed1").innerHTML = data.current.wind_kph+" kph"+"<br>"+data.current.wind_mph+" mph";
    document.getElementById("conditionIcon1").src = data.current.condition.icon;
    document.getElementById("conditionText1").innerHTML = data.current.condition.text;
    //-------------------------------------------------------------------------
}

async function txtDateEntered1(){
    //-------------------Historical Weather------------------------
    const apiKey2 = "44c917daebe44e7dbf3153750231409";
    const urlHistorical = "https://api.weatherapi.com/v1/history.json?key=";
    let city2 = document.getElementById("txtSearch").value;
    let date1 = document.getElementById("txtDate1").value;

    const response2=await fetch(urlHistorical+`${apiKey2}&q=`+city2+`&dt=`+date1);
    var data2=await response2.json();

    document.getElementById("valuesOfTemperature3").innerHTML = data2.forecast.forecastday[0].day.avgtemp_c+" °C"+"<br>"+data2.forecast.forecastday[0].day.avgtemp_f+" °F"+"<br>"+Math.round(data2.forecast.forecastday[0].day.avgtemp_c+273.15)+" K";
    document.getElementById("valuesOfHumidity3").innerHTML = data2.forecast.forecastday[0].day.avghumidity+"%";
    document.getElementById("valuesOfPrecipition3").innerHTML = data2.forecast.forecastday[0].day.totalprecip_mm+" mm"+"<br>"+data2.forecast.forecastday[0].day.totalprecip_in+" inch";
    document.getElementById("valuesOfWindSpeed3").innerHTML = data2.forecast.forecastday[0].day.maxwind_mph+" mph"+"<br>"+data2.forecast.forecastday[0].day.maxwind_kph+" kph";
    document.getElementById("conditionIcon3").src = data2.forecast.forecastday[0].day.condition.icon;
    document.getElementById("conditionText3").innerHTML = data2.forecast.forecastday[0].day.condition.text;
    //---------------------------------------------------------------------
}

async function txtDateEntered(){
    //-------------------Future Weather------------------------
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    
    today = yyyy+"-"+mm+"-"+dd;

    let today2 = new Date(today);

    const apiKey1 = "44c917daebe44e7dbf3153750231409";
    const urlFuture = "https://api.weatherapi.com/v1/forecast.json?key=";
    let city1 = document.getElementById("txtSearch").value;
    let date = new Date(document.getElementById("txtDate").value);

    let diff = date.getTime() - today2.getTime();
    let msInDay = 1000*3600*24;

    let days = diff/msInDay;

    const response1=await fetch(urlFuture+`${apiKey1}&q=`+city1+`&dt=`+days);
    var data1=await response1.json();

    document.getElementById("valuesOfTemperature2").innerHTML = data1.forecast.forecastday[0].day.avgtemp_c+" °C"+"<br>"+data1.forecast.forecastday[0].day.avgtemp_f+" °F"+"<br>"+Math.round(data1.forecast.forecastday[0].day.avgtemp_c+273.15)+" K";
    document.getElementById("valuesOfHumidity2").innerHTML = data1.forecast.forecastday[0].day.avghumidity+"%";
    document.getElementById("valuesOfPrecipition2").innerHTML = data1.forecast.forecastday[0].day.totalprecip_mm+" mm"+"<br>"+data1.forecast.forecastday[0].day.totalprecip_in+" inch";
    document.getElementById("valuesOfWindSpeed2").innerHTML = data1.forecast.forecastday[0].day.maxwind_mph+" mph"+"<br>"+data1.forecast.forecastday[0].day.maxwind_kph+" kph";
    document.getElementById("conditionIcon2").src = data1.forecast.forecastday[0].day.condition.icon;
    document.getElementById("conditionText2").innerHTML = data1.forecast.forecastday[0].day.condition.text;
    //-----------------------------------------------------------
}

async function defaultValues(){
    //--------------------Current Weather----------------------
    const apiKey = "44c917daebe44e7dbf3153750231409";
    const urlCurrent = "https://api.weatherapi.com/v1/current.json?key=";
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

    //-------------------Future Weather------------------------
    const apiKey1 = "44c917daebe44e7dbf3153750231409";
    const urlFuture = "https://api.weatherapi.com/v1/forecast.json?key=";
    let city1 = "Colombo";
    let days = "1";

    const response1=await fetch(urlFuture+`${apiKey1}&q=`+city1+`&dt=`+days);
    var data1=await response1.json();

    document.getElementById("valuesOfTemperature2").innerHTML = data1.forecast.forecastday[0].day.avgtemp_c+" °C"+"<br>"+data1.forecast.forecastday[0].day.avgtemp_f+" °F"+"<br>"+Math.round(data1.forecast.forecastday[0].day.avgtemp_c+273.15)+" K";
    document.getElementById("valuesOfHumidity2").innerHTML = data1.forecast.forecastday[0].day.avghumidity+"%";
    document.getElementById("valuesOfPrecipition2").innerHTML = data1.forecast.forecastday[0].day.totalprecip_mm+" mm"+"<br>"+data1.forecast.forecastday[0].day.totalprecip_in+" inch";
    document.getElementById("valuesOfWindSpeed2").innerHTML = data1.forecast.forecastday[0].day.maxwind_mph+" mph"+"<br>"+data1.forecast.forecastday[0].day.maxwind_kph+" kph";
    document.getElementById("conditionIcon2").src = data1.forecast.forecastday[0].day.condition.icon;
    document.getElementById("conditionText2").innerHTML = data1.forecast.forecastday[0].day.condition.text;
    //-----------------------------------------------------------

    //-------------------Historical Weather------------------------
    const apiKey2 = "44c917daebe44e7dbf3153750231409";
    const urlHistorical = "https://api.weatherapi.com/v1/history.json?key=";
    let city2 = "Colombo";
    let date1 = "2023-09-25";

    const response2=await fetch(urlHistorical+`${apiKey2}&q=`+city2+`&dt=`+date1);
    var data2=await response2.json();

    document.getElementById("valuesOfTemperature3").innerHTML = data2.forecast.forecastday[0].day.avgtemp_c+" °C"+"<br>"+data2.forecast.forecastday[0].day.avgtemp_f+" °F"+"<br>"+Math.round(data2.forecast.forecastday[0].day.avgtemp_c+273.15)+" K";
    document.getElementById("valuesOfHumidity3").innerHTML = data2.forecast.forecastday[0].day.avghumidity+"%";
    document.getElementById("valuesOfPrecipition3").innerHTML = data2.forecast.forecastday[0].day.totalprecip_mm+" mm"+"<br>"+data2.forecast.forecastday[0].day.totalprecip_in+" inch";
    document.getElementById("valuesOfWindSpeed3").innerHTML = data2.forecast.forecastday[0].day.maxwind_mph+" mph"+"<br>"+data2.forecast.forecastday[0].day.maxwind_kph+" kph";
    document.getElementById("conditionIcon3").src = data2.forecast.forecastday[0].day.condition.icon;
    document.getElementById("conditionText3").innerHTML = data2.forecast.forecastday[0].day.condition.text;
    //---------------------------------------------------------------------
}