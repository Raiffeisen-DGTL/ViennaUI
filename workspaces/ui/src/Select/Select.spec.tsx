import React from 'react';
import { Screw } from 'vienna.icons';
import { Select, SelectProps } from './Select';
import { Current, Part } from './Select.styles';
import { Option } from './Option';
import { Icon } from './Option/Option.styles';

const prefix = <Screw />;

test('Select /w design', async () => {
    const designs: SelectProps['design'][] = ['outline', 'material'];

    designs.forEach((design) => {
        const snap = snapshot.render(<Select design={design} />);
        const snapPrefix = snapshot.render(<Select design={design} prefix={prefix} />);
        expect(snap).toMatchSnapshot();
        expect(snapPrefix).toMatchSnapshot();
    });
});

test('Select /w size', async () => {
    const sizes: SelectProps['size'][] = ['xs', 's', 'm', 'l', 'xl', 'xxl'];

    sizes.forEach((size) => {
        const snap = snapshot.render(<Select size={size} />);
        const snapPrefix = snapshot.render(<Select size={size} prefix={prefix} />);
        expect(snap).toMatchSnapshot();
        expect(snapPrefix).toMatchSnapshot();
    });
});

test('Select /w invalid', () => {
    const snap = snapshot.mount(<Select invalid />);

    expect(snap).toMatchSnapshot();
});

test('Select /w disabled', () => {
    const snap = snapshot.mount(<Select disabled />);

    expect(snap).toMatchSnapshot();
});

test('Select /w editable', () => {
    const snap = snapshot.mount(<Select editable />);
    snap.simulate('mousedown');

    const input = snap.find('input');

    expect(input.exists()).toEqual(true);
});

test('Select /w editable onChange()', () => {
    const fn = jest.fn();
    const snap = snapshot.mount(<Select editable onChange={fn} />);
    snap.simulate('mousedown');

    const input = snap.find('input');
    input.simulate('change');

    expect(fn).toBeCalled();
});

test('Select /w editable onBlur()', () => {
    const fn = jest.fn();
    const snap = snapshot.mount(<Select editable onBlur={fn} />);
    snap.simulate('mousedown');

    const input = snap.find('input');
    input.simulate('blur');

    expect(fn).toBeCalled();
});

test('Select /w options as children', () => {
    const snap = snapshot.render(
        <Select>
            <Select.Option>Значение 1</Select.Option>
        </Select>
    );

    const snapStandartObject = snapshot.render(
        <Select>
            <Select.Option value={{ value: 'Значение 1' }} />
        </Select>
    );

    const snapSpecialObject = snapshot.render(
        <Select>
            <Select.Option value={{ name: 'Значение 1' }} />
        </Select>
    );

    expect(snap).toMatchSnapshot();
    expect(snapStandartObject).toMatchSnapshot();
    expect(snapSpecialObject).toMatchSnapshot();
});

test('Select /w options as props', () => {
    const options = ['Значение 1'];
    const snap = snapshot.render(<Select options={options} />);

    const optionsStandartObject = [{ value: 'Значение 1' }];
    const snapStandartObject = snapshot.render(<Select options={optionsStandartObject} />);

    const optionsSpecialObject = [{ name: 'Значение 1' }];
    const snapSpecialObject = snapshot.render(<Select options={optionsSpecialObject} />);

    expect(snap).toMatchSnapshot();
    expect(snapStandartObject).toMatchSnapshot();
    expect(snapSpecialObject).toMatchSnapshot();
});

test('Select /w toggle by click on field', () => {
    const snap = snapshot.mount(
        <Select>
            <Select.Option>Значение 1</Select.Option>
        </Select>
    );

    let option = snap.find(Option);
    expect(option.exists()).toEqual(false);

    snap.simulate('mousedown');

    option = snap.find(Option);
    expect(option.exists()).toEqual(true);

    snap.simulate('mousedown');

    option = snap.find(Option);
    expect(option.exists()).toEqual(false);
});

