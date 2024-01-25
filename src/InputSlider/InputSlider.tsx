import React, {
    useState,
    useCallback,
    useEffect,
    useRef,
    ForwardRefExoticComponent,
    RefAttributes,
    ReactNode,
    ReactElement,
} from 'react';
import { useDebounce, useWindowResize } from '@fcc/react-use';
import {
    Box,
    Container,
    Line,
    Circle,
    Tags,
    Tag,
    PartLeft,
    PartRight,
    LineFront,
    LineBack,
} from './InputSlider.styles';
import { InputNumber } from '../InputMask';
import { InputMaskProps } from '../InputMask/InputMask';

const defaultOptions = (delimiter = '.', min, max) => ({
    mask: Number,
    scale: 2,
    signed: false,
    radix: delimiter,
    mapToRadix: [',', '.'],
    min,
    max,
    prepare: (value: string): string => {
        return value.replace(/\.|,/gm, delimiter);
    },
});

export type InputSliderProps = Omit<InputMaskProps, 'value' | 'min' | 'max'> &
    Pick<InputMaskProps, 'onChange'> & {
        /** Разделитель разряда */
        delimiter?: '.' | ',';
        /** Максимальное значение default = 100 */
        max?: number;
        /** Минимальное значение default = 0 */
        min?: number;
        /** Шаг инкремента default = 1 */
        step?: number;
        /** Количество знаков после запятой default = 0 */
        scale?: number;
        /** Текущее значение */
        value?: number;
        /** Скрывает поле ввода */
        noInput?: boolean;
        /** Засечки */
        children?: ReactNode;
        /** Событие onPointerUp для перехвата момента отпускания слайдера/полоски/тегов обрабатывает мышь и касания */
        onPointerUp?: (event: any) => void;
    };

// параметры сдвига, которые нельзя передать через css или пресеты
const shift = 7;
const shiftRight = 9;

// Функция перевода из числового значения в диапазоне min-max в значение длины линии от 0 до max2 - ширины родителя с учетом сдвигов
const constructValue = (min2: number, max2: number, max: number, val: number) => {
    const value = ((val - min2) / (max2 - min2)) * max;

    // возврат с учетом граничных состояний для правильного отступа
    if (!value || Number.isNaN(value) || value < shift) {
        return shift;
    }
    if (value > max - shiftRight) {
        return max - shiftRight;
    }

    return value;
};

// обратное constructValue преобразование
const reconstructValue = (min: number, max: number, max2: number, val: number) => {
    const value = (val / max) * (max2 - min) + min;

    // возврат с учетом граничных состояний
    if (!value || Number.isNaN(value) || value < min) {
        return min;
    }
    if (value > max2) {
        return max2;
    }

    return value;
};

// Расчет положения тегов (меток)
const constructValueTag = (min, max, max2, val) => ((val - min) * (max2 - shift - shiftRight)) / (max - min);

// Фабрика тегов (меток)
const constructTags = (tags, min, max, max2, design, onClick): any =>
    React.Children.toArray(tags).map((tag: any) =>
        React.cloneElement(tag, {
            val: constructValueTag(min, max, max2, tag.props.val),
            design,
            onClick: (e) => onClick(e, tag.props.val),
        })
    );

