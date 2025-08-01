import React, { PropsWithChildren } from 'react';
import { ChevronClassicIcon } from 'vienna.icons';
import { useControlState } from 'vienna.react-use';
import { CollapseWrapper, Header, Content, HeaderIcon, PropsCollapseWrapper } from './Collapse.styles';
import { Text } from '../Typography';
import { Wrapper, WrapperProps } from './Wrapper';

export interface CollapseProps extends Omit<WrapperProps, 'open' | 'onOpenChange'> {
    open?: WrapperProps['open'];
    initiallyOpen?: boolean;
    size?: PropsCollapseWrapper['$size'];
    onOpenChange?: WrapperProps['onOpenChange'];
}

export const Collapse: React.FC<PropsWithChildren<CollapseProps>> & { Wrapper: typeof Wrapper } = ({
    children,
    header,
    initiallyOpen = false,
    disabled,
    collapsible,
    open: openProp,
    size = 'l',
    hideByStyles,
    onOpenChange,
}) => {
    const [open, setOpen] = useControlState({
        value: openProp,
        defaultValue: initiallyOpen,
        defaultStateValue: initiallyOpen,
        onChange: onOpenChange,
    });

    const iconSize = size === 's' ? 's' : 'l';

    return (
        <CollapseWrapper $size={size} $open={open}>
            <Wrapper
                header={
                    <Header role='header' tabIndex={0}>
                        <HeaderIcon>
                            <ChevronClassicIcon size={iconSize} />
                        </HeaderIcon>
                        <Text type={'div'} size={size} color={'currentColor'}>
                            {header}
                        </Text>
                    </Header>
                }
                disabled={disabled}
                collapsible={collapsible}
                open={open}
                hideByStyles={hideByStyles}
                onOpenChange={setOpen}>
                <Content role='content'>
                    {typeof children === 'string' ? (
                        <Text type={'div'} size={size}>
                            {children}
                        </Text>
                    ) : (
                        children
                    )}
                </Content>
            </Wrapper>
        </CollapseWrapper>
    );
};

Collapse.Wrapper = Wrapper;
Collapse.displayName = 'Collapse';
