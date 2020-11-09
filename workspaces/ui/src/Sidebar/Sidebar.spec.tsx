import React from 'react';
import { Home, Mail, Document, Logo } from 'vienna.icons';
import { Logotype, Sidebar, Link, Alarm } from '..';

test('Sidebar', () => {
    const snap = snapshot.render(
        <Sidebar>
            <Sidebar.Item>Home</Sidebar.Item>
            <Sidebar.Item>Mail</Sidebar.Item>
            <Sidebar.Item>Documents</Sidebar.Item>
        </Sidebar>
    );
    expect(snap).toMatchSnapshot();
});

test('Sidebar w/ design', () => {
    const light = snapshot.render(
        <Sidebar design='light'>
            <Sidebar.Item>Home</Sidebar.Item>
            <Sidebar.Item>Mail</Sidebar.Item>
            <Sidebar.Item>Documents</Sidebar.Item>
        </Sidebar>
    );
    expect(light).toMatchSnapshot();

    const dark = snapshot.render(
        <Sidebar design='dark'>
            <Sidebar.Item>Home</Sidebar.Item>
            <Sidebar.Item>Mail</Sidebar.Item>
            <Sidebar.Item>Documents</Sidebar.Item>
        </Sidebar>
    );
    expect(dark).toMatchSnapshot();
});

test('Sidebar w/ icons', () => {
    const snap = snapshot.render(
        <Sidebar>
            <Sidebar>
                <Sidebar.Item icon={<Home />}>Home</Sidebar.Item>
                <Sidebar.Item icon={<Mail />}>Mail</Sidebar.Item>
                <Sidebar.Item icon={<Document />}>Documents</Sidebar.Item>
            </Sidebar>
        </Sidebar>
    );
    expect(snap).toMatchSnapshot();
});

test('Sidebar w/ header', () => {
    const snap = snapshot.render(
        <Sidebar header={<Logo size='xl' />}>
            <Sidebar.Item icon={<Home />}>Home</Sidebar.Item>
            <Sidebar.Item icon={<Mail />}>Mail</Sidebar.Item>
            <Sidebar.Item icon={<Document />}>Documents</Sidebar.Item>
        </Sidebar>
    );
    expect(snap).toMatchSnapshot();
});

test('Sidebar w/o header', () => {
    const snap = snapshot.render(
        <Sidebar header={null}>
            <Sidebar.Item icon={<Home />}>Home</Sidebar.Item>
            <Sidebar.Item icon={<Mail />}>Mail</Sidebar.Item>
            <Sidebar.Item icon={<Document />}>Documents</Sidebar.Item>
        </Sidebar>
    );
    expect(snap).toMatchSnapshot();
});

test('Sidebar with custom header', () => {
    const snap = snapshot.render(
        <Sidebar design='dark' header={null} size='l' ripple={true}>
            <div>
                <Logotype
                    design='dark'
                    size='s'
                    style={{ marginLeft: '40px', marginBottom: '64px', marginTop: '32px' }}
                />
            </div>
            <Sidebar.Item active icon={<Home />}>
                Home
            </Sidebar.Item>
            <Sidebar.Item icon={<Mail />}>Mail</Sidebar.Item>
            <Sidebar.Item icon={<Document />}>Documents</Sidebar.Item>
            <Sidebar.Item icon={<Home />}>Home</Sidebar.Item>
            <Sidebar.Item icon={<Mail />}>Mail</Sidebar.Item>
            <Sidebar.Item icon={<Document />}>Documents</Sidebar.Item>
            <Sidebar.Item icon={<Home />}>Home</Sidebar.Item>
            <Sidebar.Item icon={<Mail />}>Mail</Sidebar.Item>
            <Sidebar.Item icon={<Document />}>Documents</Sidebar.Item>
            <Sidebar.Item icon={<Home />}>Home</Sidebar.Item>
            <Sidebar.Item icon={<Mail />}>Mail</Sidebar.Item>
            <Sidebar.Item disabled icon={<Document />}>
                Documents
            </Sidebar.Item>
        </Sidebar>
    );
    expect(snap).toMatchSnapshot();
});

test('Sidebar w/ footer', () => {
    const snap = snapshot.render(
        <Sidebar
            footer={
                <React.Fragment>
                    <Sidebar.Item icon={<Home />}>Chat</Sidebar.Item>
                    <Sidebar.Item icon={<Mail />}>Help</Sidebar.Item>
                    <Sidebar.Item icon={<Document />}>Settings</Sidebar.Item>
                </React.Fragment>
            }>
            <Sidebar.Item icon={<Home />}>Home</Sidebar.Item>
        </Sidebar>
    );
    expect(snap).toMatchSnapshot();
});

