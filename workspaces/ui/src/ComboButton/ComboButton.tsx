import React, { useState, useCallback } from 'react';
import { Down, Up } from 'vienna.icons';
import { Wrapper, LeftButton, RightButton } from './ComboButton.styles';
import { DropList } from '../DropList';
import { Props as ItemProps } from '../DropList/Item';
import { ButtonProps } from '../Button';

interface Icons {
    up: React.ReactNode;
    down: React.ReactNode;
}

interface Props extends Pick<ButtonProps, 'design' | 'size'> {
    /** Иконки открытого и закрытого состояния */
    icons?: Icons;

    /** Растягивание опций по ширине родителя */
    fitOptions?: boolean;

    /** Опции */
    options?: React.ReactNode[];

    /** Максимальная высота выпадающего списка в пикселях */
    maxListHeight?: number;
}

const getIcon = (icon, size) => {
    size = size === 'xs' ? 's' : 'm';
    return React.cloneElement(icon, { size });
};

const defaultIcons = { down: <Down key={'1'} />, up: <Up key={'1'} /> };

export const ComboButton: React.FC<Props> & {
    Option: React.FC<ItemProps>;
} = (props: React.PropsWithChildren<Props>) => {
    const { children, fitOptions, options = [], size, design, icons, maxListHeight } = props;

    const [isOpen, setOpen] = useState(false);

    const childrenArr = React.Children.toArray(children);

    const handleClick = useCallback(
        function (this: any, event) {
            if (typeof this.props.onClick === 'function') {
                this.props.onClick(event);
            }
            setOpen(!isOpen);
        },
        [isOpen]
    );

    const handleBlur = useCallback(function (this: any, event) {
        if (typeof this.props.onBlur === 'function') {
            this.onBlur.onClick(event);
        }
        setOpen(false);
    }, []);

    const constructOptions = useCallback(
        () =>
            options.map((option: any) =>
                React.cloneElement(option, {
                    onClick: handleClick.bind(option),
                })
            ),
        [options, handleClick]
    );

    const multipleButttons = React.Children.count(children) > 1;
    const dropbBtn: any = multipleButttons ? childrenArr[1] : childrenArr[0];
    const clickableBtn: any = multipleButttons ? childrenArr[0] : null;

    const dropButtonProps = {
        ...dropbBtn.props,
        square: multipleButttons,
        design,
        size,
        onClick: handleClick.bind(dropbBtn),
        onBlur: handleBlur.bind(dropbBtn),
    };

    const icon = getIcon(icons && (isOpen ? icons.up : icons.down), dropbBtn.props.size);

    return (
        <Wrapper>
            {multipleButttons ? (
                <>
                    <LeftButton {...clickableBtn.props} design={design} size={size} />
                    {React.createElement(RightButton, dropButtonProps, [icon])}
                </>
            ) : (
                React.cloneElement(dropbBtn, dropButtonProps, [dropButtonProps.children, icon])
            )}
            {isOpen && (
                <DropList fitItems={fitOptions} maxHeight={maxListHeight}>
                    {constructOptions()}
                </DropList>
            )}
        </Wrapper>
    );
};

ComboButton.displayName = 'ComboButton';
ComboButton.defaultProps = {
    design: 'primary',
    size: 'm',
    fitOptions: true,
    icons: defaultIcons,
};
ComboButton.Option = DropList.Item;
export default ComboButton;
