import React, { useRef, useCallback, useState, useEffect, FC, ComponentProps } from 'react';
import { useWindowResize } from 'vienna.react-use';
import { GoRightIcon } from 'vienna.icons';
import { Tooltip } from '../../Tooltip';
import { Box, Text, Icon, Link, HiddenText, PropsBox } from './Option.styles';
import { BoxStyled } from '../../Utils/styled';
import { ComponentWrapper } from '../../Utils/ComponentWrapper/ComponentWrapper';

export interface BreadcrumbsOptionProps
    extends Omit<BoxStyled<typeof Box, PropsBox>, 'onClick'>,
        Pick<ComponentProps<typeof Link>, 'href' | 'rel' | 'type' | 'target' | 'hrefLang'> {
    size?: PropsBox['$size'];
    noHomeButton?: boolean;
    first?: PropsBox['$first'];
    preLast?: PropsBox['$preLast'];
    altText?: string;
    last?: boolean;
    withoutTooltip?: boolean;
    value?: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLDivElement>, data: { value: React.ReactNode }) => void;
}

export const Option: FC<BreadcrumbsOptionProps> = (props) => {
    const {
        onClick,
        value,
        size,
        last,
        preLast,
        first,
        noHomeButton,
        children,
        altText = '',
        withoutTooltip = false,
        ...attrs
    } = props;

    const { href, rel, type, tabIndex, target, hrefLang, ...boxAttrs } = attrs;
    const wrapperAttrs = { href, rel, type, tabIndex, target, hrefLang };

    const containerRef = useRef<HTMLDivElement | null>(null);
    const wrapperRef = useRef<HTMLAnchorElement | null>(null);
    const iconRef = useRef<HTMLDivElement | null>(null);
    const hiddenTextRef = useRef<HTMLDivElement | null>(null);
    const hiddenAltTextRef = useRef<HTMLDivElement | null>(null);
    const checkpointWidth = useRef<number | undefined>(0);

    const [text, setText] = useState(children);
    const [tooltipEnabled, setTooltipEnabled] = useState(false);

    useEffect(() => {
        setText(children);
    }, [children]);

    // У компонента есть сложное поведение
    /*
    Промежуточные шаги, если их названия длинные, могут или сокращаться (переформулироваться в более короткие и общие) или,
    если не получается, то обрезаться с троеточием.
    При наведении на сокращенный/обрезанный шаг показывать тултип с полным названием.
    Последний шаг (где пользователь находится сейчас) - без сокращений и обрезки.
    Предпоследний шаг по возможности без или с минимальными сокращениями/обрезкой.
    */

    /*
        При изменение размеров экрана, компонент  перерасчитывает свои размеры.
        Троеточие проставляется через css-flex
        В случае если полный текст не помещается подставляется текст из altText.
        В случае если компонент предпоследний его min-width для flex считается от половины его длины.
        Для последнего компонента отключается обрезка

        Из-за того, что IE по другому обрабатывает ширины во флексах и text-overflow приходится заводить два дополнительных контейнера для храрнения ширин объектов
        hiddenTextRef
        hiddenAltTextRef
    */

    const resizeHandler = useCallback(() => {
        /*
            Для того, чтобы избежать лишних расчетов и уменьшить число переустановок стейта при изменении размеров экрана, заведем переменную checkpintWidth.
            В начальном состоянии она равно 0, но если элементу пришлось схлопнуться он запомнит ширину родителя начиная с которой он не вместился,
            в дальнейшем мы сможем раскрыть элемент если ширина родителя станет выше сохраненной, а так же мы сократим число установок нового состояния.
        */
        const parentElement = containerRef?.current?.parentNode;

        if (wrapperRef.current && hiddenTextRef?.current && parentElement instanceof HTMLElement) {
            if (!checkpointWidth.current && wrapperRef.current.offsetWidth < hiddenTextRef?.current.offsetWidth) {
                checkpointWidth.current = checkpointWidth.current || parentElement?.offsetWidth;
                setText(altText || children);
                setTooltipEnabled(true);
                return;
            }

            if (checkpointWidth.current && parentElement?.offsetWidth > checkpointWidth.current) {
                checkpointWidth.current = 0;
                setText(children);
                setTooltipEnabled(false);
            }
        }
    }, [children, altText, setText]);

    useEffect(() => {
        // Установка первичных состояний
        resizeHandler();
    }, []);

    useWindowResize(resizeHandler);

    const handleClick = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (typeof onClick === 'function') {
                onClick(e, { value });
            }
        },
        [onClick, value]
    );

    const minWidth =
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        (hiddenAltTextRef?.current?.offsetWidth ||
            (hiddenTextRef?.current && hiddenTextRef?.current?.offsetWidth / 2) ||
            0) + (iconRef?.current?.offsetWidth || 0);

    return (
        <Box
            {...(boxAttrs as PropsBox)}
            ref={containerRef}
            $size={size}
            $first={!noHomeButton ? first : undefined}
            $active={last}
            $minWidth={minWidth}
            $preLast={preLast}
            role='button'
            onClick={handleClick}>
            {!first && (
                <Icon ref={iconRef} $size={size}>
                    <GoRightIcon size={size === 's' ? 'xs' : 's'} />
                </Icon>
            )}
            <ComponentWrapper
                component={withoutTooltip ? undefined : Tooltip}
                props={{
                    disabled: !tooltipEnabled,
                    design: 'dark',
                    action: 'hover',
                    content: children,
                    children,
                }}>
                <Link ref={wrapperRef} {...wrapperAttrs}>
                    <Text $first={first}>{text}</Text>
                    <HiddenText ref={hiddenTextRef}>{children}</HiddenText>
                    <HiddenText ref={hiddenAltTextRef}>{altText}</HiddenText>
                </Link>
            </ComponentWrapper>
        </Box>
    );
};

Option.displayName = 'Option';
