import React, { useState, useCallback, FormEvent } from 'react';
import { OpBox, StyledItem } from './Operation.styles';
import { Button } from '../../Button';
import { DropList } from '../../DropList';

export type ClickEvent = (event: FormEvent<HTMLDivElement>, data?: { id?: string; name?: string }) => void;

export interface Props {
    ref?: any;
    id?: string;
    name?: string;
    icon?: React.ReactNode;
    label?: React.ReactNode;
    design?: 'light' | 'dark';
    onClick?: ClickEvent;
    asSubOperation?: boolean;
    hideElipsis?: boolean;
}

export const Operation: React.FC<Props> = React.forwardRef((props: React.PropsWithChildren<Props>, ref: any) => {
    const { id, name, icon, label, children, asSubOperation, design, hideElipsis = false, onClick, ...attrs } = props;

    const [open, setOpen] = useState(false);

    const handleEnter = useCallback(() => {
        setOpen(true);
    }, [setOpen]);

    const handleLeave = useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    const handleClick = useCallback(
        (e) => {
            setOpen(false);
            if (typeof onClick === 'function') {
                onClick(e, { id, name });
            }
        },
        [id, name, onClick]
    );

    return (
        <OpBox ref={ref} design={design} onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={handleClick}>
            <Button design='ghost' {...attrs}>
                {icon}
                {label}
                {!hideElipsis && children && '...'}
            </Button>
            {open && children && (
                <DropList
                    align={asSubOperation ? 'horizontal' : 'vertical'}
                    float={'end'}
                    scrollable={false}
                    margins={asSubOperation ? { x: 0, y: 8 } : { x: 0, y: 0 }}>
                    {React.Children.toArray(children).map((child, idx) => (
                        <StyledItem key={idx}>{child}</StyledItem>
                    ))}
                </DropList>
            )}
        </OpBox>
    );
});

Operation.displayName = 'Toolbar.Operation';
export default Operation;
