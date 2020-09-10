const DependencyType = {
    ForecastService: Symbol.for('ForecastService'),
    LocationService: Symbol.for('LocationService'),
    ForecastApi: Symbol.for('ForecastApi'),
    ForecastFactory: Symbol.for('ForecastFactory'),
    LocationFactory: Symbol.for('LocationFactory'),
    DailyForecastFactory: Symbol.for('DailyForecastFactory'),
    DateUtil: Symbol.for('DateUtil'),
};

export default DependencyType;
