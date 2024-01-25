import { DSLocalizationProps } from '../Localization';
import { CalendarLocalization } from '../Calendar';
import { InputDateLocalization } from '../InputMask';

export type DatePickerLocalization = CalendarLocalization & InputDateLocalization;

export type DatePickerLocalizationProps = DSLocalizationProps<DatePickerLocalization>;