test('Select /w toggle by click on arrow', () => {
    const snap = snapshot.mount(
        <Select>
            <Select.Option>Значение 1</Select.Option>
        </Select>
    );

    let part = snap.find(Part);
    let option = snap.find(Option);
    expect(option.exists()).toEqual(false);

    part.simulate('mousedown');

    option = snap.find(Option);
    part = snap.find(Part);
    expect(option.exists()).toEqual(true);

    part.simulate('mousedown');

    option = snap.find(Option);
    expect(option.exists()).toEqual(false);
});

test('Select /w close by click on option', () => {
    const snap = snapshot.mount(
        <Select>
            <Select.Option>Значение 1</Select.Option>
        </Select>
    );

    let option = snap.find(Option);
    expect(option.exists()).toEqual(false);

    snap.simulate('mousedown');

    option = snap.find(Option);
    expect(option.exists()).toEqual(true);

    option.at(0).simulate('mousedown');

    snap.update();

    option = snap.find(Option);
    expect(option.exists()).toEqual(false);
});

test('Select /w onSelect()', () => {
    const fn = jest.fn();
    const snap = snapshot.mount(
        <Select onSelect={fn}>
            <Select.Option>Значение 1</Select.Option>
        </Select>
    );

    snap.simulate('mousedown');

    const option = snap.find(Option);
    option.at(0).simulate('mousedown');

    expect(fn).toBeCalled();
});

test('Select /w onFocus()', () => {
    const fn = jest.fn();
    const snap = snapshot.mount(
        <Select onFocus={fn}>
            <Select.Option>Значение 1</Select.Option>
        </Select>
    );

    snap.simulate('focus');
    expect(fn).toBeCalled();
});

test('Select /w onBlur()', () => {
    const fn = jest.fn();
    const snap = snapshot.mount(
        <Select onBlur={fn}>
            <Select.Option>Значение 1</Select.Option>
        </Select>
    );

    snap.simulate('blur');
    expect(fn).toBeCalled();
});

test('Select /w value options as children', () => {
    const snap = snapshot.mount(
        <Select value={'Значение 1'}>
            <Select.Option>Значение 1</Select.Option>
        </Select>
    );
    let current = snap.find(Current);
    expect(current.text()).toEqual('Значение 1');

    const snapStandartObject = snapshot.mount(
        <Select value={{ value: 'Значение 2' }}>
            <Select.Option value={{ value: 'Значение 2' }} />
        </Select>
    );
    current = snapStandartObject.find(Current);
    expect(current.text()).toEqual('Значение 2');

    function valueToString(item) {
        return item.name;
    }
    const snapSpecialObject = snapshot.mount(
        <Select valueToString={valueToString} value={{ name: 'Значение 3' }}>
            <Select.Option value={{ name: 'Значение 3' }} />
        </Select>
    );
    current = snapSpecialObject.find(Current);
    expect(current.text()).toEqual('Значение 3');
});

test('Select /w value options as props', () => {
    const options = ['Значение 1'];
    const snap = snapshot.mount(<Select value={'Значение 1'} options={options} />);
    let current = snap.find(Current);
    expect(current.text()).toEqual('Значение 1');

    const optionsStandartObject = [{ value: 'Значение 2' }];
    const snapStandartObject = snapshot.mount(
        <Select value={optionsStandartObject[0]} options={optionsStandartObject} />
    );
    current = snapStandartObject.find(Current);
    expect(current.text()).toEqual('Значение 2');

    const optionsSpecialObject = [{ name: 'Значение 3' }];
    function valueToString(item) {
        return item.name;
    }
    const snapSpecialObject = snapshot.mount(
        <Select valueToString={valueToString} value={optionsSpecialObject[0]} options={optionsSpecialObject} />
    );
    current = snapSpecialObject.find(Current);
    expect(current.text()).toEqual('Значение 3');
});

