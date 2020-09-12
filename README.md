## Running the project

* Clone the project `clone git@github.com:kml1990/weather-app.git`.
* Add `.env.local` file in the root of the project and add `REACT_APP_OPEN_WEATHER_MAP_API_KEY={key}`
* Replace {key} with the key for `One Call API` from `https://openweathermap.org/api`
* Run `npm install`
* Run `npm start`
* Run `npm test` to run tests for the application.

## Improvements

* Include `accordion` to each daily forecast entry so that when clicked, it would expand and show `hourly` forecast.
* Include an icon for current forecast.
* Include more forecast details such as: `humidity`, `wind`, `visibility`, `pressure` etc. 
* Temperature units could be changeable.
* Location could be loaded from `Geolocation API`
* User could control how often the data should be fetched.
* Improve the UI to contain weather related animations for current forecast.

## Notes

`oneCall` endpoint has been used instead of `current` and `forecast5`. The reason is that `oneCall` endpoint provides simpler definitions, includes the same data and requires only one call.