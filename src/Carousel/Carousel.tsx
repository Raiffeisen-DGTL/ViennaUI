import React, { useMemo } from 'react';
import { GoLeftIcon, GoRightIcon } from 'vienna.icons';
import { color } from 'vienna.tokens';
import { Button, ButtonDesign } from '../Button';
import {
    CarouselBox,
    CarouselViewport,
    CarouselTrack,
    HeaderBox,
    TitleBox,
    ButtonContainer,
    CarouselBoxProps,
    CarouselItem,
    ContentWrapper,
} from './Carousel.styles';
import { BoxStyled } from '../Utils/styled';
import { RenderProps } from '../Utils';
import { useCarousel } from './useCarousel';

const getCarouselSettings = (carouselMode: CarouselMode) => {
    if (carouselMode.mode === 'fill') {
        return { mode: carouselMode.mode, itemsVisible: carouselMode.itemsVisible ?? 3, itemWidth: undefined };
    }
    return { mode: carouselMode.mode, itemsVisible: undefined, itemWidth: carouselMode.itemWidth ?? 300 };
};

export const defaultCarouselTestId: CarouselProps['testId'] = {
    leftBtn: 'carousel_left-button',
    rightBtn: 'carousel_right-button',
    track: 'carousel_track',
    item: (item: RenderProps) => `carousel_item-${item.id}`,
};

export type CarouselMode = { mode: 'fill'; itemsVisible?: number } | { mode: 'fixed'; itemWidth?: number };

export interface CarouselControlsRef {
    next: () => void;
    prev: () => void;
    goTo: (index: number) => void;
}

export interface CarouselProps extends BoxStyled<typeof CarouselBox, CarouselBoxProps> {
    /** Заголовок карусели - любой элемент */
    header?: React.ReactNode;
    /** Режим карусели, где параметр mode обязателен. Необязательные параметры: itemsVisible - применим только для mode='fill', itemWidth - применим только для mode='fixed' */
    carouselMode: CarouselMode;
    /** Цвета кнопок в заголовке карусели - доступно в вариантах outline и white */
    buttonDesign?: Extract<ButtonDesign, 'outline' | 'white'>;
    /** Постификс заголовка карусели - любой элемент */
    postfix?: React.ReactNode;
    /** Пролистывать по одному элементу. Если false, то пролистываются сразу все видимые элементы */
    flipByOne?: boolean;
    /** Тянуть и листать */
    dragToFlip?: boolean;
    /** Содержимое карусели */
    items: RenderProps[];
    /** Ref, принимающий функции для программного управления слайдером  */
    controlsRef?: React.MutableRefObject<CarouselControlsRef | null>;
    testId?: {
        leftBtn?: string;
        rightBtn?: string;
        track?: string;
        item?: (item: RenderProps) => string;
    };
    /**
     * Обработчик события клика на кнопку "назад".
     */

    onClickPrev?: () => void;
    /**
     * Обработчик события клика на кнопку "вперед".
     */

    onClickNext?: () => void;
}

export const Carousel: React.FC<CarouselProps> = ({
    header,
    carouselMode,
    postfix,
    buttonDesign = 'outline',
    flipByOne = false,
    dragToFlip = false,
    items,
    testId = defaultCarouselTestId,
    controlsRef,
    onClickPrev,
    onClickNext,
    ...attrs
}) => {
    const { mode, itemsVisible, itemWidth } = getCarouselSettings(carouselMode);
    const {
        currentIndex,
        visibleCount,
        totalChildren,
        viewportRef,
        trackRef,
        nextClickHandler,
        prevClickHandler,
        handleDragStartTrack,
        handleDragMoveTrack,
        handleDragEndTrack,
        goLeftButtonDisabled,
        goRightButtonDisabled,
    } = useCarousel({
        mode,
        items,
        itemsVisible,
        flipByOne,
        dragToFlip,
        itemWidth,
        controlsRef,
        onClickNext,
        onClickPrev,
    });

    const memoizedItems = useMemo(() => {
        return items.map((item) => (
            <CarouselItem
                data-testid={testId?.item?.(item)}
                key={item.id}
                $dragToFlip={dragToFlip}
                $mode={mode}
                $visibleCount={visibleCount}
                $width={itemWidth}>
                {item.render()}
            </CarouselItem>
        ));
    }, [items, dragToFlip, mode, visibleCount, itemWidth]);

    return (
        <CarouselBox {...attrs}>
            <ContentWrapper>
                <HeaderBox>
                    <TitleBox>
                        {header}
                        {postfix}
                    </TitleBox>
                    <ButtonContainer>
                        <Button
                            data-testid={testId?.leftBtn}
                            square
                            design={buttonDesign}
                            onClick={prevClickHandler}
                            disabled={goLeftButtonDisabled}>
                            <GoLeftIcon
                                color={goLeftButtonDisabled ? color.primary.london.c120 : color.primary.brand.primary}
                            />
                        </Button>
                        <Button
                            data-testid={testId?.rightBtn}
                            square
                            design={buttonDesign}
                            onClick={nextClickHandler}
                            disabled={goRightButtonDisabled}>
                            <GoRightIcon
                                color={goRightButtonDisabled ? color.primary.london.c120 : color.primary.brand.primary}
                            />
                        </Button>
                    </ButtonContainer>
                </HeaderBox>
                <CarouselViewport ref={viewportRef} $mode={mode} $itemCount={totalChildren.current}>
                    <CarouselTrack
                        data-testid={testId?.track}
                        ref={trackRef}
                        onMouseDown={handleDragStartTrack}
                        onMouseMove={handleDragMoveTrack}
                        onMouseUp={handleDragEndTrack}
                        onMouseLeave={handleDragEndTrack}
                        $currentIndex={currentIndex}
                        $mode={mode}
                        $width={itemWidth}
                        $visibleCount={visibleCount}
                        $itemCount={totalChildren.current}>
                        {memoizedItems}
                    </CarouselTrack>
                </CarouselViewport>
            </ContentWrapper>
        </CarouselBox>
    );
};
Carousel.displayName = 'Carousel';
