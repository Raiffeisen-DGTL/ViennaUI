import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Multiselect } from '../Multiselect';
import { DropListInner } from '../../DropListInner';

describe.skip('Multiselect', () => {
    xit('should show droplist', () => {
        render(
            <Multiselect>
                <Multiselect.Option>Значение 1</Multiselect.Option>
                <Multiselect.Option>Значение большое 2</Multiselect.Option>
                <Multiselect.Option>Значение еще больше 3</Multiselect.Option>
            </Multiselect>
        );

        const multiselect = screen.getByRole('listbox');
        userEvent.click(multiselect);
        const droplist = screen.queryByTestId('Multiselect.DropListInner');
        expect(droplist).toBeInTheDocument();
    });

    xit('should call onChange when choose option', () => {
        const fn = jest.fn();
        render(
            <Multiselect onSelect={fn}>
                <Multiselect.Option>Значение 1</Multiselect.Option>
                <Multiselect.Option>Значение большое 2</Multiselect.Option>
                <Multiselect.Option>Значение еще больше 3</Multiselect.Option>
            </Multiselect>
        );

        const optionText = 'Значение 1';
        const multiselect = screen.getByRole('listbox');
        userEvent.click(multiselect);
        const option = screen.getByText(optionText);
        userEvent.click(option);

        expect(fn).toBeCalledWith(expect.any(Object), { value: optionText, name: undefined });
    });

    xit('should call onFocus when focus on component', () => {
        const fn = jest.fn();
        render(
            <Multiselect onFocus={fn}>
                <Multiselect.Option>Значение 1</Multiselect.Option>
                <Multiselect.Option>Значение большое 2</Multiselect.Option>
                <Multiselect.Option>Значение еще больше 3</Multiselect.Option>
            </Multiselect>
        );

        userEvent.tab();
        const droplist = screen.queryByTestId('Multiselect.DropListInner');

        expect(droplist).toBeInTheDocument();
        expect(fn).toBeCalledWith(expect.any(Object));
    });

    xit('should call onblur when blur on component', () => {
        const fn = jest.fn();
        render(
            <Multiselect onBlur={fn}>
                <Multiselect.Option>Значение 1</Multiselect.Option>
                <Multiselect.Option>Значение большое 2</Multiselect.Option>
                <Multiselect.Option>Значение еще больше 3</Multiselect.Option>
            </Multiselect>
        );

        userEvent.tab();
        const droplist = screen.queryByTestId('Multiselect.DropListInner');
        userEvent.tab();

        expect(droplist).not.toBeInTheDocument();
        expect(fn).toBeCalledWith(expect.any(Object));
    });

    xit('should show selected options in input', () => {
        const optionText = 'Значение 1';
        render(
            <Multiselect values={[optionText]}>
                <Multiselect.Option>{optionText}</Multiselect.Option>
                <Multiselect.Option>Значение большое 2</Multiselect.Option>
                <Multiselect.Option>Значение еще больше 3</Multiselect.Option>
            </Multiselect>
        );

        const selectedOption = screen.getByTestId('constructChips.Text');
        expect(selectedOption.textContent).toEqual(optionText);
    });

    it('should call onSelect when remove option from input', () => {
        const fn = jest.fn();
        const optionText = 'Значение 1';
        render(
            <Multiselect values={[optionText]} onSelect={fn}>
                <Multiselect.Option>{optionText}</Multiselect.Option>
                <Multiselect.Option>Значение большое 2</Multiselect.Option>
                <Multiselect.Option>Значение еще больше 3</Multiselect.Option>
            </Multiselect>
        );

        const optionClose = screen.getByTestId('constructChips.Close');
        userEvent.click(optionClose);
        expect(fn).toBeCalledWith(expect.any(Object), { value: optionText, name: undefined });
    });

    it('should pass any props', () => {
        const props = {
            className: 'className',
            id: 'id',
            title: 'title',
        };

        const component = <Multiselect {...props} />;

        const wrapper = snapshot.shallow(component);
        for (const [key, value] of Object.entries(props)) {
            expect(wrapper.props()[key]).toEqual(value);
        }
    });

    it('should pass default localization', () => {
        const snap = snapshot.mount(<Multiselect />);
        snap.simulate('mousedown');
        const dropList = snap.find(DropListInner);

        expect(dropList.text()).toEqual('Нет элементов для отображения');
    });

    it('should pass custom localization', () => {
        const customtLocalization = (key, context) => {
            if (key === 'ds.multiselect.extra') {
                return `${context?.count} more`;
            }

            return 'List is empty';
        };
        const snap = snapshot.mount(<Multiselect localization={customtLocalization} />);
        snap.simulate('mousedown');
        const dropList = snap.find(DropListInner);

        expect(dropList.text()).toEqual('List is empty');
    });
});
