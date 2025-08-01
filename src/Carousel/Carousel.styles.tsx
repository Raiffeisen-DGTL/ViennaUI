import styled from 'styled-components';
import { carousel } from 'vienna.ui-theme';
import { getPresets } from '../Utils/styling';

const presets = getPresets(
    carousel,
    'carousel'
)({
    base: null,
    header: null,
    title: null,
    buttonContainer: null,
    item: null,
});

export interface CarouselBoxProps {
    $mode?: string;
    $itemCount?: number;
    $visibleCount?: number;
    $currentIndex?: number;
    $dragToFlip?: boolean;
    $width?: number;
}
export interface CarouselItemProps {
    $mode?: string;
    $visibleCount?: number;
    $dragToFlip?: boolean;
    $width?: number;
    $lastVisibleIndex?: number;
}

export const CarouselBox = styled.div<CarouselBoxProps>`
    position: relative;
    width: 100%;
    overflow: hidden;
`;

export const ContentWrapper = styled.div`
    overflow: visible;
`;

export const HeaderBox = styled.div`
    display: flex;
    ${presets.header}
`;

export const TitleBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: end;
    height: fit-content;
    width: 100%;
    ${presets.title}
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: end;
    ${presets.buttonContainer}
`;

export const CarouselViewport = styled.div<CarouselBoxProps>`
    overflow: hidden;
    width: 100%;
`;

export const CarouselTrack = styled.div<CarouselBoxProps>`
    display: flex;
    width: auto;
    transform: translateX(
        ${(props) =>
            props.$currentIndex !== undefined && props.$visibleCount
                ? `-${props.$currentIndex * (100 / props.$visibleCount)}%`
                : '0'}
    );
`;

export const CarouselItem = styled.div<CarouselItemProps>`
    flex-grow: ${(props) => (props.$mode === 'fill' ? 1 : 0)};
    flex-shrink: 0;
    flex-basis: ${(props) =>
        props.$mode === 'fill' && props.$visibleCount !== undefined
            ? `calc((100% - ${2 * props.$visibleCount * 6}px) / ${props.$visibleCount})`
            : 'auto'};

    width: ${(props) => (props.$mode === 'fixed' ? `${props.$width}px` : '100%')};
    &:last-child {
        margin-right: 0;
    }
    &:first-child {
        margin-left: 0;
    }

    cursor: ${(props) => (props.$dragToFlip ? 'grab' : 'auto')};
    ${presets.item}
`;
