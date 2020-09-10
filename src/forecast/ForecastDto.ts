export interface WeatherDto {
    description: string;
    icon: string;
}

export interface TempDto {
    day: number;
}

export interface CurrentForecastDto {
    temp: number;
}

export interface DailyForecastDto {
    temp: TempDto;
    weather: WeatherDto[];
    dt: number;
}

export interface ForecastDto {
    current: CurrentForecastDto;
    daily: DailyForecastDto[];
    lat: number;
    lon: number;
}
