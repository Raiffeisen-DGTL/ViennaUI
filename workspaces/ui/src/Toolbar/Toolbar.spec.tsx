import React from 'react';
import { Screw } from 'vienna.icons';
import { Toolbar } from './index';
import { DropList } from '..';

it('Toolbar', () => {
    const toolbar = snapshot.shallow(
        <Toolbar>
            <Toolbar.Operation label={'Option 1'} />
            <Toolbar.Operation label={'Option 2'} />
            <Toolbar.Operation label={'Option 3'} />
            <Toolbar.Operation label={'Option 4'} />
        </Toolbar>
    );

    expect(toolbar.find(Toolbar.Operation)).toMatchSnapshot();
});

it('Toolbar /w dark', () => {
    const toolbar = snapshot.shallow(
        <Toolbar design='dark'>
            <Toolbar.Operation label={'Option 1'} />
            <Toolbar.Operation label={'Option 2'} />
            <Toolbar.Operation label={'Option 3'} />
            <Toolbar.Operation label={'Option 4'} />
        </Toolbar>
    );

    expect(toolbar.find(Toolbar.Operation)).toMatchSnapshot();
});

test('Toolbar w/ any props', () => {
    const props = {
        className: 'className',
        id: 'id',
        title: 'title',
    };

    const component = (
        <Toolbar {...props}>
            <Toolbar.Operation label={'Option 1'} />
            <Toolbar.Operation label={'Option 2'} />
            <Toolbar.Operation label={'Option 3'} />
            <Toolbar.Operation label={'Option 4'} />
        </Toolbar>
    );

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();

    const wrapper = snapshot.shallow(component);
    for (const [key, value] of Object.entries(props)) {
        expect(wrapper.props()[key]).toEqual(value);
    }
});

test('Toolbar w/ operation', () => {
    const component = <Toolbar.Operation label={'Action 5'} />;

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();
});

test('Toolbar w/ operation with icon', () => {
    const component = <Toolbar.Operation icon={<Screw />} label={'Action 5'} />;

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();
});

test('Toolbar w/ operation onClick()', () => {
    const fn = jest.fn();
    const component = <Toolbar.Operation id={'id'} name={'name'} icon={<Screw />} label={'Action 5'} onClick={fn} />;

    const snap = snapshot.shallow(component);

    snap.simulate('click', {});
    expect(fn).toHaveBeenCalledWith({}, { id: 'id', name: 'name' });
});

test('Toolbar w/ operation hover', () => {
    const component = (
        <Toolbar.Operation label={'Action 3'}>
            <Toolbar.Operation label={'Option 1'} />
            <Toolbar.Operation label={'Option 2'} />
            <Toolbar.Operation label={'Option 3'} />
        </Toolbar.Operation>
    );

    const snap = snapshot.shallow(component);

    let droplist = snap.find(DropList).get(0);
    expect(droplist).toBeUndefined();

    snap.simulate('mouseenter', {});
    snap.update();
    droplist = snap.find(DropList).get(0);
    expect(droplist).toBeDefined();

    snap.simulate('mouseleave', {});
    snap.update();
    droplist = snap.find(DropList).get(0);
    expect(droplist).toBeUndefined();
});
