import React from 'react';
import { Story, Meta } from 'storybook';
import { ThemeProvider } from 'styled-components';
import { ViolinIcon as Violin } from 'vienna.icons';
import { Modal, ModalProps } from './Modal';
import { Button } from '../Button';
import { Groups } from '../Groups';
import { confirmModal, Demo } from './ModalDemo.styles';

export default {
    title: 'Development/Modal',
    component: Modal,
    argTypes: {
        size: {
            control: 'select',
            options: [null, 's', 'm', 'l'],
        },
        width: {
            control: 'number',
        },
        closeByFade: {
            control: 'boolean',
        },
        closeByEscape: {
            control: 'boolean',
        },
        hideCloseIcon: {
            control: 'boolean',
        },
        blurOverlay: {
            control: 'boolean',
        },
        stopBubling: {
            control: 'boolean',
        },
        autoFocus: {
            control: 'boolean',
        },
    },
} as Meta;

export const Overview: Story<ModalProps> = (args) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState(false);
    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Show modal</Button>
            <Modal isOpen={isOpen} closeByFade={false} onClose={() => setIsOpen(false)} {...args}>
                <Modal.Layout>
                    <Modal.Head>
                        <Modal.Title>Modal header</Modal.Title>
                    </Modal.Head>
                    <Modal.Body scroll={scroll} maxHeight={100}>
                        <Demo>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris.
                        </Demo>
                        <Button onClick={() => setScroll((prev) => !prev)}>change scroll</Button>
                    </Modal.Body>
                    <Modal.Footer>
                        <Groups>
                            <Button size='l' design='outline' onClick={() => setIsOpen(false)}>
                                Button example
                            </Button>
                            <Button size='l' design='accent' onClick={() => setIsOpen(false)}>
                                Button example
                            </Button>
                        </Groups>
                    </Modal.Footer>
                </Modal.Layout>
            </Modal>
        </>
    );
};

export const ModalInModal: Story<ModalProps> = (args) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const handleCustomClose = React.useCallback(
        async () =>
            confirmModal('Вы уверены, что хотите закрыть окно?').then((result) => {
                if (result !== 'Нажали "Отмена"') {
                    // eslint-disable-next-line no-console
                    console.log('start despose');
                    setIsOpen(false);
                    return true;
                }

                return false;
            }),
        []
    );

    const handleDespose = React.useCallback(() => console.log('end despose'), []);
    const theme = {
        modal: {
            fade: {
                show: {
                    'background-color': 'rgba(43, 255, 51, .24)',
                },
            },
        },
    };
    return (
        <Groups design='vertical'>
            <Button onClick={() => setIsOpen(true)}>Show modal</Button>
            <ThemeProvider theme={theme}>
                <Modal
                    isOpen={isOpen}
                    closeIcon={<Violin size='l' />}
                    onClose={handleCustomClose}
                    onPreDespose={handleDespose}
                    closeByEscape={false}
                    {...args}>
                    <Modal.Layout>
                        <Modal.Head>
                            <Modal.Title>Modal header</Modal.Title>
                        </Modal.Head>
                        <Modal.Body>
                            <Demo>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris.
                            </Demo>
                        </Modal.Body>
                        <Modal.Footer>
                            <Groups>
                                <Button size='l' design='outline' onClick={() => setIsOpen(false)}>
                                    Button example
                                </Button>
                                <Button size='l' design='accent' onClick={() => setIsOpen(false)}>
                                    Button example
                                </Button>
                            </Groups>
                        </Modal.Footer>
                    </Modal.Layout>
                </Modal>
            </ThemeProvider>
        </Groups>
    );
};
ModalInModal.storyName = 'Модальное окно поверх модального окна';

export const ModalCenteredHeader: Story<ModalProps> = (args) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Show modal</Button>
            <Modal isOpen={isOpen} closeByFade={false} onClose={() => setIsOpen(false)} {...args}>
                <Modal.Layout>
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
                            <Button size='l' design='outline' onClick={() => setIsOpen(false)}>
                                Button example
                            </Button>
                            <Button size='l' design='accent' onClick={() => setIsOpen(false)}>
                                Button example
                            </Button>
                        </Groups>
                    </Modal.Footer>
                </Modal.Layout>
            </Modal>
        </>
    );
};
ModalCenteredHeader.storyName = 'Модальное окно с отцентрированным заголовком';

