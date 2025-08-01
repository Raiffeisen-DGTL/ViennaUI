import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Tour, TourProps } from '..'; // Импортируем компонент Tour
import '@testing-library/jest-dom';

describe('Tour Component', () => {
    const steps = [
        {
            selector: '#step1',
            content: { title: 'Step 1' },
            onEnter: jest.fn(),
            onLeave: jest.fn(),
        },
        {
            selector: '#step2',
            content: { title: 'Step 2' },
            onEnter: jest.fn(),
            onLeave: jest.fn(),
        },
    ];

    const defaultProps = {
        isOpen: true,
        currentStep: 0,
        steps,
        onChangeIsOpen: jest.fn(),
        onChangeCurrentStep: jest.fn(),
        testId: {
            overlay: 'tour-overlay',
            closeIcon: 'popover-close-icon',
            popoverBackStepBtn: 'tour-back-step-button',
            popoverNextStepBtn: 'tour-next-step-button',
        },
    };

    const TestComponent = (props: Partial<TourProps>) => {
        return (
            <div>
                <Tour {...defaultProps} {...props} />
                <div id='step1'>Step 1</div>
                <div id='step2'>Step 2</div>
            </div>
        );
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders the Tour component when isOpen is true', () => {
        render(<TestComponent />);
        expect(screen.getByTestId('tour-overlay')).toBeInTheDocument();
        expect(screen.getByTestId('popover-close-icon')).toBeInTheDocument();
    });

    it('does not render the Tour component when isOpen is false', () => {
        render(<TestComponent isOpen={false} />);
        expect(screen.queryByTestId('tour-overlay')).not.toBeInTheDocument();
        expect(screen.queryByTestId('popover-close-icon')).not.toBeInTheDocument();
    });

    it('calls onChangeIsOpen when the tour is closed', () => {
        render(<TestComponent />);

        fireEvent.click(screen.getByTestId('popover-close-icon'));
        expect(defaultProps.onChangeIsOpen).toHaveBeenCalledWith(false);
    });

    it('calls onChangeCurrentStep when moving to the next step', () => {
        render(<TestComponent />);
        fireEvent.click(screen.getByTestId('tour-next-step-button'));
        expect(defaultProps.onChangeCurrentStep).toHaveBeenCalledWith(1);
    });

    it('calls onEnter when the step is entered', () => {
        render(<TestComponent />);
        expect(steps[0].onEnter).toHaveBeenCalled();
    });

    it('calls onLeave when the step is changed', () => {
        render(<TestComponent />);
        fireEvent.click(screen.getByTestId('tour-next-step-button'));
        expect(steps[0].onLeave).toHaveBeenCalled();
    });

    it('closes the tour when the mask is clicked and closeByFade is true', () => {
        render(<TestComponent closeByFade />);
        fireEvent.click(screen.getByTestId('tour-overlay'));
        expect(defaultProps.onChangeIsOpen).toHaveBeenCalledWith(false);
    });

    it('does not close the tour when the mask is clicked and closeByFade is false', () => {
        render(<TestComponent closeByFade={false} />);
        fireEvent.click(screen.getByTestId('tour-overlay'));
        expect(defaultProps.onChangeIsOpen).not.toHaveBeenCalled();
    });

    it('disables body scroll when the tour is open', () => {
        render(<TestComponent />);
        expect(document.body.style.overflow).toBe('hidden');
    });

    it('enables body scroll when the tour is closed', () => {
        render(<TestComponent closeByFade />);
        fireEvent.click(screen.getByTestId('tour-overlay'));
        expect(document.body.style.overflow).toBe('unset');
    });
});
