import React, { useState } from 'react';
import { Story, Meta } from 'storybook';
import { Tour } from '.';
import { Button } from '../Button';
import { StepType } from './components/Tour/types';
import { Flex } from '../Flex';
import { Groups, Logotype, Modal } from '..';
import { Demo } from '../Modal/ModalDemo.styles';

export default {
    title: 'Development/Tour',
    component: Tour,
    argTypes: {
        width: {
            control: 'text',
        },
        position: {
            control: 'select',
            options: ['top', 'right', 'bottom', 'left', 'center'],
        },
        maskId: {
            control: 'text',
        },
        clipId: {
            control: 'text',
        },
        closeByFade: {
            control: 'boolean',
        },
        defaultOpen: {
            control: 'boolean',
        },
        startAt: {
            control: 'number',
        },
        currentStep: {
            control: 'number',
        },
        localization: {
            control: 'object',
        },
        padding: {
            control: 'number',
        },
        value: {
            control: false,
        },
    },
} as Meta;

export const Overview: Story<any> = () => {
    const [showModal, setShowModal] = useState(false);
    const [showTour, setShowTour] = useState(false);

    const show = () => setShowTour(true);

    const steps: StepType[] = [
        {
            selector: '.start-tour',
            highlightedSelectors: [],
            type: 'accent',
            content: {
                title: 'Начнем знакомиться?',
                description: 'Это accent',
            },
            backButtonText: 'Позже',
            nextButtonText: 'Начнем',
        },
        {
            selector: '.fist-step',
            content: {
                title: 'Title 1',
                description: 'description 1',
                image: 'https://insider-test.raiffeisen.ru/uploads/article/11320/previews/detail.jpg?1725975927224',
            },
            maskRadius: 8,
            onEnter: () => console.log('ENTER'),
            onLeave: () => console.log('LEAVE'),
        },
        {
            selector: '.second-step',
            content: { title: 'Title 2', description: 'description 2' },
            maskRadius: 8,
            position: 'right',
        },
        {
            selector: '.third-step',
            type: 'accent',
            content: { title: 'Title 3', description: 'description 3' },
            position: 'left',
        },
        {
            selector: '.fourth-step',
            content: { title: 'Title 4', description: 'description 4' },
            position: 'bottom',
            onLeave: ({ nextStep }) => {
                if (nextStep === 5) {
                    setShowTour(false);
                    setShowModal(true);
                }
            },
        },
        {
            selector: '.modal-step',
            content: { title: 'Modal', description: 'modal description' },
            position: 'bottom',
            onLeave: () => {
                setShowTour(false);
                setShowModal(false);
            },
        },
        {
            selector: '.fifth-step',
            content: { title: 'Title 5', description: 'description 5' },
            position: 'left',
            onLeave: ({ nextStep }) => {
                if (nextStep === 5) {
                    setShowTour(false);
                    setShowModal(true);
                }
            },
        },
    ];

    return (
        <div>
            <Tour 
                isOpen={showTour}
                steps={steps}
                onChangeIsOpen={(val) => setShowTour(val)}
                beforeClose={() => console.log('beforeClose')}
                afterOpen={() => console.log('afterOpen')}
                onClosePopover={()=> console.log('onClosePopover')}
            />
            <Flex direction={'column'} alignItems={'flex-start'} gap={'s16'} style={{ width: '100%', padding: '24px' }}>
                <Button className={'start-tour'} onClick={show}>
                    Show tour
                </Button>
                <Flex direction={'column'} gap={'s16'} style={{ width: '100%' }}>
                    <Logotype className='fist-step' size='s' style={{ alignSelf: 'flex-end' }} />
                    <Logotype className='second-step' size='m' style={{ alignSelf: 'flex-start' }} />
                    <Logotype className='third-step' size='l' style={{ alignSelf: 'flex-end' }} />
                    <Logotype className='fourth-step' size='xl' style={{ alignSelf: 'flex-start' }} />
                    <Logotype className='fifth-step' size='xxl' style={{ alignSelf: 'center' }} />
                </Flex>
            </Flex>
            <Modal
                isOpen={showModal}
                closeByFade={false}
                hideCloseIcon={false}
                closeByEscape={false}
                onAfterOpen={show}
                onPreDispose={show}>
                <Modal.Layout className='modal-step'>
                    <Modal.Head align={'center'}>
                        <Modal.Title>Modal Header</Modal.Title>
                        <Modal.SubTitle>Subheading text</Modal.SubTitle>
                    </Modal.Head>
                    <Modal.Body>
                        <Demo>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris.
                        </Demo>
                    </Modal.Body>
                    <Modal.Footer>
                        <Groups>
                            <Button size='l' design='outline'>
                                Button example
                            </Button>
                            <Button size='l' design='accent'>
                                Button example
                            </Button>
                        </Groups>
                    </Modal.Footer>
                </Modal.Layout>
            </Modal>
        </div>
    );
};
