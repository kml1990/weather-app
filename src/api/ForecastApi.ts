import axios from 'axios';
import { injectable } from 'inversify';
import { ForecastDto } from '../forecast/ForecastDto';
import Location from '../location/Location';

const BASE_URL = 'http://api.openweathermap.org/data/2.5/onecall';

@injectable()
export default class ForecastApi {
    fetchForecast(location: Location, units = 'metric'): Promise<ForecastDto | null> {
        const { lat, lon } = location;
        return axios
            .get<ForecastDto>(BASE_URL, {
                params: {
                    lat,
                    lon,
                    units,
                },
            })
            .then(response => {
                return response.data;
            })
            .catch(() => {
                return null;
            });
    }
}