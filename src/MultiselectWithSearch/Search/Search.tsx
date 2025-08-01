import React, { FormEvent, forwardRef, KeyboardEvent, Ref, useEffect, useRef, useState } from 'react';
import { Box, Input, Helper } from './Search.styles';
import { defer } from '../../Utils';

export interface SearchProps {
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    inputRef?: Ref<HTMLInputElement>;
    onChange?: (value: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    onDelete?: (event: KeyboardEvent<HTMLInputElement>) => void;
    onChangeWidth?: () => void;
    testId?: string;
}

export const Search = forwardRef<HTMLDivElement, SearchProps>(
    ({ value, placeholder, disabled, inputRef, onChange, onFocus, onBlur, onDelete, onChangeWidth, testId }, ref) => {
        const [state, setState] = useState(value ?? '');
        const [width, setWidth] = useState(10);
        const textRef = useRef<HTMLSpanElement>(null);

        const handleChange = (event: FormEvent<HTMLInputElement>) => {
            const str = event.currentTarget.value;
            setState(str);
            defer(() => {
                onChange && onChange(str);
            });
        };

        const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
            if (onDelete && state.length === 0 && event.key === 'Backspace' && !event.repeat) {
                onDelete(event);
            }
        };

        const handleFocus = () => {
            onFocus && onFocus();
        };

        useEffect(() => {
            setState(value ?? '');
        }, [value]);

        useEffect(() => {
            setWidth((textRef.current?.offsetWidth ?? 0) + 10);
        }, [state]);

        useEffect(() => {
            defer(() => {
                onChangeWidth && onChangeWidth();
            });
        }, [width]);

        return (
            <Box ref={ref} $width={width}>
                <Input
                    ref={inputRef}
                    value={state}
                    placeholder={placeholder}
                    type='text'
                    disabled={disabled}
                    onInput={handleChange}
                    onKeyDown={handleKeyDown}
                    onFocus={handleFocus}
                    onBlur={onBlur}
                    data-test-id={testId}
                    data-testid={testId}
                />
                <Helper ref={textRef}>{state}</Helper>
            </Box>
        );
    }
);
