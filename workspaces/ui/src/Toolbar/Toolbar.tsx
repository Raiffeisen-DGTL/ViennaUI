import React, { FormEvent } from 'react';
import { useCramList } from 'vienna.react-use';
import { Other } from 'vienna.icons';
import { Box } from './Toolbar.styles';
import { Operation, Props as OperationProps } from './Operation';

export type ClickEvent = (event: FormEvent<HTMLDivElement>, data?: { id?: string; name?: string }) => void;

interface Props {
    id?: string;
    name?: string;
    design?: 'light' | 'dark';
    onClick?: ClickEvent;
}

export const Toolbar: React.FC<Props> & { Operation: React.FC<OperationProps> } = (
    props: React.PropsWithChildren<Props>
) => {
    const { children, design, onClick, ...attrs } = props;
    const [containerRef, extraComponentRef, count] = useCramList(children as React.ReactNode[]);
    const childrenArray: any = React.Children.toArray(children as JSX.Element);

    const left = childrenArray.map((child, idx) =>
        React.cloneElement(child, { key: idx, design, onClick: onClick ?? child.props.onClick })
    );

    const right = childrenArray
        .slice(childrenArray.length - count)
        .map((child, idx) =>
            React.cloneElement(child, { key: idx, asSubOperation: true, onClick: onClick ?? child.props.onClick })
        );

    return (
        <Box ref={containerRef} design={design} {...attrs}>
            {left}
            <Operation ref={extraComponentRef} design={design} icon={<Other />} label={'More operation'} hideElipsis>
                {right}
            </Operation>
        </Box>
    );
};

Toolbar.Operation = Operation;
Toolbar.defaultProps = {
    design: 'light',
};

Toolbar.displayName = 'Toolbar';
export default Toolbar;
