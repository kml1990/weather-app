import axios from 'axios';
import AppSettings from './AppSettings';

describe('AppSettings', () => {
    let appSettings: AppSettings;

    beforeEach(() => {
        // given
        appSettings = new AppSettings();
    });

    describe('configureApp', () => {
        it('should configure axios interceptors', () => {
            // given
            jest.spyOn(axios.interceptors.request, 'use');

            // when
            appSettings.configureApp();

            // then
            expect(axios.interceptors.request.use).toHaveBeenCalledTimes(1);
        });
    });
});
