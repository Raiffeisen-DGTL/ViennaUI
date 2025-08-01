import React, { ReactNode, cloneElement, isValidElement, FC } from 'react';
import { AnyObject } from '../../Utils';

export interface WrapperProps {
    /** Компонент неактивен если true */
    disabled?: boolean;
    /** Управление состоянием */
    open: boolean;
    /** Заголовок */
    header: ReactNode;
    /**  Контент */
    children: ReactNode;
    /** Компонент всегда развернут, если false */
    collapsible?: boolean;
    hideByStyles?: boolean;
    onOpenChange: (open: boolean) => void;
}

export const Wrapper: FC<WrapperProps> = ({
    header,
    children,
    disabled,
    collapsible = true,
    open,
    hideByStyles,
    onOpenChange,
}) => {
    const toggleOpen = () => onOpenChange(!open);

    const handleKeyUp = (event: KeyboardEvent) => {
        if (['Enter', 'Space'].includes(event.code)) {
            toggleOpen();
        }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.code === 'Space') {
            event.preventDefault();
        }
    };

    const headerContent = isValidElement(header)
        ? cloneElement(header, {
              onClick: !disabled && collapsible ? toggleOpen : undefined,
              onKeyUp: handleKeyUp,
              onKeyDown: handleKeyDown,
          } as AnyObject)
        : header;

    const content = isValidElement(children) ? cloneElement(children, { $hide: !open } as AnyObject) : children;

    return (
        <>
            {headerContent}
            {(open || hideByStyles) && content}
        </>
    );
};

Wrapper.displayName = 'Wrapper';
