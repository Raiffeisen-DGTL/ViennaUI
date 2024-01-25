import * as presets from '@fcc/ui-theme/types/presets';
import * as tokens from '@fcc/tokens/types/tokens';

type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;

type ThemePresetsBase = typeof presets;
type ThemePresets = DeepPartial<ThemePresetsBase>;

type Tokens = typeof tokens;

export { ThemePresets, Tokens };

export * from '@fcc/ui-primitives';
export * from '@fcc/tokens';

export * from './Utils/responsiveness/Breakpoints';
export * from './Utils/styling/StylesProvider';

// Components
export * from './Accordion';
export * from './Alarm';
export * from './Alert';
export * from './Avatar';
export * from './Badge';
export * from './Body';
export * from './Button';
export * from './Breadcrumbs';
export * from './Calendar';
export * from './Card';
export * from './Checkbox';
export * from './Chips';
export * from './ComboButton';
export * from './Counter';
export * from './CssGrid';
export * from './Datepicker';
export * from './DatePickerBeta';
export * from './DatepickerRange';
export * from './DateTimePicker';
export * from './Drawer';
export * from './DropList';
export * from './EmptyState';
export * from './FileLoader';
export * from './FileLoaderButton';
export * from './Filter';
export * from './Flex';
export * from './FormField';
export * from './Grid';
export * from './Groups';
export * from './Header';
export * from './Hint';
export * from './Input';
export * from './InputDateBeta';
export * from './InputFormatBeta';
export * from './InputMask';
export * from './InputPassword';
export * from './Link';
export * from './Localization';
export * from './Logotype';
export * from './Modal';
export * from './Multiselect';
export * from './Notifications';
export * from './Pagination';
export * from './PaymentLogo';
export * from './Popover';
export * from './Progressbar';
export * from './Radio';
export * from './RoundIcon';
export * from './Search';
export * from './Select';
export * from './Sidebar';
export * from './InputSlider';
export * from './Spinner';
export * from './Stepper';
export * from './Switcher';
export * from './Table';
export * from './Tabs';
export * from './Textarea';
export * from './Timer';
export * from './Toolbar';
export * from './Tooltip';
export * from './Typography';
export * from './UserProfile';
export * from './Monthpicker';
export * from './Whitespace';
export * from './Wizard';
export * from './CustomTable';
export * from './Popper';
export * from './Trigger';
