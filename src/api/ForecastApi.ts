import axios from 'axios';
import { injectable } from 'inversify';
import { ForecastDto } from '../forecast/ForecastDto';
import Location from '../location/Location';
import appConfig from '../utils/settings/Config';

@injectable()
export default class ForecastApi {
    fetchForecast(location: Location, units = appConfig.temperature.DEFAULT_UNITS): Promise<ForecastDto | undefined> {
        const { lat, lon } = location;
        return axios
            .get<ForecastDto>(appConfig.api.BASE_URL, {
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
                return undefined;
            });
    }
}
