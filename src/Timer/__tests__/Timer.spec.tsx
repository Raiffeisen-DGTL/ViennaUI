import React from 'react';
import { act } from 'react-dom/test-utils';
import { Timer } from '../Timer';

describe('Timer', () => {
    jest.useFakeTimers();
    it('should call handlers', () => {
        const onChange = jest.fn();
        const onStop = jest.fn();

        const component = <Timer id='timer' onChange={onChange} onStop={onStop} stop={10} />;

        snapshot.mount(component);

        act(() => {
            jest.advanceTimersByTime(10000);
        });

        expect(onChange).toBeCalled();
        expect(onChange).toHaveBeenCalledTimes(10);

        expect(onStop).toBeCalled();
        expect(onStop).toHaveBeenCalledTimes(1);
        expect(onStop).toHaveBeenCalledWith(10, 'timer');

        jest.clearAllTimers();
    });

    jest.useFakeTimers();
    it('should use delay', () => {
        const onChange = jest.fn();
        const onStop = jest.fn();

        const component = <Timer id='timer' onChange={onChange} onStop={onStop} stop={20} delay={500} />;

        snapshot.mount(component);

        act(() => {
            jest.advanceTimersByTime(10000);
        });

        expect(onChange).toBeCalled();
        expect(onChange).toHaveBeenCalledTimes(20);

        expect(onStop).toBeCalled();
        expect(onStop).toHaveBeenCalledTimes(1);
        expect(onStop).toHaveBeenCalledWith(20, 'timer');

        jest.clearAllTimers();
    });

    jest.useFakeTimers();
    test('should use step', () => {
        const onChange = jest.fn();
        const onStop = jest.fn();

        const component = <Timer id='timer' onChange={onChange} onStop={onStop} stop={1000} step={100} />;

        snapshot.mount(component);

        act(() => {
            jest.advanceTimersByTime(10000);
        });

        expect(onChange).toBeCalled();
        expect(onChange).toHaveBeenCalledTimes(10);

        expect(onStop).toBeCalled();
        expect(onStop).toHaveBeenCalledTimes(1);
        expect(onStop).toHaveBeenCalledWith(1000, 'timer');

        jest.clearAllTimers();
    });

    jest.useFakeTimers();
    test('should use allowNegatives', () => {
        const onChange = jest.fn();
        const onStop = jest.fn();

        const component = (
            <Timer id='timer' onChange={onChange} onStop={onStop} start={10} stop={-10} countdown allowNegatives />
        );

        snapshot.mount(component);

        act(() => {
            jest.advanceTimersByTime(20000);
        });

        expect(onChange).toBeCalled();
        expect(onChange).toHaveBeenCalledTimes(20);

        expect(onStop).toBeCalled();
        expect(onStop).toHaveBeenCalledTimes(1);
        expect(onStop).toHaveBeenCalledWith(-10, 'timer');

        jest.clearAllTimers();
    });
});
