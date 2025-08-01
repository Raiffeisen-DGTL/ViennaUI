import React, { ComponentProps, FC, useEffect } from 'react';
import { PatternFormat, PatternFormatProps } from 'react-number-format';
import { Input, InputProps } from '../Input';
import { consoleDevOnly } from '../Utils/console';

const WARNING_MESSAGE = `
Компоненты 'InputFormatBeta', 'InputDateBeta', 'DatePickerBeta' являются экспериментальными.
Мы не гарантируем консистентность их интерфейсов в рамках текущего мажорного релиза.
Свои предложения по развитию компонентов вы можете направить команде ДС и в чат #design-system-web`;

type Handlers = 'onChange' | 'onBlur' | 'onFocus';
export interface InputFormatBetaProps
    extends Omit<PatternFormatProps<ComponentProps<typeof Input>>, Handlers>,
        Pick<InputProps, Handlers> {}

export const InputFormatBeta: FC<InputFormatBetaProps> = ({ onChange, onBlur, onFocus, ...rest }) => {
    useEffect(() => {
        consoleDevOnly(WARNING_MESSAGE);
    }, []);
    return (
        <PatternFormat
            customInput={Input}
            onChange={onChange as React.ChangeEventHandler<HTMLInputElement> | undefined}
            onBlur={onBlur as React.FocusEventHandler<HTMLInputElement> | undefined}
            onFocus={onFocus as React.FocusEventHandler<HTMLInputElement> | undefined}
            {...rest}
        />
    );
};
