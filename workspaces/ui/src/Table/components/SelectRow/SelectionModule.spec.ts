import { SelectionModule } from './SelectionModule';

test('Selection module', () => {
    const render = jest.fn();

    const mockElement = {
        props: { children: render },
    };

    // @ts-ignore
    const config = SelectionModule.initConfig({ child: mockElement });

    expect(config).toEqual(
        expect.objectContaining({
            template: render,
        })
    );
});
