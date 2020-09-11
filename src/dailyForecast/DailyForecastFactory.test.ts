import { ForecastDto } from '../forecast/ForecastDto';
import DateUtil from '../utils/date/DateUtil';
import DailyForecast from './DailyForecast';
import DailyForecastFactory from './DailyForecastFactory';

describe('DailyForecastFactory', () => {
    let dailyForecastFactory: DailyForecastFactory;
    let dateUtilMock: DateUtil;
    const forecastDto: ForecastDto = {
        current: { temp: 0 },
        daily: [
            {
                dt: 1599480025,
                temp: { day: 12 },
                weather: [
                    {
                        description: 'good',
                        icon: 'icon',
                    },
                ],
            },
            {
                dt: 1599566425,
                temp: { day: 10 },
                weather: [
                    {
                        description: 'not bad',
                        icon: 'icon',
                    },
                ],
            },
        ],
        lat: 123,
        lon: 456,
    };

    beforeEach(() => {
        // given
        dateUtilMock = new (jest.fn().mockImplementation(() => {
            return {
                getDateFromEpoch: jest.fn(),
                isCurrentDay: jest.fn(),
                extractDayFromDate: jest.fn(),
            };
        }))();

        dailyForecastFactory = new DailyForecastFactory(dateUtilMock);
    });

    describe('create', () => {
        it('should create an instance of DailyForecast', async () => {
            // when
            const dailyForecasts = dailyForecastFactory.create(forecastDto);

            // then
            expect(dailyForecasts[0]).toBeInstanceOf(DailyForecast);
        });
        it('should extract correct values from forecastDto', () => {
            // given
            const expectedDay = 'Mon';
            (dateUtilMock.extractDayFromDate as jest.Mock).mockReturnValue(expectedDay);

            // when
            const dailyForecasts = dailyForecastFactory.create(forecastDto);

            // then
            expect(dailyForecasts).toHaveLength(2);
            dailyForecasts.forEach((dailyForecast: DailyForecast, index: number) => {
                expect(dailyForecast.day).toEqual(expectedDay);
                expect(dailyForecast.temperature).toEqual(forecastDto.daily[index].temp.day);
                expect(dailyForecast.condition).toEqual(forecastDto.daily[index].weather[0].description);
                expect(dailyForecast.icon).toEqual(forecastDto.daily[index].weather[0].icon);
            });
        });
        it('should not include forecast for current day', () => {
            // given
            (dateUtilMock.isCurrentDay as jest.Mock).mockReturnValueOnce(true);

            // when
            const dailyForecasts = dailyForecastFactory.create(forecastDto);

            // then
            expect(dailyForecasts).toHaveLength(1);
        });
    });
});
