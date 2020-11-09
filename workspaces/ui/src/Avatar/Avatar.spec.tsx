import React from 'react';
import Avatar, { AvatarProps } from './Avatar';

const imageSrc =
    'data:image/svg;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQuOTEyIDM4NC45MTIiPjxkZWZzLz48cGF0aCBmaWxsPSIjMDEwMDAyIiBkPSJNMzg0LjkxMiAxOTIuNDZDMzg0LjkxMiA4Ni4zNDIgMjk4LjU3OSAwIDE5Mi40NiAwIDg2LjMzNCAwIDAgODYuMzQyIDAgMTkyLjQ2YzAgNDcuNDQ3IDE3LjA4NiA5Mi4yMTEgNDguMjg0IDEyNy4zOTlsLS40OTYuMTcxIDkuMjY3IDkuMTY5IDMuNjAxIDMuNTYuMTMtLjA0OWMzNS44MjMgMzMuNjc3IDgyLjM1MSA1Mi4yMDIgMTMxLjY3NSA1Mi4yMDIgNDguOTk5IDAgOTUuMjQzLTE4LjQzNiAxMzAuOTg0LTUxLjc0NmwuMjYuMDg5IDMuNTkzLTMuNTM2IDkuMzQtOS4xNzctLjUwNC0uMTcxYzMxLjUyMS0zNS4yNTMgNDguNzc4LTgwLjE4OCA0OC43NzgtMTI3LjkxMXpNMTkyLjQ2IDM2OC42NzJjLTQyLjI3NyAwLTgyLjMzNC0xNC44MjctMTE0LjE5LTQyLjAxN2w4MC4wMDEtMjcuODMyLS41NDUtNi4yOTJjLS4wNDktLjYwMi0uMTMtMS4xODctLjIwMy0xLjc4OC0uMDU3LS4zOTgtLjEzOC0uODEzLS4xMzgtMS4yMTF2LTIwLjgzNGMxMC43MjIgNi40NDYgMjIuNTczIDEwLjEyIDM1LjA2NyAxMC4xMiAxMi41MDIgMCAyNC4zNDUtMy42NzQgMzUuMDY3LTEwLjEydjIwLjgzNGMwIC42MzQtLjEwNiAxLjI0NC0uMTc5IDEuODYxbC0uODcgOC4wNjQgNzkuNTk1IDI3LjY3Yy0zMS43NjYgMjYuODg5LTcxLjYyMSA0MS41NDUtMTEzLjYwNSA0MS41NDV6bS01MS4zMTUtMTM4LjMwOGMtMTEuMzIzLTE3LjUzMy0xOC4yODktNDAuNzg5LTE4LjI4OS02Ni4zNTQgMC01NC4zNDggMzEuMjIyLTk4LjU1OSA2OS42MDUtOTguNTU5czY5LjYwNSA0NC4yMTEgNjkuNjA1IDk4LjU1OWMwIDI1LjU1Ni02Ljk1OCA0OC43ODgtMTguMjY1IDY2LjMyMS00LjI1OSA2LjYwOS05LjEzNyAxMi4zOC0xNC41MTggMTcuMTU5LTEwLjY4OSA5LjQ5NC0yMy4yODggMTUuMDctMzYuODE0IDE1LjA3cy0yNi4xMjUtNS41ODQtMzYuODE0LTE1LjA3Yy01LjM5LTQuNzcxLTEwLjI1MS0xMC41MzQtMTQuNTEtMTcuMTI2em0xNzguMyA4NC4yMTJsLTc1LjY1My0yNi4zMnYtMzIuNDMzYzIwLjkwNy0yMC45NjQgMzQuNTIyLTU0LjI1OCAzNC41MjItOTEuODEyIDAtNjMuMzEzLTM4LjUxMy0xMTQuODE2LTg1Ljg2Mi0xMTQuODE2UzEwNi41OSAxMDAuNjk3IDEwNi41OSAxNjQuMDFjMCAzNy41NjIgMTMuNjIzIDcwLjg4MSAzNC41NDYgOTEuODM3djMxLjc0MmwtNzYuMTY1IDI2LjQ5OWMtMzEuNDY2LTMyLjkyOS00OC43MjMtNzUuOTIxLTQ4LjcyMy0xMjEuNjIgMC05Ny4xNjEgNzkuMDUtMTc2LjIwMyAxNzYuMjAzLTE3Ni4yMDNzMTc2LjE5NSA3OS4wNDIgMTc2LjE5NSAxNzYuMjAzYy4wMDkgNDUuOTUxLTE3LjQxOCA4OS4wOTgtNDkuMjAxIDEyMi4xMDh6Ii8+PC9zdmc+';

test('Avatar', () => {
    const snap = snapshot.render(<Avatar src={imageSrc} />);
    expect(snap).toMatchSnapshot();
});

test('Avatar w/ fallback', () => {
    const snap = snapshot.render(<Avatar src={imageSrc}>F</Avatar>);
    expect(snap).toMatchSnapshot();
});

test('Avatar w/ size', () => {
    const sizes: AvatarProps['size'][] = ['xs', 's', 'm', 'l', 'xl'];

    sizes.forEach((size) => {
        const snap = snapshot.render(
            <Avatar src={imageSrc} size={size}>
                M
            </Avatar>
        );
        expect(snap).toMatchSnapshot(size);
    });
});

test('Avatar w/ align', () => {
    const aligns: AvatarProps['align'][] = ['left', 'center', 'right'];

    aligns.forEach((align) => {
        const snap = snapshot.render(
            <Avatar src={imageSrc} align={align}>
                M
            </Avatar>
        );
        expect(snap).toMatchSnapshot(align);
    });
});

test('Avatar w/ valign', () => {
    const valigns: AvatarProps['valign'][] = ['top', 'center', 'bottom'];

    valigns.forEach((valign) => {
        const snap = snapshot.render(
            <Avatar src={imageSrc} valign={valign}>
                M
            </Avatar>
        );
        expect(snap).toMatchSnapshot(valign);
    });
});

test('Avatar w/ any props', () => {
    const props = {
        className: 'className',
        id: 'id',
        title: 'title',
        onClick: () => 'Click',
    };

    const component = (
        <Avatar {...props} src={imageSrc}>
            M
        </Avatar>
    );

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();

    const wrapper = snapshot.shallow(component);
    for (const [key, value] of Object.entries(props)) {
        expect(wrapper.props()[key]).toEqual(value);
    }
});
