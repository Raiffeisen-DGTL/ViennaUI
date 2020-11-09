import React from 'react';
import { Close } from 'vienna.icons';
import { Popover, PopoverProps } from './Popover';
import { Content, Message } from './Popover.styles';
import { Button } from '..';

test('Popover', () => {
    const snap = snapshot.render(
        <Popover
            design='dark'
            anchor='bottom'
            header='This is header'
            content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
            <Button>Click me</Button>
        </Popover>
    );

    expect(snap).toMatchSnapshot();
});

test('Popover w/ design', () => {
    const designs: PopoverProps['design'][] = ['dark', 'light'];

    designs.forEach((design) => {
        const snap = snapshot.render(
            <Popover
                design={design}
                anchor='bottom'
                header='This is header'
                content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
                <Button>Click me</Button>
            </Popover>
        );

        expect(snap).toMatchSnapshot();
    });
});

test('Popover /w focus', () => {
    const snap = snapshot.shallow(
        <Popover
            design='dark'
            anchor='bottom'
            header='This is header'
            content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
            <Button>Click me</Button>
        </Popover>
    );

    const button = snap.find(Button);
    button.simulate('focus');
    const content = snap.find(Content);

    expect(content.exists()).toEqual(true);
});

test('Popover /w close', () => {
    const snap = snapshot.shallow(
        <Popover
            design='dark'
            anchor='bottom'
            header='This is header'
            content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
            <Button>Click me</Button>
        </Popover>
    );

    const button = snap.find(Button);
    button.simulate('focus');
    const close = snap.find(Close);
    close.simulate('click');

    const message = snap.find(Message);
    expect(message.props().toggle).toEqual(false);
});

test('Popover w/ any props', () => {
    const props = {
        id: 'id',
        title: 'title',
    };

    const component = <Popover {...props} />;

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();

    const wrapper = snapshot.mount(component);
    for (const [key, value] of Object.entries(props)) {
        expect(wrapper.props()[key]).toEqual(value);
    }
});
