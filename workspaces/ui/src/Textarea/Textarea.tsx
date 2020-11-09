import React, { useRef, useEffect, useCallback, useState, ForwardRefExoticComponent } from 'react';
import { Box } from './Textarea.styles';

export type TextareaEvent<T> = (event: T, data?: { name?: string; value?: string }) => void;
export type Size = 'xs' | 's' | 'm' | 'l' | 'xl';
export type Design = 'outline' | 'material';

interface Props {
    value?: string;
    size?: Size;
    design?: Design;
    rows?: number;
    maxRows?: number;
    resize?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    onChange?: TextareaEvent<React.FormEvent<HTMLTextAreaElement>>;
    onClick?: TextareaEvent<React.FormEvent<HTMLTextAreaElement>>;
    onFocus?: TextareaEvent<React.FormEvent<HTMLTextAreaElement>>;
    onBlur?: TextareaEvent<React.FormEvent<HTMLTextAreaElement>>;
    onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
    onKeyPress?: React.KeyboardEventHandler<HTMLTextAreaElement>;
    onKeyUp?: React.KeyboardEventHandler<HTMLTextAreaElement>;
    ref?: React.Ref<HTMLTextAreaElement>;
}

interface HTMLAttributeProps {
    id?: string;
    name?: string;
    cols?: number;
    wrap?: 'hard' | 'soft' | 'off';
    autoComplete?: string;
    autoCapitalize?: string;
    autoCorrect?: string;
    autoFocus?: boolean;
    maxLength?: number;
    minLength?: number;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    tabIndex?: number;
    spellcheck?: string;
}

export type TextareaProps = Props & HTMLAttributeProps;

export const Textarea: React.FC<TextareaProps> = React.forwardRef(
    (props: TextareaProps, ref: React.Ref<HTMLTextAreaElement>) => {
        const {
            disabled,
            invalid,
            size,
            rows,
            design = 'outline',
            maxRows,
            onChange,
            onFocus,
            onBlur,
            resize,
            value,
            name,
            ...attrs
        } = props;
        const textareaEl = useRef<HTMLTextAreaElement>(null);
        const [maxHeight, setMaxHeight] = useState<undefined | number>(undefined);
        let cacheCalcStyles: any = false;

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
            (event: React.FormEvent<HTMLTextAreaElement>) => {
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
            (event: React.FormEvent<HTMLTextAreaElement>) => {
                if (onFocus) {
                    onFocus(event, { value: event.currentTarget.value, name });
                }
            },
            [onFocus]
        );

        const handleBlur = useCallback(
            (event: React.FormEvent<HTMLTextAreaElement>) => {
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
            <Box
                {...attrs}
                maxHeight={maxHeight}
                value={value}
                disabled={disabled}
                invalid={invalid}
                aria-invalid={!!invalid}
                design={design}
                size={size as Size}
                rows={rows}
                ref={textareaEl}
                name={name}
                onChange={handleChangeEvent}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        );
    }
) as ForwardRefExoticComponent<TextareaProps>;

Textarea.displayName = 'Textarea';
Textarea.defaultProps = {
    size: 'm',
    rows: 3,
    cols: 50,
    resize: true,
    spellcheck: 'false',
    autoComplete: 'off',
    autoCorrect: 'off',
    wrap: 'soft',
    design: 'outline',
};
export default Textarea;
