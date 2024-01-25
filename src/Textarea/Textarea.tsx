import React, { useRef, useEffect, useCallback, useState } from 'react';
import { Breakpoints } from '../Utils/responsiveness';
import { Root, Box, PropsBox, Counter } from './Textarea.styles';
import { Span } from '../Typography';
import { BoxStyled } from '../Utils/styled';

export type TextareaEvent<T> = (event: T, data?: { name?: string; value?: string }) => void;

export interface TextareaProps<B = Breakpoints> extends BoxStyled<typeof Box, PropsBox> {
    design?: PropsBox<B>['$design'];
    size?: PropsBox['$size'];
    invalid?: PropsBox<B>['$invalid'];
    maxHeight?: PropsBox<B>['$maxHeight'];
    value?: string;
    maxRows?: number;
    resize?: boolean;
    showCounter?: boolean;
    onChange?: TextareaEvent<React.ChangeEvent<HTMLTextAreaElement>>;
    onClick?: TextareaEvent<React.MouseEvent<HTMLTextAreaElement>>;
    onFocus?: TextareaEvent<React.FocusEvent<HTMLTextAreaElement>>;
    onBlur?: TextareaEvent<React.FocusEvent<HTMLTextAreaElement>>;
    onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
    onKeyPress?: React.KeyboardEventHandler<HTMLTextAreaElement>;
    onKeyUp?: React.KeyboardEventHandler<HTMLTextAreaElement>;
}

export const Textarea = React.forwardRef(
    <B,>(props: TextareaProps<B extends void ? Breakpoints : B>, ref: React.Ref<HTMLTextAreaElement>) => {
        const {
            disabled,
            invalid,
            size = 'm',
            rows = 3,
            cols = 50,
            design = 'outline',
            maxRows,
            onChange,
            onFocus,
            onBlur,
            resize = true,
            value,
            name,
            showCounter = false,
            maxLength,
            spellCheck = 'false',
            autoComplete = 'off',
            autoCorrect = 'off',
            wrap = 'soft',
            ...attrs
        } = props;

        const charsCounter = value?.length ?? 0;
        const textareaEl = useRef<HTMLTextAreaElement>(null);
        const [maxHeight, setMaxHeight] = useState<undefined | number>(undefined);
        let cacheCalcStyles: any = false;
        const invalidCharsCounter = maxLength ? charsCounter > maxLength : false;
        const counterColor = invalidCharsCounter ? 'moscow100' : 'seattle60';

        const doResize = useCallback(() => {
            // input is not defined or resizing is disabled
            if (!textareaEl || !textareaEl.current || !resize) {
                return;
            }

            // returns to default state
            textareaEl.current.style.height = 'auto';

            const border = textareaEl.current.offsetHeight - textareaEl.current.clientHeight;
            textareaEl.current.style.height = `${textareaEl.current.scrollHeight + border}px`;
        }, [resize, textareaEl, value]);

        useEffect(() => {
            doResize();
        }, [doResize]);

        const handleChangeEvent = useCallback(
            (event: React.ChangeEvent<HTMLTextAreaElement>) => {
                if (disabled) {
                    return;
                }

                if (onChange) {
                    onChange(event, { value: event.currentTarget.value, name });
                }
                doResize();
            },
            [disabled, onChange]
        );

        const handleFocus = useCallback(
            (event: React.FocusEvent<HTMLTextAreaElement>) => {
                if (onFocus) {
                    onFocus(event, { value: event.currentTarget.value, name });
                }
            },
            [onFocus]
        );

        const handleBlur = useCallback(
            (event: React.FocusEvent<HTMLTextAreaElement>) => {
                if (onBlur) {
                    onBlur(event, { value: event.currentTarget.value, name });
                }
            },
            [onBlur]
        );

        const getTextareaStyles = (
            node: HTMLTextAreaElement
        ): {
            lineHeight: number;
            paddingTop: number;
            paddingBottom: number;
        } => {
            if (cacheCalcStyles) {
                return cacheCalcStyles;
            }

            const computedStyles = window.getComputedStyle(node);

            cacheCalcStyles = {
                lineHeight: parseInt(computedStyles.getPropertyValue('line-height'), 10),
                paddingTop: parseInt(computedStyles.getPropertyValue('padding-top'), 10),
                paddingBottom: parseInt(computedStyles.getPropertyValue('padding-bottom'), 10),
            };

            return cacheCalcStyles;
        };

        const setMaxRows = useCallback(() => {
            // input is not defined or resizing is disabled
            if (!textareaEl || !textareaEl.current || !maxRows) {
                return;
            }

            const { lineHeight, paddingTop, paddingBottom } = getTextareaStyles(textareaEl.current);
            setMaxHeight(lineHeight * maxRows + paddingTop + paddingBottom);
        }, [maxRows]);

        useEffect(() => {
            setMaxRows();
        }, [setMaxRows]);

        useEffect(() => {
            if (typeof ref === 'function') {
                ref(textareaEl.current);
            } else if (ref && 'current' in ref) {
                (ref as any).current = textareaEl.current;
            }
        });

        return (
            <Root>
                <Box
                    {...(attrs as {})}
                    $maxHeight={maxHeight}
                    $invalid={invalid ?? invalidCharsCounter}
                    $design={design}
                    $size={size}
                    value={value}
                    disabled={disabled}
                    aria-invalid={!!invalid || invalidCharsCounter}
                    rows={rows}
                    cols={cols}
                    ref={textareaEl}
                    name={name}
                    spellCheck={spellCheck}
                    autoComplete={autoComplete}
                    autoCorrect={autoCorrect}
                    wrap={wrap}
                    onChange={handleChangeEvent}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                {showCounter && (
                    <Counter>
                        <Span color={counterColor}>{charsCounter}</Span>
                        {maxLength && <Span color={counterColor}>/{maxLength}</Span>}
                    </Counter>
                )}
            </Root>
        );
    }
);

Textarea.displayName = 'Textarea';
