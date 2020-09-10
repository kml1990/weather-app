import { injectable } from 'inversify';
import moment, { Moment } from 'moment';

@injectable()
export default class DateUtil {
    getDateFromEpoch(epoch: number): Moment {
        return moment.unix(epoch);
    }

    isCurrentDay<T>(date: T): boolean {
        return moment(date).isSame(new Date(), 'day');
    }

    extractDayFromDate<T>(date: T): string {
        return moment(date).format('ddd');
    }
}