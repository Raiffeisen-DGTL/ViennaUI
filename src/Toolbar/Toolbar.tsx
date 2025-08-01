import React, { FC, ReactElement, ReactNode } from 'react';
import { MoreHorIcon } from 'vienna.icons';
import { Whitespace } from '../Whitespace';
import { useCustomCramList } from './hooks';
import { Box, PropsBox } from './Toolbar.styles';
import { ClickEvent, Operation } from './Operation';
import { BoxStyled } from '../Utils/styled';
import { reactNodeIsComponent } from '../Utils';
import { Props as OperationProps } from './Operation/Operation';

export interface ToolbarProps extends Omit<BoxStyled<typeof Box, PropsBox>, 'onClick'> {
    design?: PropsBox['$design'];
    id?: string;
    name?: string;
    onClick?: ClickEvent;
    /** Текст на кнопке действий, появляющейся в случае переполнения options */
    moreOptionsText?: string;
    /** Вид иконок кнопок, которые содержат выпадающий список  */
    enableArrowIcons?: boolean;
    /** Возможность менять расположение дроплиста  */
    isFixed?: boolean;
}

export const Toolbar: FC<ToolbarProps> & { Operation: typeof Operation } = (props) => {
    const {
        children,
        design = 'light',
        onClick,
        enableArrowIcons = false,
        isFixed,
        moreOptionsText = 'More options',
        ...attrs
    } = props;

    const childrenArray: ReactElement<OperationProps>[] = (React.Children.toArray(children) as ReactElement[]).filter(
        Boolean
    );
    const filteredLeft = childrenArray.filter((child) => !child.props.asSubOperation);
    const filteredRight = childrenArray.filter((child) => child.props.asSubOperation);
    const [containerRef, extraComponentRef, count] = useCustomCramList(
        children as ReactNode[],
        0,
        Boolean(filteredRight.length)
    );

    const left = filteredLeft.map((child, idx) => {
        return React.cloneElement(child, {
            key: idx,
            design,
            isFixed,
            onClick: onClick ?? child.props.onClick,
            enableArrowIcons: reactNodeIsComponent(child, Toolbar.Operation) ? enableArrowIcons : undefined,
        });
    });

    const right = [...filteredRight, ...childrenArray.slice(childrenArray.length - count)].map((child, idx) => {
        return React.cloneElement(child, {
            key: idx,
            asSubOperation: true,
            isFixed,
            onClick: onClick ?? child.props.onClick,
            enableArrowIcons: reactNodeIsComponent(child, Toolbar.Operation) ? enableArrowIcons : undefined,
        });
    });

    return (
        <Box {...attrs} ref={containerRef} $design={design}>
            {left}
            <Whitespace ml='auto' mr='0em'>
                <Operation
                    ref={extraComponentRef}
                    design={design}
                    icon={<MoreHorIcon />}
                    label={moreOptionsText}
                    isFixed={isFixed}
                    hideEllipsis>
                    {right}
                </Operation>
            </Whitespace>
        </Box>
    );
};

Toolbar.Operation = Operation;

Toolbar.displayName = 'Toolbar';
