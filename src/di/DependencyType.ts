const DependencyType = {
    ForecastService: Symbol.for('ForecastService'),
    LocationService: Symbol.for('LocationService'),
    ForecastApi: Symbol.for('ForecastApi'),
    ForecastFactory: Symbol.for('ForecastFactory'),
    LocationFactory: Symbol.for('LocationFactory'),
    DailyForecastFactory: Symbol.for('DailyForecastFactory'),
};

export default DependencyType;
