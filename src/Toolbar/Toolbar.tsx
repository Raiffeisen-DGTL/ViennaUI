import React, { FC, ReactNode } from 'react';
import { MoreHor } from 'vienna.icons';
import { Whitespace } from '../Whitespace';
import { useCustomCramList } from './hooks';
import { Box, PropsBox } from './Toolbar.styles';
import { ClickEvent, Operation } from './Operation';
import { BoxStyled } from '../Utils/styled';

export interface ToolbarProps extends BoxStyled<typeof Box, PropsBox> {
    design?: PropsBox['$design'];
    id?: string;
    name?: string;
    onClick?: ClickEvent;
    /** Текст на кнопке действий, появляющейся в случае переполнения options */
    moreOptionsText?: string;
    /** Вид иконок кнопок, которые содержат выпадающий список  */
    enableArrowIcons?: boolean;
}

export const Toolbar: FC<ToolbarProps> & { Operation: typeof Operation } = (props) => {
    const {
        children,
        design = 'light',
        onClick,
        enableArrowIcons = false,
        moreOptionsText = 'More options',
        ...attrs
    } = props;

    const childrenArray: any = React.Children.toArray(children as JSX.Element).filter(Boolean);
    const filteredLeft = childrenArray.filter((child) => !child.props.asSubOperation);
    const filteredRight = childrenArray.filter((child) => child.props.asSubOperation);
    const [containerRef, extraComponentRef, count] = useCustomCramList(
        children as ReactNode[],
        0,
        Boolean(filteredRight.length)
    );

    const left = filteredLeft.map((child, idx) =>
        React.cloneElement(child, { key: idx, design, onClick: onClick ?? child.props.onClick, enableArrowIcons })
    );

    const right = [...filteredRight, ...childrenArray.slice(childrenArray.length - count)]
        .map((child, idx) =>
        React.cloneElement(child, {
            key: idx,
            enableArrowIcons,
            asSubOperation: true,
            onClick: onClick ?? child.props.onClick,
        })
    );

    return (
        <Box {...(attrs as {})} ref={containerRef} $design={design}>
            {left}
            <Whitespace ml='auto' mr='0em'>
                <Operation
                    ref={extraComponentRef}
                    design={design}
                    icon={<MoreHor />}
                    label={moreOptionsText}
                    hideEllipsis>
                    {right}
                </Operation>
            </Whitespace>
        </Box>
    );
};

Toolbar.Operation = Operation;

Toolbar.displayName = 'Toolbar';
