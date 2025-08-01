import React from 'react';
import { Story, Meta } from 'storybook';
import { ManPersonIcon } from 'vienna.icons';
import { DropList, DropListProps } from './DropList';
import { Datepicker } from '../Datepicker';
import { IconContainer } from '../IconContainer';
import { ThemeProvider } from 'styled-components';

export default {
    title: 'Development/DropList',
    component: DropList,
} as Meta;

const theme = {
    dropList: {
        itemWrapper: {
            base: {
                background: '#E1F5EB',
                'margin-bottom': '10px',
            },
        },
    },
};

export const Overview: Story<DropListProps> = (args) => {
    const [isOpen, setOpen] = React.useState(false);
    return (
        <IconContainer onClick={() => setOpen(!isOpen)}>
            <ManPersonIcon />
            {isOpen && (
                <DropList {...args}>
                    <DropList.Item>Item 1</DropList.Item>
                    <DropList.Item>Very very long Item 2</DropList.Item>
                    <DropList.Item disabled>Item 3</DropList.Item>
                    <DropList.Item>Item 4</DropList.Item>
                    <DropList.Item selected>Item 5</DropList.Item>
                    <DropList.Item>Item 6</DropList.Item>
                    <DropList.Item>Item 7</DropList.Item>
                </DropList>
            )}
        </IconContainer>
    );
};

export const WithOnOutsideClick: Story<DropListProps> = (args) => {
    const [isOpen, setOpen] = React.useState(false);

    return (
        <IconContainer onClick={() => setOpen(!isOpen)}>
            <ManPersonIcon />

            {isOpen && (
                <DropList
                    onOutsideClick={() => {
                        setOpen(false);
                    }}
                    {...args}>
                    <DropList.Item>Item 1</DropList.Item>
                    <DropList.Item>Very very long Item 2</DropList.Item>
                    <DropList.Item disabled>Item 3</DropList.Item>
                    <DropList.Item>Item 4</DropList.Item>
                    <DropList.Item selected>Item 5</DropList.Item>
                    <DropList.Item>Item 6</DropList.Item>
                    <DropList.Item>Item 7</DropList.Item>
                </DropList>
            )}
        </IconContainer>
    );
};
WithOnOutsideClick.storyName = 'Пример с onOutsideClick';

export const WithOnOutsideClickAndAdditionalOutsideClickRefs: Story<DropListProps> = (args) => {
    const [isOpen, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('');

    const dropListContainerRef = React.useRef(null);
    const calendarRef = React.useRef(null);

    return (
        <div ref={dropListContainerRef}>
            <IconContainer onClick={() => setOpen(!isOpen)}>
                <ManPersonIcon />
            </IconContainer>

            {isOpen && (
                <DropList
                    onOutsideClick={() => {
                        setOpen(false);
                    }}
                    additionalOutsideClickRefs={[dropListContainerRef, calendarRef]}
                    {...args}>
                    <Datepicker value={value} onChange={({ value }) => setValue(value)} calendarBoxRef={calendarRef} />
                </DropList>
            )}
        </div>
    );
};
WithOnOutsideClickAndAdditionalOutsideClickRefs.storyName = 'Пример с onOutsideClick и additionalOutsideClickRefs';

export const WithSubheader: Story<DropListProps> = (args) => {
    const [isOpen, setOpen] = React.useState(false);
    return (
        <IconContainer onClick={() => setOpen(!isOpen)}>
            <ManPersonIcon />
            {isOpen && (
                <DropList fixed {...args}>
                    <DropList.Group label='Subheader'>
                        <DropList.Item>Item 1</DropList.Item>
                    </DropList.Group>
                    <DropList.Group label='Subheader'>
                        <DropList.Item selected>Item 2</DropList.Item>
                        <DropList.Item>Item 3 </DropList.Item>
                    </DropList.Group>
                </DropList>
            )}
        </IconContainer>
    );
};

WithSubheader.storyName = 'Пример с subheader';

export const WithDescription: Story<DropListProps> = (args) => {
    const [isOpen, setOpen] = React.useState(false);
    return (
        <IconContainer onClick={() => setOpen(!isOpen)}>
            <ManPersonIcon />
            {isOpen && (
                <DropList fixed {...args}>
                    <DropList.Item description='description' selected>
                        Item 1
                    </DropList.Item>
                    <DropList.Item>Very very long Item 2</DropList.Item>
                    <DropList.Item disabled>Item 3</DropList.Item>
                    <DropList.Item>Item 4</DropList.Item>
                    <DropList.Item>Item 5</DropList.Item>
                    <DropList.Item>Item 6</DropList.Item>
                    <DropList.Item>Item 7</DropList.Item>
                </DropList>
            )}
        </IconContainer>
    );
};

WithDescription.storyName = 'Пример с decription';

export const MultiLevelDropList: Story<DropListProps> = (args) => {
    const [isOpen, setOpen] = React.useState(false);

    return (
        <IconContainer onClick={() => setOpen(!isOpen)}>
            <ManPersonIcon />
            {isOpen && (
                <DropList onClick={() => setOpen(false)} scrollable {...args}>
                    <DropList.Item>Item 1</DropList.Item>
                    <DropList.Item>Item 2</DropList.Item>
                    <DropList.Item>Item 3</DropList.Item>
                    <DropList.Item>Item 3</DropList.Item>
                    <DropList.Item>Item 3</DropList.Item>
                    <DropList.Item>Item 3</DropList.Item>
                    <DropList.Item>Item 3</DropList.Item>
                    <DropList.Item>Item 3</DropList.Item>
                    <DropList.Item>Item 3</DropList.Item>
                    <DropList.Item>Item 3</DropList.Item>
                    <DropList.Item>Item 3</DropList.Item>
                    <DropList.MenuItem text='Submenu 1 (by click)' action='click'>
                        <DropList
                            align='horizontal'
                            float='end'
                            margins={{ x: 0, y: -8 }}
                            scrollable={false}
                            onClick={() => setOpen(false)}>
                            <DropList.Item>Item 1</DropList.Item>
                            <DropList.MenuItem text='Submenu 2 (by hover)'>
                                <DropList
                                    align='horizontal'
                                    float='end'
                                    margins={{ x: 0, y: -8 }}
                                    scrollable={false}
                                    onClick={() => setOpen(false)}>
                                    <DropList.Item>Item 1</DropList.Item>
                                    <DropList.Item>Item 2</DropList.Item>
                                </DropList>
                            </DropList.MenuItem>
                        </DropList>
                    </DropList.MenuItem>
                    <DropList.Item>Item 5</DropList.Item>
                </DropList>
            )}
        </IconContainer>
    );
};

MultiLevelDropList.storyName = 'Многоуровневое меню';

export const DroplistItemWrapperWithTheme = () => {
    const [isOpen, setOpen] = React.useState(false);
    return (
        <ThemeProvider theme={theme}>
            <IconContainer onClick={() => setOpen(!isOpen)}>
                <ManPersonIcon />
                {isOpen && (
                    <DropList>
                        <DropList.Item>Item 1</DropList.Item>
                        <DropList.Item>Very very long Item 2</DropList.Item>
                        <DropList.Item disabled>Item 3</DropList.Item>
                        <DropList.Item>Item 4</DropList.Item>
                        <DropList.Item selected>Item 5</DropList.Item>
                        <DropList.Item>Item 6</DropList.Item>
                        <DropList.Item>Item 7</DropList.Item>
                    </DropList>
                )}
            </IconContainer>
        </ThemeProvider>
    );
};
DroplistItemWrapperWithTheme.storyName = 'ItemWrapper With Theme';
