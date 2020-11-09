import React from 'react';
import { act } from 'react-dom/test-utils';
import { Timer } from './Timer';

test('Timer', () => {
    const component = <Timer />;
    const snap = snapshot.mount(component);
    expect(snap).toMatchSnapshot();
    jest.clearAllTimers();
});

test('Timer w/ render function', () => {
    const component = (
        <Timer id='timer'>
            {(tick, id) => (
                <div id='test'>
                    Timer id: '{id}', tick: {tick}
                </div>
            )}
        </Timer>
    );

    const snap = snapshot.mount(component);

    expect(snap).toMatchSnapshot();
    jest.clearAllTimers();
});

test('Timer w/ start', () => {
    const component = (
        <Timer id='timer' start={10}>
            {(tick, id) => (
                <div id='test'>
                    Timer id: '{id}', tick: {tick}
                </div>
            )}
        </Timer>
    );

    const snap = snapshot.mount(component);

    expect(snap).toMatchSnapshot();
    jest.clearAllTimers();
});

jest.useFakeTimers();
test('Timer w/ handlers', () => {
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
test('Timer w/ delay', () => {
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
test('Timer w/ step', () => {
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
test('Timer w/ allowNegatives', () => {
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
