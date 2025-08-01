import React, { MouseEventHandler } from 'react';
import { safe, getWindow, getPadding, RectResult } from '../../utils';
import { Wrapper, HighlightedArea, ClickArea, MaskRect, MaskArea, SvgWrapper } from './styles';

export const defaultMaskTestId: MaskProps['testId'] = {
    overlay: 'mask_overlay', // 'tour-overlay'
};

export interface MaskProps {
    sizes: RectResult;
    padding?: number | number[];
    wrapperPadding?: number | number[];
    onClick?: MouseEventHandler<HTMLDivElement>;
    onClickHighlighted?: MouseEventHandler<SVGRectElement>;
    maskId?: string;
    clipId?: string;
    isOverlayHidden?: boolean;
    radius?: number;
    testId?: {
        overlay?: string;
    };
}

export const Mask: React.FC<MaskProps> = ({
    padding = 8,
    wrapperPadding = 0,
    onClick,
    onClickHighlighted,
    sizes,
    maskId,
    clipId,
    isOverlayHidden = false,
    radius = 16,
    testId = defaultMaskTestId,
}) => {
    const maskID = maskId || uniqueId('mask__');
    const clipID = clipId || uniqueId('clip__');
    const [pt, pr, pb, pl] = getPadding(padding);
    const [wpt, wpr, wpb, wpl] = getPadding(wrapperPadding);
    const { w, h } = getWindow();
    const width = safe(sizes?.width + pl + pr);
    const height = safe(sizes?.height + pt + pb);
    const top = safe(sizes?.top - pt - wpt);
    const left = safe(sizes?.left - pl - wpl);
    const windowWidth = w - wpl - wpr;
    const windowHeight = h - wpt - wpb;

    return (
        <Wrapper $isOverlayHidden={isOverlayHidden} data-testid={testId?.overlay} onClick={onClick}>
            <SvgWrapper
                width={windowWidth}
                height={windowHeight}
                xmlns='http://www.w3.org/2000/svg'
                $windowHeight={windowHeight}
                $windowWidth={windowWidth}
                $wpl={wpl}
                $wpt={wpt}>
                <defs>
                    <mask id={maskID}>
                        <rect x={0} y={0} width={windowWidth} height={windowHeight} fill='white' />
                        <MaskArea $height={height} $width={width} $x={left} $y={top} $rx={radius} />
                    </mask>
                    <clipPath id={clipID}>
                        <polygon
                            points={`0 0, 0 ${windowHeight}, ${left} ${windowHeight}, ${left} ${top}, ${
                                left + width
                            } ${top}, ${left + width} ${top + height}, ${left} ${
                                top + height
                            }, ${left} ${windowHeight}, ${windowWidth} ${windowHeight}, ${windowWidth} 0`}
                        />
                    </clipPath>
                </defs>
                <MaskRect $windowHeight={windowHeight} $windowWidth={windowWidth} $maskId={maskID} />
                <ClickArea
                    $clipId={clipID}
                    $windowWidth={windowWidth}
                    $windowHeight={windowHeight}
                    $top={top}
                    $left={left}
                    $width={width}
                    $height={height}
                />
                <HighlightedArea $x={left} $y={top} $width={width} $height={height} onClick={onClickHighlighted} />
            </SvgWrapper>
        </Wrapper>
    );
};

function uniqueId(prefix: string) {
    return prefix + Math.random().toString(36).substring(2, 16);
}
