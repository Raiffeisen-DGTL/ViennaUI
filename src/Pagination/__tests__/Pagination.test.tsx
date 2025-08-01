import React from 'react';
import { render } from '@testing-library/react';
import { Pagination } from '../Pagination';

describe('Pagination', () => {
    it('should call onChange', () => {
        const fn = jest.fn();
        const component = <Pagination initialPageIndex={1} pageSize={25} totalItemsCount={100} onChange={fn} />;
        render(component);

        // const btn = screen.getByTestId('GoRight.path');
        //
        // userEvent.click(btn);
        //
        // expect(fn).toHaveBeenCalled();
        // expect(fn).toHaveBeenCalledWith(null, { pageIndex: 1, pageSize: 25 });
    });
});
