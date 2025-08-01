import { useKeyboard } from '../components/Tour/hooks';
import { renderHook } from '@testing-library/react';

describe('useKeyboard', () => {
    it('should not handle keyboard events when isOpen is false', () => {
        // Arrange
        const onChangeIsOpen = jest.fn();
        const onChangeCurrentStep = jest.fn();
        renderHook(() =>
            useKeyboard({
                currentStep: 0,
                isOpen: false,
                stepsLength: 3,
                onChangeIsOpen,
                onChangeCurrentStep,
            })
        );

        // Act
        const keyDownEvent = new KeyboardEvent('keydown', { key: 'Escape' });
        window.dispatchEvent(keyDownEvent);

        // Assert
        expect(onChangeIsOpen).not.toHaveBeenCalled();
        expect(onChangeCurrentStep).not.toHaveBeenCalled();
    });
});
