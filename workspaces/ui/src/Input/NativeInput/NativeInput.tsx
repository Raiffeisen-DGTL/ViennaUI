import React, { useEffect, useState, useCallback, useRef } from 'react';
import { StyledInput, Box, Placeholder, PlaceholderWrapper, Invisible } from '../Input.styles';

interface HTMLAttributeProps {
    /** Ссылка на нативный компонент */
    ref?: React.Ref<HTMLInputElement>;

    /** ID компонента */
    id?: string;

    /** Имя компонента */
    name?: string;

    /** Значение в поле ввода */
    value?: string;

    /** Значение в поле ввода (по умолчанию для первого рендера) */
    defaultValue?: any;

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

    /** Компонент неактивен если true */
    disabled?: boolean;

    /** Подсветка без фактического выделения */
    active?: boolean;

    /** Обработчик события при наборе текста */
    onChange?: Function;

    /** Обработчик события при потере фокуса компонентом  */
    onBlur?: Function;

    /** Обработчик события при получении фокуса компонентом  */
    onFocus?: Function;

    /** Обработчик события первого полупериода клика */
    onMouseDown?: Function;

    /** Обработчик события первого полупериода клика */
    onPointerDown?: Function;

    /** Автоматическое сравнение и вычетание введенного значения из smartPlaceholder по умолчанию включено */
    placeholderValueAutoDiff?: boolean;

    /** private props */
    onUpdated?: () => void;
}

export interface NativeInputProps extends Partial<HTMLAttributeProps> {
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
    design?: 'outline' | 'material';
    invalid?: boolean;
    className?: string;
    style?: any;
    smartPlaceholder?: React.ReactNode | string;
    onDespose?: () => void;
}

export const NativeInput: React.FC<React.PropsWithChildren<NativeInputProps>> = React.forwardRef(
    (props: React.PropsWithChildren<unknown>, ref: React.Ref<HTMLInputElement>): JSX.Element => {
        const {
            onDespose,
            smartPlaceholder,
            design = 'outline',
            size = 'l',
            placeholderValueAutoDiff = true,
            onUpdated,
            value,
            ...attrs
        } = props as any;
        const placeholderRef = useRef<any>(null);
        const inputRef = useRef<any>(null);

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
            [ref, inputRef, onDespose] // Тут не должно быть зависимости onDespose, так как этот useEffect создается и живет один раз на все время существования компонента
        );

        useEffect(() => {
            if (inputRef.current) {
                if (!placeholderValueAutoDiff) {
                    setCalculateSmartPlaceholder(smartPlaceholder);
                    return;
                }
                if (typeof smartPlaceholder === 'string' && value) {
                    const invisiblePart = smartPlaceholder.substr(0, value.length);
                    const visiblePart = smartPlaceholder.substring(value.length);
                    setCalculateSmartPlaceholder(
                        <>
                            <Invisible>{invisiblePart}</Invisible>
                            <span>{visiblePart}</span>
                        </>
                    );
                    return;
                }
            }
            setCalculateSmartPlaceholder(smartPlaceholder);
        }, [smartPlaceholder, placeholderValueAutoDiff, value]);

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

        return (
            <Box>
                {smartPlaceholder && (
                    <PlaceholderWrapper>
                        <Placeholder ref={placeholderRef} design={design} size={size}>
                            {calculateSmartPlaceholder}
                        </Placeholder>
                    </PlaceholderWrapper>
                )}
                <StyledInput
                    ref={inputRef}
                    value={value}
                    size={size}
                    design={design}
                    onScroll={handleScroll}
                    {...attrs}
                />
            </Box>
        );
    }
);

NativeInput.displayName = 'NativeInput';
export default NativeInput;
