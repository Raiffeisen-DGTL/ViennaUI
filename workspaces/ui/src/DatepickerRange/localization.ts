import { DSLocalizationProps } from '../Localization';
import { CalendarLocalization } from '../Calendar';
import { InputDateRangeLocalization } from '../InputMask';

export type DatePickerRangeLocalization = CalendarLocalization & InputDateRangeLocalization;

export type DatePickerRangeLocalizationProps = DSLocalizationProps<DatePickerRangeLocalization>;
