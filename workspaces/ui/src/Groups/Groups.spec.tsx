import React from 'react';
import { Trash } from 'vienna.icons';
import Button from '../Button/Button';
import Groups, { GroupsProps } from './Groups';

test('Groups', () => {
    const snap = snapshot.render(
        <Groups>
            <Button design='accent'>Make payment</Button>
            <>
                <Button design='outline'>Download statement</Button>
                <Button design='outline'>
                    <Trash size='xs' /> Delete statement
                </Button>
            </>
        </Groups>
    );

    expect(snap).toMatchSnapshot();
});

test('Groups w/ null', () => {
    const snap = snapshot.render(
        <Groups>
            {null}
            <Button design='accent'>Make payment</Button>
            {false}
            <Button design='outline'>
                <Trash size='xs' /> Delete statement
            </Button>
        </Groups>
    );

    expect(snap).toMatchSnapshot();
});

test('Groups w/ groups', () => {
    const snap = snapshot.render(
        <Groups>
            <Button design='accent'>Make payment</Button>
            <Groups>
                <Button design='outline'>Download statement</Button>
                <Button design='outline'>
                    <Trash size='xs' /> Delete statement
                </Button>
            </Groups>
        </Groups>
    );

    expect(snap).toMatchSnapshot();
});

test('Groups w/ design', () => {
    const designs: GroupsProps['design'][] = ['horizontal', 'vertical'];

    designs.forEach((design) => {
        const snap = snapshot.render(
            <Groups design={design}>
                <Button design='accent'>Make payment</Button>
                <Button design='outline'>Download statement</Button>
                <Button design='outline'>
                    <Trash size='xs' /> Delete statement
                </Button>
            </Groups>
        );

        expect(snap).toMatchSnapshot(design);
    });
});

test('Groups w/ size', () => {
    const sizes: GroupsProps['size'][] = ['xs', 's', 'm', 'l', 'xl'];

    sizes.forEach((size) => {
        const snap = snapshot.render(
            <Groups size={size}>
                <Button design='accent'>Make payment</Button>
                <Button design='outline'>Download statement</Button>
                <Button design='outline'>
                    <Trash size='xs' /> Delete statement
                </Button>
            </Groups>
        );

        expect(snap).toMatchSnapshot(size);
    });
});

test('Groups w/ height', () => {
    const snap = snapshot.render(
        <Groups height='full'>
            <Button design='accent'>Make payment</Button>
            <Groups>
                <Button design='outline'>Download statement</Button>
                <Button design='outline'>
                    <Trash size='xs' /> Delete statement
                </Button>
            </Groups>
        </Groups>
    );

    expect(snap).toMatchSnapshot();
});

test('Groups w/ alignItems', () => {
    const snap = snapshot.render(
        <Groups alignItems='stretch'>
            <Button design='accent'>Make payment</Button>
            <Button design='outline'>Download statement</Button>
            <Button design='outline'>
                <Trash size='xs' /> Delete statement
            </Button>
        </Groups>
    );

    expect(snap).toMatchSnapshot();
});

test('Groups w/ justifyContent', () => {
    const snap = snapshot.render(
        <Groups justifyContent='center'>
            <Button design='accent'>Make payment</Button>
            <Button design='outline'>Download statement</Button>
            <Button design='outline'>
                <Trash size='xs' /> Delete statement
            </Button>
        </Groups>
    );

    expect(snap).toMatchSnapshot();
});

test('Groups w/ any props', () => {
    const props = { className: 'className', id: 'Counter', title: 'title', onClick: () => 'Counter' };
    const component = (
        <Groups {...props}>
            <Button design='accent'>Make payment</Button>
            <Button design='outline'>Download statement</Button>
            <Button design='outline'>
                <Trash size='xs' /> Delete statement
            </Button>
        </Groups>
    );

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();

    const wrapper = snapshot.shallow(component);
    for (const [key, value] of Object.entries(props)) {
        expect(wrapper.props()[key]).toEqual(value);
    }
});

test('Groups w/ clean (React.Fragment remove)', () => {
    const snap = snapshot.render(
        <Groups clean>
            <Button>{'A'}</Button>

            {true}
            {false}
            {null}
            {undefined}

            {
                <>
                    <Button>{'B'}</Button>
                    {true}
                    <Button>{'C'}</Button>
                    {null}
                </>
            }

            {
                <>
                    <Button>{'D'}</Button>
                    {false}
                    <Button>{'E'}</Button>
                    {undefined}
                </>
            }

            {
                <>
                    <Button>{'F'}</Button>
                </>
            }

            {
                <>
                    {true}
                    {false}
                    {null}
                    {undefined}
                </>
            }

            <Button>{'J'}</Button>
        </Groups>
    );

    expect(snap).toMatchSnapshot();
});
