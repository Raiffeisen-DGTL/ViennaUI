import React, { useRef, useEffect, useCallback, useState } from 'react';
import { Breakpoints } from '../Utils/responsiveness';
import { Root, Box, PropsBox, Counter } from './Textarea.styles';
import { Span } from '../Typography';
import { BoxStyled } from '../Utils/styled';
import { OnChangeHandler, Pretty } from '../Utils';
import { ViewOnly, WithViewOnly } from '@/ViewOnly';

export const defaultTextareaTestId: TextareaProps['testId'] = {
    counter: 'textarea_counter',
    maxCounter: 'textarea_max-counter',
};

export type TextareaEvent<T> = (event: T, data: { name?: string; value?: string }) => void;
export type TextareaPropsWithRef<B = Breakpoints> = TextareaProps<B> & React.RefAttributes<HTMLTextAreaElement>;

export interface TextareaProps<B = Breakpoints>
    extends Omit<BoxStyled<typeof Box, PropsBox>, 'onChange' | 'onClick' | 'onFocus' | 'onBlur' | 'ref'>,
        WithViewOnly {
    design?: PropsBox<B>['$design'];
    size?: PropsBox['$size'];
    invalid?: PropsBox<B>['$invalid'];
    value?: string;
    maxRows?: number;
    resize?: boolean;
    maxCounter?: number;
    showCounter?: boolean;
    testId?: {
        counter?: string;
        maxCounter?: string;
    };
    onChange?: OnChangeHandler<string, React.ChangeEvent<HTMLTextAreaElement>>;
    onClick?: TextareaEvent<React.MouseEvent<HTMLTextAreaElement>>;
    onFocus?: TextareaEvent<React.FocusEvent<HTMLTextAreaElement>>;
    onBlur?: TextareaEvent<React.FocusEvent<HTMLTextAreaElement>>;
    onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
    onKeyPress?: React.KeyboardEventHandler<HTMLTextAreaElement>;
    onKeyUp?: React.KeyboardEventHandler<HTMLTextAreaElement>;
}

const TextareaInternal = <B,>(props: TextareaProps<B>, ref: React.Ref<HTMLTextAreaElement>) => {
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
        maxCounter,
        showCounter = false,
        maxLength,
        spellCheck = 'false',
        autoComplete = 'off',
        autoCorrect = 'off',
        wrap = 'soft',
        viewOnly,
        viewOnlyText,
        testId = defaultTextareaTestId,
        ...attrs
    } = props;
    const textareaEl = useRef<HTMLTextAreaElement | null>(null);
    const [charsCounter, setCharsCounter] = useState(value?.length ?? 0);
    const [maxHeight, setMaxHeight] = useState<undefined | number>(undefined);
    let cacheCalcStyles: {
        lineHeight: number;
        paddingTop: number;
        paddingBottom: number;
    };
    const invalidCharsCounter = maxCounter ? charsCounter > maxCounter : false;

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

    useEffect(() => {
        if (value?.length) {
            setCharsCounter(value?.length);
        } else {
            setCharsCounter(0);
        }
    }, [value?.length]);

    const handleChangeEvent = useCallback(
        (event: React.ChangeEvent<HTMLTextAreaElement>) => {
            if (disabled) {
                return;
            }
            setCharsCounter(event.currentTarget.value?.length);
            if (onChange) {
                onChange({ value: event.currentTarget.value, event, options: { name } });
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
            (ref as React.MutableRefObject<HTMLTextAreaElement | null>).current = textareaEl.current;
        }
    });
    const sizesInCounter = size === 'l' ? 'm' : 's';

    if (viewOnly) {
        return <ViewOnly size={size}>{viewOnlyText ?? value}</ViewOnly>;
    }

    return (
        <Root>
            <Box
                {...attrs}
                $maxHeight={maxHeight}
                $invalid={invalid ?? invalidCharsCounter}
                $design={design}
                $size={size}
                $showCounter={showCounter}
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
                maxLength={maxLength}
                onChange={handleChangeEvent}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            {showCounter && (
                <Counter>
                    <Span size={sizesInCounter} color={counterColor} data-testid={testId?.counter}>
                        {charsCounter}
                    </Span>
                    {maxCounter && (
                        <Span size={sizesInCounter} color={counterColor} data-testid={testId?.maxCounter}>
                            /{maxCounter}
                        </Span>
                    )}
                </Counter>
            )}
        </Root>
    );
};

export namespace Textarea {
    export type OnChange = Pretty.Func<OnChangeHandler<string, React.ChangeEvent<HTMLTextAreaElement>>>;
    export type OnClick = Pretty.Func<TextareaEvent<React.MouseEvent<HTMLTextAreaElement>>>;
    export type OnFocus = Pretty.Func<TextareaEvent<React.FocusEvent<HTMLTextAreaElement>>>;
    export type OnBlur = Pretty.Func<TextareaEvent<React.FocusEvent<HTMLTextAreaElement>>>;
}

export const Textarea = React.forwardRef(TextareaInternal) as (<B>(
    props: TextareaPropsWithRef<B>
) => ReturnType<typeof TextareaInternal>) & {
    displayName?: string;
};

Textarea.displayName = 'Textarea';
