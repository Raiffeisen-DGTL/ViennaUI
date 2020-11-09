import React from 'react';
import { Close } from 'vienna.icons';
import { Hint, HintProps } from './Hint';
import { Icon } from './Hint.styles';
import { Popover } from '../Popover';
import { Content, Message } from '../Popover/Popover.styles';

test('Hint', () => {
    const snap = snapshot.render(
        <Hint
            design='dark'
            anchor='bottom'
            header='This is header'
            content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
        />
    );

    expect(snap).toMatchSnapshot();
});

test('Hint w/ design', () => {
    const designs: HintProps['design'][] = ['dark', 'light'];

    designs.forEach((design) => {
        const snap = snapshot.render(
            <Hint
                design={design}
                anchor='bottom'
                header='This is header'
                content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
            />
        );

        expect(snap).toMatchSnapshot();
    });
});

test('Hint w/ size', () => {
    const sizes: HintProps['size'][] = ['s', 'm', 'l'];

    sizes.forEach((size) => {
        const snap = snapshot.render(
            <Hint
                size={size}
                anchor='bottom'
                header='This is header'
                content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
            />
        );

        expect(snap).toMatchSnapshot();
    });
});

test('Hint /w focus', () => {
    const snap = snapshot.mount(
        <Hint
            design='dark'
            anchor='bottom'
            header='This is header'
            content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
        />
    );

    const icon = snap.find(Icon);
    icon.simulate('focus');
    const content = snap.find(Content);

    expect(content.exists()).toEqual(true);
});

test('Hint /w close', () => {
    const snap = snapshot.mount(
        <Hint
            design='dark'
            anchor='bottom'
            header='This is header'
            content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
        />
    );

    const icon = snap.find(Icon);
    icon.simulate('focus');

    const content = snap.find(Content);

    expect(content.exists()).toEqual(true);

    const close = snap.find(Close);
    close.simulate('click');

    const message = snap.find(Message);
    expect(message.props().toggle).toEqual(false);
});

test('Hint w/ any props', () => {
    const props = {
        id: 'id',
        title: 'title',
    };

    const component = <Hint {...props} />;

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();

    const wrapper = snapshot.mount(component);
    const popover = wrapper.find(Popover);
    for (const [key, value] of Object.entries(props)) {
        expect(popover.props()[key]).toEqual(value);
    }
});
