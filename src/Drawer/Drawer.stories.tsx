import React from 'react';
import { Story, Meta } from 'storybook';
import { Drawer, DrawerProps } from './Drawer';
import { Button } from '../Button';
import { Groups } from '../Groups';
import { Select } from '../Select';
import { DrawerDemo } from './Drawer.styles';
import { useModal } from '../Modal';
import { Screen } from '@fcc/ui-primitives';

export default {
    title: 'Development/Drawer',
    component: Drawer,
} as Meta;

export const Overview: Story<DrawerProps> = (args) => {
    const [isOpen, setOpen] = React.useState(false);
    return (
        <>
            <Button onClick={() => setOpen(true)}>Show Drawer</Button>
            <Drawer isOpen={isOpen} onClose={() => setOpen(false)} {...args}>
                <Drawer.Layout>
                    <Drawer.Head>
                        <Drawer.Title>Документы для валютного контроля</Drawer.Title>
                        <Drawer.SubTitle>Drawer SubHeader</Drawer.SubTitle>
                    </Drawer.Head>
                    <Drawer.Body>
                        <DrawerDemo>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Amet cursus sit amet dictum sit amet justo donec enim. Sit
                            amet porttitor eget dolor morbi non. Ipsum consequat nisl vel pretium lectus quam id leo in.
                            Duis ut diam quam nulla porttitor massa. Id volutpat lacus laoreet non. Etiam non quam lacus
                            suspendisse faucibus. Mollis aliquam ut porttitor leo a diam. Auctor urna nunc id cursus
                            metus aliquam. In dictum non consectetur a erat nam at lectus. Facilisi cras fermentum odio
                            eu feugiat. Risus commodo viverra maecenas accumsan. Interdum velit euismod in pellentesque
                            massa placerat duis ultricies. Ac ut consequat semper viverra nam libero justo. Dapibus
                            ultrices in iaculis nunc sed augue lacus viverra.
                        </DrawerDemo>
                        <Select placeholder='Выберите значение'>
                            <Select.Option>Значение 1</Select.Option>
                            <Select.Option>Значение 2</Select.Option>
                            <Select.Option>Значение 3</Select.Option>
                            <Select.Option>Значение 4</Select.Option>
                            <Select.Option>Значение 5</Select.Option>
                        </Select>
                    </Drawer.Body>
                    <Drawer.Footer>
                        <Groups>
                            <Button size='l' design='outline'>
                                Button example
                            </Button>
                            <Button size='l' design='accent' onClick={() => setOpen(false)}>
                                Close
                            </Button>
                        </Groups>
                    </Drawer.Footer>
                </Drawer.Layout>
            </Drawer>
        </>
    );
};
export const WithLockBody: Story<DrawerProps> = (args) => {
    const [isOpen, setOpen] = React.useState(false);
    return (
        <>
            <Groups>
                <Button onClick={() => setOpen(true)}>Show Drawer</Button>
            </Groups>
            <Drawer lockBodyScroll noScroll={scroll} isOpen={isOpen} onClose={() => setOpen(false)} {...args}>
                <Drawer.Layout>
                    <Drawer.Head>
                        <Drawer.Title>Enter SMS-code</Drawer.Title>
                        <Drawer.SubTitle>Drawer SubHeader</Drawer.SubTitle>
                    </Drawer.Head>
                    <Drawer.Body scroll={scroll}>
                        <DrawerDemo>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Amet cursus sit amet dictum sit amet justo donec enim. Sit
                            amet porttitor eget dolor morbi non. Ipsum consequat nisl vel pretium lectus quam id leo in.
                            Duis ut diam quam nulla porttitor massa. Id volutpat lacus laoreet non. Etiam non quam lacus
                            suspendisse faucibus. Mollis aliquam ut porttitor leo a diam. Auctor urna nunc id cursus
                            metus aliquam. In dictum non consectetur a erat nam at lectus. Facilisi cras fermentum odio
                            eu feugiat. Risus commodo viverra maecenas accumsan. Interdum velit euismod in pellentesque
                            massa placerat duis ultricies. Ac ut consequat semper viverra nam libero justo. Dapibus
                            ultrices in iaculis nunc sed augue lacus viverra. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
                            cursus sit amet dictum sit amet justo donec enim. Sit amet porttitor eget dolor morbi non.
                            Ipsum consequat nisl vel pretium lectus quam id leo in. Duis ut diam quam nulla porttitor
                            massa. Id volutpat lacus laoreet non. Etiam non quam lacus suspendisse faucibus. Mollis
                            aliquam ut porttitor leo a diam. Auctor urna nunc id cursus metus aliquam. In dictum non
                            consectetur a erat nam at lectus. Facilisi cras fermentum odio eu feugiat. Risus commodo
                            viverra maecenas accumsan. Interdum velit euismod in pellentesque massa placerat duis
                            ultricies. Ac ut consequat semper viverra nam libero justo. Dapibus ultrices in iaculis nunc
                            sed augue lacus viverra.
                        </DrawerDemo>
                    </Drawer.Body>
                    <Drawer.Footer>
                        <Groups>
                            <Button size='l' design='outline'>
                                Button example
                            </Button>
                            <Button size='l' design='accent' onClick={() => setOpen(false)}>
                                Close
                            </Button>
                        </Groups>
                    </Drawer.Footer>
                </Drawer.Layout>
            </Drawer>
        </>
    );
};
WithLockBody.storyName = 'С блокировкой скролла у body';
export const WithScroll: Story<DrawerProps> = (args) => {
    const [isOpen, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState(false);
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    const open = React.useCallback((scroll) => {
        setOpen(true);
        setScroll(scroll);
    }, []);
    return (
        <>
            <Groups>
                <Button onClick={() => open(true)}>Show Drawer</Button>
            </Groups>
            <Drawer noScroll={scroll} isOpen={isOpen} onClose={() => setOpen(false)} {...args}>
                <Drawer.Layout>
                    <Drawer.Head>
                        <Drawer.Title>Enter SMS-code</Drawer.Title>
                        <Drawer.SubTitle>Drawer SubHeader</Drawer.SubTitle>
                    </Drawer.Head>
                    <Drawer.Body scroll={scroll}>
                        {arr.map((v, i) => (
                            <React.Fragment key={i}>
                                <DrawerDemo>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Amet cursus sit amet dictum sit amet
                                    justo donec enim. Sit amet porttitor eget dolor morbi non. Ipsum consequat nisl vel
                                    pretium lectus quam id leo in. Duis ut diam quam nulla porttitor massa. Id volutpat
                                    lacus laoreet non. Etiam non quam lacus suspendisse faucibus. Mollis aliquam ut
                                    porttitor leo a diam. Auctor urna nunc id cursus metus aliquam. In dictum non
                                    consectetur a erat nam at lectus. Facilisi cras fermentum odio eu feugiat. Risus
                                    commodo viverra maecenas accumsan. Interdum velit euismod in pellentesque massa
                                    placerat duis ultricies. Ac ut consequat semper viverra nam libero justo. Dapibus
                                    ultrices in iaculis nunc sed augue lacus viverra.
                                </DrawerDemo>
                                <Select placeholder='Выберите значение'>
                                    <Select.Option>Значение 1</Select.Option>
                                    <Select.Option>Значение 2</Select.Option>
                                    <Select.Option>Значение 3</Select.Option>
                                    <Select.Option>Значение 4</Select.Option>
                                    <Select.Option>Значение 5</Select.Option>
                                </Select>
                            </React.Fragment>
                        ))}
                    </Drawer.Body>
                    <Drawer.Footer>
                        <Groups>
                            <Button size='l' design='outline'>
                                Button example
                            </Button>
                            <Button size='l' design='accent' onClick={() => setOpen(false)}>
                                Close
                            </Button>
                        </Groups>
                    </Drawer.Footer>
                </Drawer.Layout>
            </Drawer>
        </>
    );
};
WithScroll.storyName = 'Прокрутка длинного контента';
export const DrawerInside: Story<DrawerProps> = (args) => {
    const [isOpen, setOpen] = React.useState(false);
    const [isOpenNext, setOpenNext] = React.useState(false);
    return (
        <>
            <Groups>
                <Button onClick={() => setOpen(true)}>Show Drawer</Button>
            </Groups>
            <Drawer isOpen={isOpen} onClose={() => setOpen(false)}>
                <Drawer.Layout>
                    <Drawer.Head>
                        <Drawer.Title>Enter SMS-code</Drawer.Title>
                        <Drawer.SubTitle>Drawer SubHeader</Drawer.SubTitle>
                    </Drawer.Head>
                    <Drawer.Body>
                        <>
                            <Groups>
                                <Button onClick={() => setOpenNext(true)}>Show Drawer</Button>
                            </Groups>
                            <Drawer isOpen={isOpenNext} onClose={() => setOpenNext(false)} {...args}>
                                <Drawer.Layout>
                                    <Drawer.Head>
                                        <Drawer.Title>Enter SMS-code</Drawer.Title>
                                        <Drawer.SubTitle>Drawer SubHeader</Drawer.SubTitle>
                                    </Drawer.Head>
                                    <Drawer.Body>
                                        <DrawerDemo>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Amet cursus sit amet
                                            dictum sit amet justo donec enim. Sit amet porttitor eget dolor morbi non.
                                            Ipsum consequat nisl vel pretium lectus quam id leo in. Duis ut diam quam
                                            nulla porttitor massa. Id volutpat lacus laoreet non. Etiam non quam lacus
                                            suspendisse faucibus. Mollis aliquam ut porttitor leo a diam. Auctor urna
                                            nunc id cursus metus aliquam. In dictum non consectetur a erat nam at
                                            lectus. Facilisi cras fermentum odio eu feugiat. Risus commodo viverra
                                            maecenas accumsan. Interdum velit euismod in pellentesque massa placerat
                                            duis ultricies. Ac ut consequat semper viverra nam libero justo. Dapibus
                                            ultrices in iaculis nunc sed augue lacus viverra.
                                        </DrawerDemo>
                                    </Drawer.Body>
                                    <Drawer.Footer>
                                        <Groups>
                                            <Button size='l' design='outline'>
                                                Button example
                                            </Button>
                                            <Button size='l' design='accent' onClick={() => setOpenNext(false)}>
                                                Close
                                            </Button>
                                        </Groups>
                                    </Drawer.Footer>
                                </Drawer.Layout>
                            </Drawer>
                        </>
                    </Drawer.Body>
                    <Drawer.Footer>
                        <Groups>
                            <Button size='l' design='outline'>
                                Button example
                            </Button>
                            <Button size='l' design='accent' onClick={() => setOpen(false)}>
                                Close
                            </Button>
                        </Groups>
                    </Drawer.Footer>
                </Drawer.Layout>
            </Drawer>
        </>
    );
};
DrawerInside.storyName = 'Drawer внутри Drawer';
export const DynamicContent: Story<DrawerProps> = (args) => {
    const [isOpen, setOpen] = React.useState(false);
    const [toggle, setToggle] = React.useState(true);
    return (
        <>
            <Button onClick={() => setOpen(true)}>Show Drawer</Button>
            <Drawer isOpen={isOpen} onClose={() => setOpen(false)} {...args}>
                <Drawer.Layout>
                    <Drawer.Head>
                        <Drawer.Title>Enter SMS-code</Drawer.Title>
                        <Drawer.SubTitle>Drawer SubHeader</Drawer.SubTitle>
                    </Drawer.Head>
                    <Drawer.Body>
                        {toggle ? (
                            <DrawerDemo>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Amet cursus sit amet dictum sit amet justo
                                donec enim. Sit amet porttitor eget dolor morbi non. Ipsum consequat nisl vel pretium
                                lectus quam id leo in. Duis ut diam quam nulla porttitor massa. Id volutpat lacus
                                laoreet non. Etiam non quam lacus suspendisse faucibus. Mollis aliquam ut porttitor leo
                                a diam. Auctor urna nunc id cursus metus aliquam. In dictum non consectetur a erat nam
                                at lectus. Facilisi cras fermentum odio eu feugiat. Risus commodo viverra maecenas
                                accumsan. Interdum velit euismod in pellentesque massa placerat duis ultricies. Ac ut
                                consequat semper viverra nam libero justo. Dapibus ultrices in iaculis nunc sed augue
                                lacus viverra.
                            </DrawerDemo>
                        ) : (
                            <DrawerDemo>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Amet cursus sit amet dictum sit amet justo
                                donec enim. Sit amet porttitor eget dolor morbi non. Ipsum consequat nisl vel pretium
                                lectus quam id leo in. Duis ut diam quam nulla porttitor massa. Id volutpat lacus
                                laoreet non. Etiam non quam lacus suspendisse faucibus. Mollis aliquam ut porttitor leo
                                a diam. Auctor urna nunc id cursus metus aliquam. In dictum non consectetur a erat nam
                                at lectus. Facilisi cras fermentum odio eu feugiat. Risus commodo viverra maecenas
                                accumsan. Interdum velit euismod in pellentesque massa placerat duis ultricies. Ac ut
                                consequat semper viverra nam libero justo. Dapibus ultrices in iaculis nunc sed augue
                                lacus viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Amet cursus sit amet dictum sit amet
                                justo donec enim. Sit amet porttitor eget dolor morbi non. Ipsum consequat nisl vel
                                pretium lectus quam id leo in. Duis ut diam quam nulla porttitor massa. Id volutpat
                                lacus laoreet non. Etiam non quam lacus suspendisse faucibus. Mollis aliquam ut
                                porttitor leo a diam. Auctor urna nunc id cursus metus aliquam. In dictum non
                                consectetur a erat nam at lectus. Facilisi cras fermentum odio eu feugiat. Risus commodo
                                viverra maecenas accumsan. Interdum velit euismod in pellentesque massa placerat duis
                                ultricies. Ac ut consequat semper viverra nam libero justo. Dapibus ultrices in iaculis
                                nunc sed augue lacus viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet cursus sit amet
                                dictum sit amet justo donec enim. Sit amet porttitor eget dolor morbi non. Ipsum
                                consequat nisl vel pretium lectus quam id leo in. Duis ut diam quam nulla porttitor
                                massa. Id volutpat lacus laoreet non. Etiam non quam lacus suspendisse faucibus. Mollis
                                aliquam ut porttitor leo a diam. Auctor urna nunc id cursus metus aliquam. In dictum non
                                consectetur a erat nam at lectus. Facilisi cras fermentum odio eu feugiat. Risus commodo
                                viverra maecenas accumsan. Interdum velit euismod in pellentesque massa placerat duis
                                ultricies. Ac ut consequat semper viverra nam libero justo. Dapibus ultrices in iaculis
                                nunc sed augue lacus viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet cursus sit amet
                                dictum sit amet justo donec enim. Sit amet porttitor eget dolor morbi non. Ipsum
                                consequat nisl vel pretium lectus quam id leo in. Duis ut diam quam nulla porttitor
                                massa. Id volutpat lacus laoreet non. Etiam non quam lacus suspendisse faucibus. Mollis
                                aliquam ut porttitor leo a diam. Auctor urna nunc id cursus metus aliquam. In dictum non
                                consectetur a erat nam at lectus. Facilisi cras fermentum odio eu feugiat. Risus commodo
                                viverra maecenas accumsan. Interdum velit euismod in pellentesque massa placerat duis
                                ultricies. Ac ut consequat semper viverra nam libero justo. Dapibus ultrices in iaculis
                                nunc sed augue lacus viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet cursus sit amet
                                dictum sit amet justo donec enim. Sit amet porttitor eget dolor morbi non. Ipsum
                                consequat nisl vel pretium lectus quam id leo in. Duis ut diam quam nulla porttitor
                                massa. Id volutpat lacus laoreet non. Etiam non quam lacus suspendisse faucibus. Mollis
                                aliquam ut porttitor leo a diam. Auctor urna nunc id cursus metus aliquam. In dictum non
                                consectetur a erat nam at lectus. Facilisi cras fermentum odio eu feugiat. Risus commodo
                                viverra maecenas accumsan. Interdum velit euismod in pellentesque massa placerat duis
                                ultricies. Ac ut consequat semper viverra nam libero justo. Dapibus ultrices in iaculis
                                nunc sed augue lacus viverra.
                            </DrawerDemo>
                        )}
                    </Drawer.Body>
                    <Drawer.Footer>
                        <Groups>
                            <Button size='l' design='outline' onClick={() => setToggle(!toggle)}>
                                Button example
                            </Button>
                            <Button size='l' design='accent' onClick={() => setOpen(false)}>
                                Close
                            </Button>
                        </Groups>
                    </Drawer.Footer>
                </Drawer.Layout>
            </Drawer>
        </>
    );
};
DynamicContent.storyName = 'Динамический контент';

export const ConfirmDrawer: Story<DrawerProps> = (args) => {
    const [isOpen, setOpen] = React.useState(false);
    const [toggle, setToggle] = React.useState(true);
    const confirmModal = async (message) => {
        return new Promise((resolve) => {
            const [open, close] = useModal(
                <Screen style={{ minWidth: '600px' }}>
                    <Screen.Head>
                        <Screen.Title>Требуется подтверждение</Screen.Title>
                    </Screen.Head>
                    <Screen.Body>{message}</Screen.Body>
                    <Screen.Footer>
                        <Groups>
                            <Button size='l' design='outline' onClick={() => close('Нажали "Отмена"')}>
                                Отмена
                            </Button>
                            <Button size='l' design='accent' onClick={() => close('Нажали "Ок"')}>
                                Ок
                            </Button>
                        </Groups>
                    </Screen.Footer>
                </Screen>,
                resolve
            );
            open();
        });
    };

    const handleCustomClose = React.useCallback(
        () =>
            confirmModal('Вы уверены, что хотите закрыть окно?').then((result) => {
                if (result !== 'Нажали "Отмена"') {
                    setOpen(false);
                    return true;
                }
                return false;
            }),
        []
    );

    return (
        <>
            <Button onClick={() => setOpen(true)}>Show Drawer</Button>
            <Drawer isOpen={isOpen} onClose={handleCustomClose} {...args}>
                <Drawer.Layout>
                    <Drawer.Head>
                        <Drawer.Title>Enter SMS-code</Drawer.Title>
                        <Drawer.SubTitle>Drawer SubHeader</Drawer.SubTitle>
                    </Drawer.Head>
                    <Drawer.Body>
                        <DrawerDemo>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Amet cursus sit amet dictum sit amet justo donec enim. Sit
                            amet porttitor eget dolor morbi non. Ipsum consequat nisl vel pretium lectus quam id leo in.
                            Duis ut diam quam nulla porttitor massa. Id volutpat lacus laoreet non. Etiam non quam lacus
                            suspendisse faucibus. Mollis aliquam ut porttitor leo a diam. Auctor urna nunc id cursus
                            metus aliquam. In dictum non consectetur a erat nam at lectus. Facilisi cras fermentum odio
                            eu feugiat. Risus commodo viverra maecenas accumsan. Interdum velit euismod in pellentesque
                            massa placerat duis ultricies. Ac ut consequat semper viverra nam libero justo. Dapibus
                            ultrices in iaculis nunc sed augue lacus viverra.
                        </DrawerDemo>
                    </Drawer.Body>
                    <Drawer.Footer>
                        <Groups>
                            <Button size='l' design='outline' onClick={() => setToggle(!toggle)}>
                                Button example
                            </Button>
                            <Button size='l' design='accent' onClick={() => setOpen(false)}>
                                Close
                            </Button>
                        </Groups>
                    </Drawer.Footer>
                </Drawer.Layout>
            </Drawer>
        </>
    );
};
