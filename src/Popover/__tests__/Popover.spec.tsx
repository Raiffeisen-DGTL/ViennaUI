import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Popover } from '../Popover';
import { Button } from '../../index';

describe.skip('Popover', () => {
    it('should show box with content when click on button', () => {
        render(
            <Popover
                design='dark'
                placement='bottom'
                header='This is header'
                content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
                <Button>Click me</Button>
            </Popover>
        );

        const button = screen.getByRole('button');
        userEvent.click(button);
        const box = screen.getByTestId('Popover.Message');

        expect(window.getComputedStyle(box).opacity).toBe('1');
    });

    it('should hide box with content when click on button', () => {
        render(
            <Popover
                design='dark'
                placement='bottom'
                header='This is header'
                content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
                <Button>Click me</Button>
            </Popover>
        );

        const button = screen.getByRole('button');
        userEvent.click(button);
        userEvent.click(button);
        const box = screen.getByTestId('Popover.Message');

        expect(window.getComputedStyle(box).opacity).toBe('0');
    });

    xit('should hide box with content when click outside', () => {
        render(
            <Popover
                design='dark'
                placement='bottom'
                header='This is header'
                content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
                <Button>Click me</Button>
            </Popover>
        );

        const button = screen.getByRole('button');
        userEvent.click(button);
        userEvent.click(document.body);
        const box = screen.getByTestId('Popover.Message');

        expect(window.getComputedStyle(box).opacity).toBe('0');
    });

    it('should hide box with content when click on close button', () => {
        render(
            <Popover
                design='dark'
                placement='bottom'
                header='This is header'
                content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
                <Button>Click me</Button>
            </Popover>
        );

        const button = screen.getByRole('button');
        userEvent.click(button);
        const closeButton = screen.getByTestId('Popover.Close');
        userEvent.click(closeButton);
        const box = screen.getByTestId('Popover.Message');

        expect(window.getComputedStyle(box).opacity).toBe('0');
    });

    it('should show box with content when focus', () => {
        render(
            <Popover
                design='dark'
                placement='bottom'
                header='This is header'
                content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
                <Button>Click me</Button>
            </Popover>
        );

        userEvent.tab();
        const box = screen.getByTestId('Popover.Message');

        expect(window.getComputedStyle(box).opacity).toBe('1');
    });

    it.skip('should hide box with content when blur', () => {
        // TODO fix it: issue #133
        render(
            <Popover
                design='dark'
                placement='bottom'
                header='This is header'
                content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
                <Button>Click me</Button>
            </Popover>
        );

        userEvent.tab();
        userEvent.tab();
        const box = screen.getByTestId('Popover.Message');

        expect(window.getComputedStyle(box).opacity).toBe('0');
    });

    it('should show box when call function', () => {
        const Wrapper = () => {
            const ref = React.useRef<any>(null);
            return (
                <div>
                    <div>
                        <Button onClick={() => ref.current.open()}>Open</Button>
                        <Button onClick={() => ref.current.close()}>Close</Button>
                    </div>
                    <div>
                        <Popover ref={ref} header='This is header' content='Ut ut dui non'>
                            Click me
                        </Popover>
                    </div>
                </div>
            );
        };
        render(<Wrapper />);

        const openButton = screen.getByText('Open');
        const closeButton = screen.getByText('Close');

        userEvent.click(openButton);
        const box = screen.getByTestId('Popover.Message');
        expect(window.getComputedStyle(box).opacity).toBe('1');

        userEvent.click(closeButton);
        expect(window.getComputedStyle(box).opacity).toBe('0');
    });

    it('should pass any props', () => {
        const props = {
            id: 'id',
            title: 'title',
        };

        const component = <Popover {...props} />;

        const wrapper = snapshot.mount(component);
        for (const [key, value] of Object.entries(props)) {
            expect(wrapper.props()[key]).toEqual(value);
        }
    });
});
