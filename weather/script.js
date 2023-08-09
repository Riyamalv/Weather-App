const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "02eddc70e9msh69a4ff5c7330e60p1fcb97jsn2a8365578783",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
  cityName.innerHTML = city;

  fetch(url + city, options)
    .then((response) =>
      response.json().then((response) => {
        console.log(response);

        // cloud_pct.innerHTML = response.cloud_pct;
        temp.innerHTML = response.temp;
        temp2.innerHTML = response.temp;
        feels_like.innerHTML = response.feels_like;
        humidity.innerHTML = response.humidity;
        humidity2.innerHTML = response.humidity;
        min_temp.innerHTML = response.min_temp;
        max_temp.innerHTML = response.max_temp;
        wind_speed.innerHTML = response.wind_speed;
        wind_speed2.innerHTML = response.wind_speed;
        wind_degrees.innerHTML = response.wind_degrees;
        sunrise.innerHTML = response.sunrise;
        sunset.innerHTML = response.sunset;
      })
    )
    .catch((err) => console.error(err));
};

const submit = document.querySelector(".submit");
console.log(submit);

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Delhi");

const el = document.createElement("td");

console.log("el = ", el);

// const getConstantWeather = function (city) {
//   fetch(url + city, options)
//     .then((response) =>
//       response.json().then((response) => {
//         console.log(response);

//         cloud_pct3.innerHTML = response.cloud_pct;
//         temp3.innerHTML = response.temp;
//         feels_like3.innerHTML = response.feels_like;
//         humidity3.innerHTML = response.humidity;
//         min_temp3.innerHTML = response.min_temp;
//         max_temp3.innerHTML = response.max_temp;
//         wind_speed3.innerHTML = response.wind_speed;
//         wind_degrees3.innerHTML = response.wind_degrees;
//         sunrise3.innerHTML = response.sunrise;
//         sunset3.innerHTML = response.sunset;
//       })
//     )
//     .catch((err) => console.error(err));
// };

// document.querySelector("#london").value = getConstantWeather("Boston");

const cities = ["Boston", "Shanghai", "Mumbai", "london"];

for (i = 0; i < cities.length; i++) {
  const getConstantWeather = function (city) {
    fetch(url + city, options)
      .then((response) =>
        response.json().then((response) => {
          console.log(response);

          cloud_pct3.innerHTML = response.cloud_pct;
          temp3.innerHTML = response.temp;
          feels_like3.innerHTML = response.feels_like;
          humidity3.innerHTML = response.humidity;
          min_temp3.innerHTML = response.min_temp;
          max_temp3.innerHTML = response.max_temp;
          wind_speed3.innerHTML = response.wind_speed;
          wind_degrees3.innerHTML = response.wind_degrees;
          sunrise3.innerHTML = response.sunrise;
          sunset3.innerHTML = response.sunset;
        })
      )
      .catch((err) => console.error(err));
  };
}
