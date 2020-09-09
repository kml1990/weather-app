export interface DailyForecastParams {
    day: string;
    temperature: number;
    condition: string;
    icon: string;
}

export default class DailyForecast {
    private readonly _day: string;

    private readonly _temperature: number;

    private readonly _condition: string;

    private readonly _icon: string;

    constructor(dailyForecast: DailyForecastParams) {
        const { day, temperature, condition, icon } = dailyForecast;
        this._day = day;
        this._temperature = temperature;
        this._condition = condition;
        this._icon = icon;
    }

    get day() {
        return this._day;
    }

    get temperature() {
        return this._temperature;
    }

    get condition() {
        return this._condition;
    }

    get icon() {
        return this._icon;
    }
}
