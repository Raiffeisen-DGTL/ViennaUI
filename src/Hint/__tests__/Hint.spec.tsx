import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Hint } from '../Hint';
import { Popover } from '../../Popover';

describe.skip('Hint', () => {
    it('should show box with content when click on button', () => {
        render(
            <Hint
                design='dark'
                placement='bottom'
                header='This is header'
                content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
            />
        );

        const button = screen.getByTestId('Hint.Icon');
        userEvent.click(button);
        const box = screen.getByTestId('Popover.Message');

        expect(window.getComputedStyle(box).opacity).toBe('1');
    });

    it('should hide box with content when click on button', () => {
        render(
            <Hint
                design='dark'
                placement='bottom'
                header='This is header'
                content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
            />
        );

        const button = screen.getByTestId('Hint.Icon');
        userEvent.click(button);
        userEvent.click(button);
        const box = screen.getByTestId('Popover.Message');

        expect(window.getComputedStyle(box).opacity).toBe('0');
    });

    it('should hide box with content when click outside', () => {
        render(
            <Hint
                design='dark'
                placement='bottom'
                header='This is header'
                content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
            />
        );

        const button = screen.getByTestId('Hint.Icon');
        userEvent.click(button);
        userEvent.click(document.body);
        const box = screen.getByTestId('Popover.Message');

        expect(window.getComputedStyle(box).opacity).toBe('0');
    });

    it('should hide box with content when click on close button', () => {
        render(
            <Hint
                design='dark'
                placement='bottom'
                header='This is header'
                content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
            />
        );

        const button = screen.getByTestId('Hint.Icon');
        userEvent.click(button);
        const closeButton = screen.getByTestId('Popover.Close');
        userEvent.click(closeButton);
        const box = screen.getByTestId('Popover.Message');

        expect(window.getComputedStyle(box).opacity).toBe('0');
    });

    it('should show box with content when focus', () => {
        render(
            <Hint
                design='dark'
                placement='bottom'
                header='This is header'
                content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
            />
        );

        userEvent.tab();
        const box = screen.getByTestId('Popover.Message');

        expect(window.getComputedStyle(box).opacity).toBe('1');
    });

    it.skip('should hide box with content when blur', () => {
        // TODO fix it: issue #133
        render(
            <Hint
                design='dark'
                placement='bottom'
                header='This is header'
                content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
            />
        );

        userEvent.tab();
        userEvent.tab();
        const box = screen.getByTestId('Popover.Message');

        expect(window.getComputedStyle(box).opacity).toBe('0');
    });

    it('should pass any props', () => {
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
});
