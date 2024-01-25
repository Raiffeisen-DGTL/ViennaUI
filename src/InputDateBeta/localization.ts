import { DSLocalizationProps } from '../Localization';

export interface InputDateBetaLocalization {
    'ds.inputDate.placeholder.date'?: string;
    'ds.inputDate.placeholder.time'?: string;
    'ds.inputDate.placeholder.datetime'?: string;
}

export type InputDateBetaLocalizationProps = DSLocalizationProps<InputDateBetaLocalization>;

export const defaultInputDateBetaLocalization: InputDateBetaLocalization = {
    'ds.inputDate.placeholder.date': 'ДД.ММ.ГГГГ',
    'ds.inputDate.placeholder.time': 'ЧЧ:ММ',
    'ds.inputDate.placeholder.datetime': 'ДД.ММ.ГГГГ ЧЧ:ММ',
};
