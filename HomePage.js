async function btnSearchClicked(){
    const apiKey = "44c917daebe44e7dbf3153750231409";
    const urlCurrent = "http://api.weatherapi.com/v1/current.json?key";
    const city = document.getElementById("txtSearch").value;

    console.log(city);
        
    const response=await fetch(urlCurrent+`${apiKey}&q=`+city);
    var data=await response.json();

    console.log(data);
}