test('Sidebar w/ notification', () => {
    const snap = snapshot.render(
        <Sidebar>
            <Sidebar.Item icon={<Home />} notification={<Alarm design='accent' />}>
                Home
            </Sidebar.Item>
            <Sidebar.Item icon={<Mail />}>Mail</Sidebar.Item>
            <Sidebar.Item icon={<Document />}>Documents</Sidebar.Item>
        </Sidebar>
    );
    expect(snap).toMatchSnapshot();
});

test('Sidebar w/ active', () => {
    const snap = snapshot.render(
        <Sidebar>
            <Sidebar.Item active>Home</Sidebar.Item>
            <Sidebar.Item>Mail</Sidebar.Item>
            <Sidebar.Item>Documents</Sidebar.Item>
        </Sidebar>
    );
    expect(snap).toMatchSnapshot();
});

test('Sidebar w/ parent active', () => {
    const snap = snapshot.render(
        <Sidebar active='home'>
            <Sidebar.Item id='home'>Home</Sidebar.Item>
            <Sidebar.Item id='mail'>Mail</Sidebar.Item>
            <Sidebar.Item id='docs'>Documents</Sidebar.Item>
        </Sidebar>
    );
    expect(snap).toMatchSnapshot();
});

test('Sidebar w/ links', () => {
    const snap = snapshot.render(
        <Sidebar active='home'>
            <Link href='#'>
                <Sidebar.Item>Home</Sidebar.Item>
            </Link>
            <Link href='#'>
                <Sidebar.Item>Mail</Sidebar.Item>
            </Link>
            <Link href='#'>
                <Sidebar.Item>Documents</Sidebar.Item>
            </Link>
        </Sidebar>
    );
    expect(snap).toMatchSnapshot();
});

test('Sidebar w/ collapsed', () => {
    const snap = snapshot.render(
        <Sidebar active='home' collapsed>
            <Sidebar.Item id='home'>Home</Sidebar.Item>
            <Sidebar.Item id='mail'>Mail</Sidebar.Item>
            <Sidebar.Item id='docs'>Documents</Sidebar.Item>
        </Sidebar>
    );
    expect(snap).toMatchSnapshot();
});

test('Sidebar w/ collapsed & icons', () => {
    const snap = snapshot.render(
        <Sidebar active='home' collapsed>
            <Sidebar.Item icon={<Home />}>Home</Sidebar.Item>
            <Sidebar.Item icon={<Mail />}>Mail</Sidebar.Item>
            <Sidebar.Item icon={<Document />}>Documents</Sidebar.Item>
        </Sidebar>
    );
    expect(snap).toMatchSnapshot();
});

test('Sidebar w/ collapser', () => {
    const fn = jest.fn();

    const collapser = snapshot.render(
        <Sidebar active='home' onCollapse={fn}>
            <Sidebar.Item id='home'>Home</Sidebar.Item>
            <Sidebar.Item id='mail'>Mail</Sidebar.Item>
            <Sidebar.Item id='docs'>Documents</Sidebar.Item>
        </Sidebar>
    );
    expect(collapser).toMatchSnapshot();

    const collapserCollapsed = snapshot.render(
        <Sidebar active='home' onCollapse={fn} collapsed>
            <Sidebar.Item id='home'>Home</Sidebar.Item>
            <Sidebar.Item id='mail'>Mail</Sidebar.Item>
            <Sidebar.Item id='docs'>Documents</Sidebar.Item>
        </Sidebar>
    );
    expect(collapserCollapsed).toMatchSnapshot();
});

test('Sidebar w/ any props', () => {
    const props = { className: 'className', id: 'id', onClick: () => 'Sidebar' };
    const component = (
        <Sidebar active='home' {...props}>
            <Sidebar.Item icon={<Home />}>Home</Sidebar.Item>
            <Sidebar.Item icon={<Mail />}>Mail</Sidebar.Item>
            <Sidebar.Item icon={<Document />}>Documents</Sidebar.Item>
        </Sidebar>
    );

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();

    const wrapper = snapshot.shallow(component);
    for (const [key, value] of Object.entries(props)) {
        expect(wrapper.props()[key]).toEqual(value);
    }
});