test('Select /w compare options as children', () => {
    const snap = snapshot.mount(
        <Select value={'Значение 2'}>
            <Select.Option>Значение 1</Select.Option>
            <Select.Option>Значение 2</Select.Option>
        </Select>
    );
    snap.simulate('mousedown');
    let option = snap.find(Option).at(1);
    let icon = option.find(Icon);
    expect(icon.exists()).toEqual(true);

    const snapStandartObject = snapshot.mount(
        <Select value={{ value: 'Значение 2' }}>
            <Select.Option value={{ value: 'Значение 1' }} />
            <Select.Option value={{ value: 'Значение 2' }} />
        </Select>
    );
    snapStandartObject.simulate('mousedown');
    option = snapStandartObject.find(Option).at(1);
    icon = option.find(Icon);
    expect(icon.exists()).toEqual(true);

    function valueToString(item) {
        return item.name;
    }
    function compare(item) {
        return item.id;
    }
    const snapSpecialObject = snapshot.mount(
        <Select valueToString={valueToString} compare={compare} value={{ id: 2, name: 'Значение 3' }}>
            <Select.Option value={{ id: 1, name: 'Значение 3' }} />
            <Select.Option value={{ id: 2, name: 'Значение 3' }} />
        </Select>
    );
    snapSpecialObject.simulate('mousedown');
    option = snapSpecialObject.find(Option).at(1);
    icon = option.find(Icon);
    expect(icon.exists()).toEqual(true);
});

test('Select /w compare options as props', () => {
    const options = ['Значение 1', 'Значение 2'];
    const snap = snapshot.mount(<Select value={'Значение 2'} options={options} />);
    snap.simulate('mousedown');
    let option = snap.find(Option).at(1);
    let icon = option.find(Icon);
    expect(icon.exists()).toEqual(true);

    const optionsStandartObject = [{ value: 'Значение 1' }, { value: 'Значение 2' }];
    const snapStandartObject = snapshot.mount(
        <Select value={optionsStandartObject[1]} options={optionsStandartObject} />
    );
    snapStandartObject.simulate('mousedown');
    option = snapStandartObject.find(Option).at(1);
    icon = option.find(Icon);
    expect(icon.exists()).toEqual(true);

    const optionsSpecialObject = [
        { id: 1, name: 'Значение 3' },
        { id: 2, name: 'Значение 3' },
    ];
    function valueToString(item) {
        return item.name;
    }
    function compare(item) {
        return item.id;
    }
    const snapSpecialObject = snapshot.mount(
        <Select
            valueToString={valueToString}
            compare={compare}
            value={optionsSpecialObject[1]}
            options={optionsSpecialObject}
        />
    );
    snapSpecialObject.simulate('mousedown');
    option = snapSpecialObject.find(Option).at(1);
    icon = option.find(Icon);
    expect(icon.exists()).toEqual(true);
});

test('Select w/ any props', () => {
    const props = {
        className: 'className',
        id: 'id',
        title: 'title',
    };

    const component = <Select {...props} />;

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();

    const wrapper = snapshot.shallow(component);
    for (const [key, value] of Object.entries(props)) {
        expect(wrapper.props()[key]).toEqual(value);
    }
});

test('Select /w template value', () => {
    const div = <div className='template'>template</div>;
    const snap = snapshot.mount(<Select templateValue={div} value={'Значение 1'} options={['Значение 1']} />);

    const current = snap.find(Current);
    const template = current.find('.template');

    expect(template.text()).toEqual('template');
});

test('Select /w postfix up', () => {
    const snap = snapshot.render(<Select postfix={{ up: <Screw /> }} />);
    expect(snap).toMatchSnapshot();
});

test('Select /w postfix up and down', () => {
    const snap = snapshot.render(<Select postfix={{ up: <Screw />, down: <Screw /> }} />);
    expect(snap).toMatchSnapshot();
});

test('Select /w input value saved', () => {
    const snap = snapshot.mount(<Select editable inputValue={'test'} />);
    snap.simulate('mousedown');
    const input = snap.find('input');
    expect(input.props().value).toEqual('test');
});

test('Select /w input value not saved', () => {
    const snap = snapshot.mount(<Select editable value={'test'} />);
    snap.simulate('mousedown');
    const input = snap.find('input');
    expect(input.props().value).toBeUndefined();
});
