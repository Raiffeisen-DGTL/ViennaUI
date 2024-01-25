import React, { useEffect, useState, useCallback, useRef } from 'react';
import { StyledInput, Box, Placeholder, PlaceholderWrapper, Invisible, PropsStyledInput } from '../Input.styles';
import { Breakpoints } from '../../Utils/responsiveness';
import { BoxStyled } from '../../Utils/styled';

export interface NativeInputProps<B = Breakpoints>
    extends Omit<BoxStyled<typeof StyledInput, PropsStyledInput>, 'size'> {
    size?: PropsStyledInput<B>['$size'];
    design?: PropsStyledInput<B>['$design'];
    align?: PropsStyledInput<B>['$align'];
    /** Компонент неактивен если true */
    disabled?: PropsStyledInput<B>['$disabled'];
    invalid?: boolean;
    smartPlaceholder?: React.ReactNode | string;
    onDespose?: () => void;
    /** Ссылка на нативный компонент */
    ref?: React.Ref<HTMLInputElement>;
    /** ID компонента */
    id?: string;
    /** Имя компонента */
    name?: string;
    /** Значение в поле ввода (по умолчанию для первого рендера) */
    defaultValue?: string;
    /** Типы поля ввода */
    type?: string | 'password' | 'text';
    /** Автоматическая установка заглавной буквы */
    autoCapitalize?: string;
    /** Максимальная длинна вводимого значения в символах */
    maxLength?: number;
    /** Если true то работает системная проверка правописания */
    spellCheck?: boolean;
    /** Название стиля для компонента (опционально) */
    className?: string;
    /** Порядок получения фокуса (-1 = компонент не учавствует в фокусировке по нажатию TAB)  */
    tabIndex?: number;
    /** Включение встроенного в браузер автокомплита */
    autoComplete?: string;
    /** Включение встроенного в браузер корректирования ввода */
    autoCorrect?: string;
    /** Размеры */
    autoFocus?: boolean;
    /** Компонент активен, но не доступен для редактирования */
    readOnly?: boolean;
    /** Значение отображаемое, в случае если ничего не введено */
    placeholder?: string;
    /** Значение в поле ввода */
    value?: string;
    /** Автоматическое сравнение и вычетание введенного значения из smartPlaceholder по умолчанию включено */
    placeholderValueAutoDiff?: boolean;
    /** private props */
    onUpdated?: () => void;
    /** для передачи дополнительных нативных атрибутов,
     *  которые своим названием могут конфликтовать с имеющимися в компоненте пропсами,
     * например size */
    extraNativeProps?: {
        [key: string]: any;
    };
}

export const NativeInput = React.forwardRef<HTMLInputElement, NativeInputProps>(
    (
        {
            onDespose,
            smartPlaceholder,
            design = 'outline',
            size = 'l',
            align = 'left',
            placeholderValueAutoDiff = true,
            onUpdated,
            value,
            disabled,
            extraNativeProps,
            ...attrs
        },
        ref
    ) => {
        const placeholderRef = useRef<any>(null);
        const inputRef = useRef<any>(null);
        const inputRefValue = inputRef.current?.value || '';

        const [calculateSmartPlaceholder, setCalculateSmartPlaceholder] = useState(smartPlaceholder);

        // Так как инпут часто является составной частью других компонентов, требуется удобная обработка ситуаций, когда он удаляется из DOM
        useEffect(
            () => {
                if (typeof ref === 'function') {
                    ref(inputRef.current);
                } else if (ref && 'current' in ref) {
                    (ref as any).current = inputRef.current;
                }

                return () => {
                    if (typeof ref === 'function') {
                        ref(null);
                    } else if (ref && 'current' in ref) {
                        (ref as any).current = null;
                    }
                    if (typeof onDespose === 'function') {
                        onDespose();
                    }
                };
            },
            [ref, inputRef] // Тут не должно быть зависимости onDespose, так как этот useEffect создается и живет один раз на все время существования компонента
        );

        useEffect(() => {
            if (inputRef.current) {
                if (!placeholderValueAutoDiff) {
                    setCalculateSmartPlaceholder(smartPlaceholder);
                    return;
                }
                if (typeof smartPlaceholder === 'string' && inputRefValue) {
                    const visiblePart = smartPlaceholder.substring(inputRefValue.length);
                    setCalculateSmartPlaceholder(
                        <>
                            <Invisible>{inputRefValue || ''}</Invisible>
                            <span>{visiblePart}</span>
                        </>
                    );
                    return;
                }
            }
            setCalculateSmartPlaceholder(smartPlaceholder);
        }, [smartPlaceholder, placeholderValueAutoDiff, inputRefValue]);

        // scroll placeholder's content with input content
        const handleScroll = useCallback((e) => {
            if (placeholderRef?.current) {
                placeholderRef.current.scrollLeft = e.target.scrollLeft;
            }
        }, []);

        useEffect(() => {
            if (typeof onUpdated === 'function') {
                onUpdated();
            }
        });

        useEffect(() => {
            if (smartPlaceholder && align !== 'left') {
                // eslint-disable-next-line no-console
                console.warn('Input: нельзя использовать smartPlaceholder при выравнивании, отличном от left');
            }
        }, [smartPlaceholder, align]);

        return (
            <Box>
                {smartPlaceholder && align === 'left' && (
                    <PlaceholderWrapper>
                        <Placeholder ref={placeholderRef} $design={design} $size={size} $disabled={disabled}>
                            {calculateSmartPlaceholder}
                        </Placeholder>
                    </PlaceholderWrapper>
                )}
                <StyledInput
                    {...(attrs as {})}
                    {...extraNativeProps}
                    ref={inputRef}
                    value={value}
                    disabled={disabled}
                    $size={size}
                    $design={design}
                    $align={align}
                    $disabled={disabled}
                    onScroll={handleScroll}
                />
            </Box>
        );
    }
);

NativeInput.displayName = 'NativeInput';
