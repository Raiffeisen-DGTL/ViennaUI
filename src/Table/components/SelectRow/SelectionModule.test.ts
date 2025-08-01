import { ReactNode } from 'react';
import { SelectionModule } from './SelectionModule';

describe('SelectionModule', () => {
    test('Selection module init', () => {
        const render = jest.fn();

        const mockElement = {
            props: { children: render },
        } as unknown as ReactNode;

        const config = SelectionModule.initConfig?.({ child: mockElement, config: {}, settings: {} });

        expect(config).toEqual(
            expect.objectContaining({
                template: render,
            })
        );
    });
});
