import React, { useCallback, useRef, useState } from 'react';
import { Story, Meta } from 'storybook';
import { InputNumber } from './InputNumber';

export default {
    title: 'Development/InputNumber',
    component: InputNumber,
} as Meta;

export const Overview: Story<any> = (args) => {
    const [value, setValue] = React.useState<number | null>(22);
    const changeHandler = React.useCallback((data) => setValue(data), []);
    return (
        <div>
            <button data-testid='button-set-22' onClick={() => setValue(22)}>
                SET 22
            </button>
            <button data-testid='button-null' onClick={() => setValue(null)}>
                SET NULL
            </button>
            <InputNumber onChange={changeHandler} value={value} scale={2} delimiter='.' />
        </div>
    );
};

export const ViewOnly: Story<any> = (args) => {
    return <InputNumber viewOnly value={12.5} scale={10} max={500} />;
};

export const DynamicInputFormat: Story = () => {
    const [value, setValue] = React.useState<number | null>(50);
    const [isLocaleEN, setisLocaleEN] = React.useState(true);
    const thousandsSeparator = isLocaleEN ? ',' : ' ';
    const delimiter: ',' | '.' = isLocaleEN ? '.' : ',';
    const mapToRadix = isLocaleEN ? ['.', 'б', 'ю'] : [',', 'б', 'ю'];

    const timeout = useRef<NodeJS.Timeout | null>(null);

    const changeHandler = React.useCallback(({ value }: { value: number | null }) => {
        if (timeout.current) clearTimeout(timeout.current);

        setValue(value);

        timeout.current = setTimeout(() => {
            setisLocaleEN((prev) => !prev);
            timeout.current = null;
        }, 2000);
    }, []);

    return (
        <InputNumber
            onChange={changeHandler}
            value={value}
            scale={3}
            thousandsSeparator={thousandsSeparator}
            delimiter={delimiter}
            mapToRadix={mapToRadix}
        />
    );
};

export const BugWithUndefined: Story<any> = (args) => {
    const [value, setValue] = React.useState();
    const changeHandler = React.useCallback(({ value }) => setValue(value), []);
    return <InputNumber onChange={changeHandler} value={value} />;
};
