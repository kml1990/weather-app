import moment from 'moment';
import DateUtil from './DateUtil';

describe('DateUtil', () => {
    let dateUtil: DateUtil;

    beforeEach(() => {
        // given
        dateUtil = new DateUtil();
    });

    describe('getDateFromEpoch', () => {
        it('should match epoch date for given date', () => {
            // given
            const epochDate = 1599823489;
            const expectedDate = new Date('09/11/2020');

            // when
            const date = dateUtil.getDateFromEpoch(epochDate);
            const isSameDay = moment(date).isSame(expectedDate, 'day');

            // then
            expect(isSameDay).toBeTruthy();
        });
        it('should not match epoch date for given date', async () => {
            // given
            const epochDate = 1599823489;
            const expectedDate = new Date('09/12/2020');

            // when
            const date = dateUtil.getDateFromEpoch(epochDate);
            const isSameDay = moment(date).isSame(expectedDate, 'day');

            // then
            expect(isSameDay).toBeFalsy();
        });
    });

    describe('isCurrentDay', () => {
        it('should return true if given date is current day', () => {
            // given
            const now = new Date();

            // when
            const isCurrentDay = dateUtil.isCurrentDay(now);

            // then
            expect(isCurrentDay).toBeTruthy();
        });
        it('should return false if given date is not current day', () => {
            // given
            const date = new Date('09/10/2020');

            // when
            const isCurrentDay = dateUtil.isCurrentDay(date);

            // then
            expect(isCurrentDay).toBeFalsy();
        });
    });

    describe('extractDayFromDate', () => {
        it('should return name of a day for given date', () => {
            // given
            const wednesday = new Date('09/09/2020');
            const thursday = new Date('09/10/2020');
            const expectedNameForWednesday = 'Wed';
            const expectedNameForThursday = 'Thu';

            // when
            const day1 = dateUtil.extractDayFromDate(wednesday);
            const day2 = dateUtil.extractDayFromDate(thursday);

            // then
            expect(day1).toEqual(expectedNameForWednesday);
            expect(day2).toEqual(expectedNameForThursday);
        });
    });
});