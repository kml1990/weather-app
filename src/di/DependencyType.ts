const DependencyType = {
    ForecastService: Symbol.for('ForecastService'),
    ForecastFactory: Symbol.for('ForecastFactory'),
    LocationService: Symbol.for('LocationService'),
    ForecastApi: Symbol.for('ForecastApi'),
};

export default DependencyType;
