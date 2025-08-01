import React, { Ref } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Popover as PopoverComponent } from '../Popover';
import { Button, ITrigger } from '../../index';

const Popover: React.FC<Partial<React.ComponentProps<typeof PopoverComponent>> & { forwardedRef?: Ref<ITrigger> }> = (
    props
) => {
    const { forwardedRef, ...attrs } = props;
    return (
        <PopoverComponent<HTMLButtonElement>
            design='dark'
            placement={'bottom'}
            header='This is header'
            content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
            closeOnTargetClick
            ref={forwardedRef}
            testId={{
                closeIcon: 'Popover.Close',
            }}
            data-testid={'Popover.Message'}
            {...attrs}>
            {(ref) => <Button forwardedRef={ref}>Click me</Button>}
        </PopoverComponent>
    );
};

describe('Popover', () => {
    it('should show box with content when click on button', async () => {
        render(<Popover />);

        const button = screen.getByRole('button');
        await userEvent.click(button);
        const box = screen.getByTestId('Popover.Message');

        expect(box).toBeInTheDocument();
    });

    it('should hide box with content when click on button', async () => {
        render(<Popover />);

        const button = screen.getByRole('button');
        await userEvent.click(button);
        const box = screen.getByTestId('Popover.Message');
        await userEvent.click(button);

        expect(box).not.toBeInTheDocument();
    });

    it('should hide box with content when click outside', async () => {
        render(<Popover />);

        const button = screen.getByRole('button');
        await userEvent.click(button);
        const box = screen.getByTestId('Popover.Message');
        await userEvent.click(document.body);

        expect(box).not.toBeInTheDocument();
    });

    it('should hide box with content when click on close button', async () => {
        render(<Popover />);

        const button = screen.getByRole('button');
        await userEvent.click(button);
        const closeButton = screen.getByTestId('Popover.Close');
        const box = screen.getByTestId('Popover.Message');
        await userEvent.click(closeButton);

        expect(box).not.toBeInTheDocument();
    });

    it('should show box when call function', async () => {
        const Wrapper = () => {
            const ref = React.useRef<ITrigger>(null);
            return (
                <div>
                    <div>
                        <Button onClick={() => ref.current?.open()}>Open</Button>
                        <Button onClick={() => ref.current?.close()}>Close</Button>
                    </div>
                    <div>
                        <Popover forwardedRef={ref} />
                    </div>
                </div>
            );
        };
        render(<Wrapper />);

        const openButton = screen.getByText('Open');
        const closeButton = screen.getByText('Close');

        await userEvent.click(openButton);
        const box = screen.getByTestId('Popover.Message');
        expect(box).toBeInTheDocument();

        await userEvent.click(closeButton);
        expect(box).not.toBeInTheDocument();
    });
});
