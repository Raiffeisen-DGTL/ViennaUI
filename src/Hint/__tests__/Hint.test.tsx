import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Hint as HintComponent } from '../Hint';

const Hint: React.FC<React.ComponentProps<typeof HintComponent>> = (props) => {
    return (
        <HintComponent
            design='dark'
            placement='bottom'
            header='This is header'
            content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
            testId={{
                closeIcon: 'Popover.CloseIcon',
                popover: 'Popover.Message',
                targetIcon: 'Hint.Icon',
            }}
            {...props}
        />
    );
};

describe('Hint', () => {
    it('should show box with content when click on button', async () => {
        render(<Hint />);

        const button = screen.getByTestId('Hint.Icon');
        await userEvent.click(button);
        const box = screen.getByTestId('Popover.Message');

        expect(box).toBeInTheDocument();
    });

    it('should hide box with content when click on button', async () => {
        render(<Hint closeOnTargetClick />);

        const button = screen.getByTestId('Hint.Icon');
        await userEvent.click(button);
        const box = screen.getByTestId('Popover.Message');
        await userEvent.click(button);

        expect(box).not.toBeInTheDocument();
    });

    it('should hide box with content when click outside', async () => {
        render(<Hint />);

        const button = screen.getByTestId('Hint.Icon');
        await userEvent.click(button);
        const box = screen.getByTestId('Popover.Message');
        await userEvent.click(document.body);

        expect(box).not.toBeInTheDocument();
    });

    it('should hide box with content when click on close button', async () => {
        render(<Hint />);

        const button = screen.getByTestId('Hint.Icon');
        await userEvent.click(button);
        const closeButton = screen.getByTestId('Popover.CloseIcon');
        const box = screen.getByTestId('Popover.Message');
        await userEvent.click(closeButton);

        expect(box).not.toBeInTheDocument();
    });
});
