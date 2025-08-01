import React, { useRef } from 'react';
import { Story, Meta } from 'storybook';
import { DatepickerRange, DatepickerRangeProps } from './DatepickerRange';
import { Body } from 'vienna.ui-primitives/dist/Screen/Screen.styles';
import { Modal } from '../Modal';
import { Flex } from '../Flex';
import { Button } from '../Button';
import { Search } from '../Search';
import { DropList, DropListProps } from '@/DropList';
import { IconContainer } from '@/IconContainer';
import { ManPersonIcon } from 'vienna.icons';

export default {
    title: 'Development/DatepickerRange',
    component: DatepickerRange,
    argTypes: {
        value: {
            control: false,
        },
    },
} as Meta;

export const Overview: Story<DatepickerRangeProps> = () => {
    const [value, setValue] = React.useState('08.04.2024 - 14.04.2024');
    const handleChange = React.useCallback(({ value: data }) => setValue(data), []);
    return <DatepickerRange value={value} onChange={handleChange} />;
};

export const ModalCheck: Story<DatepickerRangeProps> = () => {
    const dropdownRef = React.useRef(null);
    const [isOpen, setIsOpen] = React.useState(false);

    const LookupButton = () => {
        const [isOpen, setIsOpen] = React.useState(false);
        return (
            <>
                <Button onClick={(_) => setIsOpen(true)}>...</Button>
                <Modal isOpen={isOpen} onClose={(_) => setIsOpen(false)}>
                    <Modal.Layout>
                        <Modal.Head>
                            <Modal.Title>Лукап</Modal.Title>
                        </Modal.Head>

                        <Modal.Body>
                            <Search />
                        </Modal.Body>
                    </Modal.Layout>
                </Modal>
            </>
        );
    };

    return (
        <Body>
            <Button onClick={(_) => setIsOpen(true)}>Open Modal</Button>
            <Modal isOpen={isOpen} closeByFade={false}>
                <Modal.Layout>
                    <Modal.Head>
                        <Modal.Title>Форма</Modal.Title>
                    </Modal.Head>
                    <Modal.Body>
                        <Flex direction={'column'} gap={'s2'}>
                            <DatepickerRange dropdownPortal={dropdownRef} />
                            <LookupButton />
                        </Flex>
                    </Modal.Body>
                </Modal.Layout>
            </Modal>
        </Body>
    );
};

export const ViewOnly: Story<DatepickerRangeProps> = () => {
    return <DatepickerRange viewOnly value={'08.04.2024 - 14.04.2024'} />;
};

export const WithOnOutsideClickAndAdditionalOutsideClickRefs: Story<DropListProps> = (args) => {
    const [isOpen, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('');
    const [isOpenModal, setIsOpenModal] = React.useState(false);
    const modalRef = useRef(null);
    const calendarRef = useRef(null);
    const closeIconRef = useRef(null);

    return (
        <>
            <IconContainer onClick={() => setOpen(!isOpen)}>
                <ManPersonIcon />
            </IconContainer>
            {isOpen && (
                <DropList
                    onOutsideClick={() => {
                        setOpen(false);
                    }}
                    additionalOutsideClickRefs={[modalRef, calendarRef, closeIconRef]}
                    {...args}>
                    <DropList.Item>
                        <button
                            onClick={() => {
                                setIsOpenModal(true);
                            }}>
                            click me
                        </button>
                    </DropList.Item>
                    <DropList.Item>lala</DropList.Item>
                </DropList>
            )}
            <Modal
                isOpen={isOpenModal}
                onClose={() => {
                    setIsOpenModal(false);
                }}
                closeIconRef={closeIconRef}>
                <Modal.Layout ref={modalRef}>
                    <Modal.Head>some header</Modal.Head>
                    <Modal.Body>
                        <div>
                            <DatepickerRange
                                value={value}
                                onChange={({ value }) => setValue(value)}
                                calendarBoxRef={calendarRef}
                            />
                        </div>
                    </Modal.Body>
                </Modal.Layout>
            </Modal>
        </>
    );
};

export const WithCalendarAlwaysOpen: Story<DatepickerRangeProps> = () => {
    const [value, setValue] = React.useState('08.04.2024 - 14.04.2024');
    const handleChange = React.useCallback(({ value: data }) => setValue(data), []);
    return <DatepickerRange value={value} onChange={handleChange} isCalendarAlwaysOpen />;
};
