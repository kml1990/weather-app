import { Container, ContainerModule, interfaces } from 'inversify';
import ForecastApi from '../api/ForecastApi';
import ForecastFactory from '../forecast/ForecastFactory';
import ForecastService from '../forecast/ForecastService';
import LocationService from '../location/LocationService';
import DependencyType from './DependencyType';

export const dependenciesContainer = new Container();

export const dependencies = new ContainerModule((bind: interfaces.Bind) => {
    bind<ForecastService>(DependencyType.ForecastService)
        .to(ForecastService)
        .inSingletonScope();
    bind<ForecastFactory>(DependencyType.ForecastFactory)
        .to(ForecastFactory)
        .inSingletonScope();
    bind<LocationService>(DependencyType.LocationService)
        .to(LocationService)
        .inSingletonScope();
    bind<ForecastApi>(DependencyType.ForecastApi)
        .to(ForecastApi)
        .inSingletonScope();
});
