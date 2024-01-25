import { DSLocalizationProps } from '../Localization';
import { CalendarLocalization } from '../Calendar';
import { InputDateLocalization } from '../InputMask';

export type DatePickerBetaLocalization = CalendarLocalization & InputDateLocalization;

export type DatePickerBetaLocalizationProps = DSLocalizationProps<DatePickerBetaLocalization>;
