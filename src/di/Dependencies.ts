import { Container, ContainerModule, interfaces } from 'inversify';
import ForecastService from '../forecast/ForecastService';
import LocationService from '../location/LocationService';
import DependencyType from './DependencyType';

export const dependenciesContainer = new Container();

export const dependencies = new ContainerModule((bind: interfaces.Bind) => {
    bind<ForecastService>(DependencyType.ForecastService)
        .to(ForecastService)
        .inSingletonScope();
    bind<LocationService>(DependencyType.LocationService)
        .to(LocationService)
        .inSingletonScope();
});
