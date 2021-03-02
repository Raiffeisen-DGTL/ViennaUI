import { DSLocalizationProps } from '../../../Localization';

export interface InputDateRangeLocalization {
    'ds.inputDateRange.placeholder.date'?: string;
    'ds.inputDateRange.placeholder.date.separator'?: string;
    'ds.inputDateRange.placeholder.date.range'?: string;
}

export type InputDateRangeLocalizationProps = DSLocalizationProps<InputDateRangeLocalization>;

export const defaultInputDateRangeLocalization: InputDateRangeLocalization = {
    'ds.inputDateRange.placeholder.date': 'ДД.ММ.ГГГГ',
    'ds.inputDateRange.placeholder.date.separator': 'ДД.ММ.ГГГГ - ',
    'ds.inputDateRange.placeholder.date.range': 'ДД.ММ.ГГГГ - ДД.ММ.ГГГГ',
};
