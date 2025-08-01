import React, { ComponentProps } from 'react';
import { Locale } from 'date-fns';
import { Box } from './DateTimePicker.styles';
import { DateTimePickerLocalizationProps } from './localization';
import { OnChangeHandler } from '../Utils';
import { WithViewOnly } from '@/ViewOnly';

export interface DateObj {
    time?: string;
    date?: string;
}

export interface DateTimePickerProps<T extends Date | DateObj = Date | DateObj>
    extends Omit<ComponentProps<typeof Box>, 'onChange'>,
        DateTimePickerLocalizationProps,
        WithViewOnly {
    design?: 'outline' | 'material';
    size?: 'xs' | 's' | 'm' | 'l' | 'xl';
    value?: T;
    name?: string;
    disabled?: boolean;
    invalid?: boolean;
    timeFrom?: string;
    timeTo?: string;
    step?: number;
    onChange?: OnChangeHandler<
        T,
        React.FormEvent<HTMLInputElement> | React.ChangeEvent | React.MouseEvent | React.KeyboardEvent | Event | null
    >;
    /**
     * Локаль календаря
     */
    locale?: Locale;
}