export const ModalCenteredLongHeader: Story<ModalProps> = (args) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Show modal</Button>
            <Modal isOpen={isOpen} closeByFade={false} onClose={() => setIsOpen(false)} {...args}>
                <Modal.Layout>
                    <Modal.Head align={'center'}>
                        <Modal.Title>Very very long Modal header that gets covered when centered</Modal.Title>
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
                            <Button size='l' design='outline' onClick={() => setIsOpen(false)}>
                                Button example
                            </Button>
                            <Button size='l' design='accent' onClick={() => setIsOpen(false)}>
                                Button example
                            </Button>
                        </Groups>
                    </Modal.Footer>
                </Modal.Layout>
            </Modal>
        </>
    );
};
ModalCenteredLongHeader.storyName = 'Модальное окно с отцентрированным и очень длинным заголовком';

export const ModalCloseByEscape: Story<ModalProps> = (args) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Show modal</Button>
            <Modal isOpen={isOpen} closeByFade={false} onClose={() => setIsOpen(false)} {...args} closeByEscape>
                <Modal.Layout>
                    <Modal.Head>
                        <Modal.Title>Title</Modal.Title>
                    </Modal.Head>
                    <Modal.Body>
                        <Demo>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris.
                        </Demo>
                    </Modal.Body>
                </Modal.Layout>
            </Modal>
        </>
    );
};
ModalCloseByEscape.storyName = 'Модальное окно с возможностью закрыть на Escape';

export const ModalWithBlurOverlayAndWithoutClose: Story<ModalProps> = (args) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Show modal</Button>
            <Modal
                isOpen={isOpen}
                closeByFade={false}
                hideCloseIcon
                blurOverlay
                onClose={() => setIsOpen(false)}
                {...args}>
                <Modal.Layout>
                    <Modal.Head>
                        <Modal.Title>Title</Modal.Title>
                        <Modal.SubTitle>Subtitle</Modal.SubTitle>
                    </Modal.Head>
                    <Modal.Body>
                        <Groups design={'vertical'}>
                            <Demo>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris.
                            </Demo>
                        </Groups>
                    </Modal.Body>
                    <Modal.Footer>
                        <Groups>
                            <Button onClick={() => setIsOpen(false)}>Hide modal</Button>
                        </Groups>
                    </Modal.Footer>
                </Modal.Layout>
            </Modal>
        </>
    );
};
ModalWithBlurOverlayAndWithoutClose.storyName = 'Модальное окно с размытым фоном и без возможности закрытия';

export const ModalWithImage: Story<ModalProps> = (args) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Show modal</Button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} {...args}>
                <Modal.Layout>
                    <div
                        style={{
                            width: '100%',
                            height: '200px',
                            borderTopLeftRadius: '16px',
                            borderTopRightRadius: '16px',
                            backgroundSize: 'cover',
                            backgroundImage:
                                'url(https://www.raiffeisen.ru/static/common/corporate/banners/IPS_webinar.png)',
                        }}
                    />
                    <Modal.Head>
                        <Modal.Title>Title</Modal.Title>
                        <Modal.SubTitle>Subtitle</Modal.SubTitle>
                    </Modal.Head>
                    <Modal.Body>
                        <Groups design={'vertical'}>
                            <Demo>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris.
                            </Demo>
                        </Groups>
                    </Modal.Body>
                    <Modal.Footer>
                        <Groups>
                            <Button onClick={() => setIsOpen(false)}>Hide modal</Button>
                        </Groups>
                    </Modal.Footer>
                </Modal.Layout>
            </Modal>
        </>
    );
};
ModalWithImage.storyName = 'Модальное окно с картинкой';

export const ModalWithSubtitle: Story<ModalProps> = (args) => {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Show modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} {...args}>
          <Modal.Layout>
            <Modal.Head>
              <Modal.Title>Modal header</Modal.Title>
              <Modal.SubTitle>Subheading text</Modal.SubTitle>
            </Modal.Head>
            <Modal.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </Modal.Body>
            <Modal.Footer>
              <Groups>
                <Button
                  size="l"
                  design="outline"
                  onClick={() => setIsOpen(false)}
                >
                  Button example
                </Button>
                <Button
                  size="l"
                  design="accent"
                  onClick={() => setIsOpen(false)}
                >
                  Button example
                </Button>
              </Groups>
            </Modal.Footer>
          </Modal.Layout>
        </Modal>
      </>
    )
  }