export const InputSlider = React.forwardRef<HTMLInputElement, InputSliderProps>((props, ref) => {
    const {
        name,
        delimiter = ',',
        value,
        scale = 0,
        disabled = false,
        design = 'outline',
        min = 0,
        max = 100,
        step = 1,
        children,
        onChange = () => {},
        onPointerUp,
        prefix,
        postfix,
        size = 'l',
        noInput = false,
        ...attrs
    } = props;

    const [isDrag, setIsDrag] = useState<boolean>(false);
    const [tags, setTags] = useState<ReactElement[]>([]);
    const lineFrontRef = useRef<HTMLDivElement>(null);
    const numberInput = useRef<HTMLDivElement>(null);
    const container = useRef<HTMLDivElement>(null);

    const updatePosition = useCallback((val?) => {
        if (lineFrontRef.current) {
            lineFrontRef.current.style.width = `${val}px`;
        }
    }, []);

    const updatePositionDebouncer = updatePosition;
    const changeDebouncer = useDebounce(onChange); // TODO: возможно, что стоит убрать, т.к. delay = 0

    const resizeHandler = useCallback(() => {
        const rect = container.current?.getBoundingClientRect();
        updatePositionDebouncer(constructValue(min, max, rect?.width ?? 0, value ?? 0));
    }, [value, min, max, updatePositionDebouncer]);

    const mouseMoveHandler = useCallback(
        (event: any) => {
            if (container.current) {
                const rect = container.current.getBoundingClientRect();
                const val = (event.type === 'touchmove' ? event.targetTouches[0].clientX : event.clientX) - rect.left;
                updatePositionDebouncer(
                    val < shift ? shift : val > rect.width - shiftRight ? rect.width - shiftRight : val
                );

                const inputValue = Math.ceil(reconstructValue(min, rect.width, max, val) / step) * step;
                if (!disabled && inputValue <= max && inputValue >= min) {
                    if (typeof onChange === 'function') {
                        changeDebouncer(inputValue);
                    }
                }
            }
        },
        [updatePositionDebouncer, onChange, name, max, min, step, disabled, changeDebouncer]
    );

    const mouseUpHandler = useCallback(
        (event) => {
            document.body.removeEventListener('mousemove', mouseMoveHandler);
            document.body.removeEventListener('mouseup', mouseUpHandler);
            document.body.removeEventListener('mouseleave', mouseUpHandler);
            document.body.removeEventListener('touchmove', mouseMoveHandler);
            document.body.removeEventListener('touchend', mouseUpHandler);
            if (typeof onPointerUp === 'function') {
                onPointerUp(event);
            }
        },
        [mouseMoveHandler, onPointerUp]
    );

    const handleMouseDown = useCallback(() => {
        setIsDrag(true);
        document.body.addEventListener('mousemove', mouseMoveHandler);
        document.body.addEventListener('mouseup', mouseUpHandler);
        document.body.addEventListener('mouseleave', mouseUpHandler);
        document.body.addEventListener('touchmove', mouseMoveHandler);
        document.body.addEventListener('touchend', mouseUpHandler);
    }, [mouseMoveHandler, mouseUpHandler, setIsDrag]);

    useEffect(
        () => () => {
            document.body.removeEventListener('mousemove', mouseMoveHandler);
            document.body.removeEventListener('mouseup', mouseUpHandler);
            document.body.removeEventListener('mouseleave', mouseUpHandler);
            document.body.removeEventListener('touchmove', mouseMoveHandler);
            document.body.removeEventListener('touchend', mouseUpHandler);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    const handleClickTag = useCallback(
        (event, value) => {
            if (!disabled && typeof onChange === 'function') {
                onChange(value);
            }
        },
        [disabled, name, onChange]
    );

    useEffect(() => {
        resizeHandler();
        const width = (container.current && container.current.offsetWidth) || 0;
        setTags(constructTags(children, min, max, width, design, handleClickTag));
    }, [value, min, max, children, handleClickTag, design, resizeHandler]);

    useWindowResize(resizeHandler);

    const inputRef = useCallback(
        (elem) => {
            if (elem) {
                (numberInput.current as any) = elem;
                if (typeof ref === 'function') {
                    (ref as (instance: HTMLInputElement | null) => void)(elem);
                }
                if (ref && typeof ref === 'object') {
                    (ref as any).current = elem;
                }
            }
        },
        [ref]
    );

    const handleLineClick = useCallback((event: any) => mouseMoveHandler(event), [mouseMoveHandler]);

    const handleKeyDown = useCallback(
        (event: any) => {
            if (typeof onChange === 'function' && !disabled && value) {
                if (event.key === 'ArrowLeft' && value - step >= min) {
                    onChange(value - step);
                }

                if (event.key === 'ArrowRight' && value + step <= max) {
                    onChange(value + step);
                }
            }
        },
        [onChange, value, step, name, min, max, disabled]
    );

    const handleFocus = useCallback(() => setIsDrag(true), [setIsDrag]);
    const handleBlur = useCallback(() => setIsDrag(false), [setIsDrag]);

    return (
        <Box $disabled={disabled}>
            {noInput && prefix && <PartLeft>{prefix}</PartLeft>}
            <Container $noInput={noInput}>
                <Container ref={container}>
                    {!noInput && (
                        // При необходимости можно расширить компонент передав сюда элемент из props, пока данное усложнение не нужно
                        <InputNumber
                            ref={inputRef}
                            name={name}
                            value={value}
                            disabled={disabled}
                            design={design}
                            size={size}
                            {...defaultOptions(delimiter, min, max)}
                            scale={scale}
                            active={isDrag}
                            prefix={prefix}
                            postfix={postfix}
                            // @ts-ignore TODO fix it later
                            onChange={onChange}
                            {...attrs}
                        />
                    )}
                    <Line onClick={handleLineClick}>
                        <LineFront
                            ref={lineFrontRef}
                            $disabled={disabled}
                            $design={design}
                            $drag={isDrag}
                            $size={size}
                            $noInput={noInput}
                        />
                        <Circle
                            tabIndex={disabled ? -1 : 0}
                            $disabled={disabled}
                            $drag={isDrag}
                            $size={size}
                            onKeyDown={handleKeyDown}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onMouseDown={handleMouseDown}
                            onTouchStart={handleMouseDown}
                        />
                        <LineBack
                            $disabled={disabled}
                            $design={design}
                            $drag={isDrag}
                            $size={size}
                            $noInput={noInput}
                        />
                    </Line>
                </Container>
                {children && <Tags>{tags}</Tags>}
            </Container>
            {noInput && postfix && <PartRight>{postfix}</PartRight>}
        </Box>
    );
}) as ForwardRefExoticComponent<InputSliderProps & RefAttributes<HTMLDivElement>> & { Tag: typeof Tag };

InputSlider.displayName = 'InputSlider';

InputSlider.Tag = Tag;
