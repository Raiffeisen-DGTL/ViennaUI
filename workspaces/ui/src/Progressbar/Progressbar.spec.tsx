import React from 'react';
import Progressbar, { ProgressbarProps } from './Progressbar';
import { Progress } from './Progressbar.styles';

test('Progressbar', () => {
    const snap = snapshot.render(<Progressbar value={50} />);
    expect(snap).toMatchSnapshot();
});

test('Progressbar w/ view', () => {
    const views: ProgressbarProps['view'][] = ['line', 'circle'];

    views.forEach((view) => {
        const snap = snapshot.render(<Progressbar value={50} view={view} />);
        expect(snap).toMatchSnapshot(view);
    });
});

test('Progressbar w/ size', () => {
    const sizes: ProgressbarProps['size'][] = ['s', 'm', 'l'];

    sizes.forEach((size) => {
        const snap = snapshot.render(<Progressbar value={50} size={size} />);
        expect(snap).toMatchSnapshot(size);
    });
});

test('Progressbar w/ color', () => {
    const colors: ProgressbarProps['color'][] = [
        'moscow100',
        'osaka100',
        'accent',
        'geneva100',
        'oslo120',
        'seattle140',
        'oslo100',
        'miami100',
        'sochi100',
        'paris100',
        'tokyo100',
        'dubai100',
        'nice100',
    ];

    colors.forEach((color) => {
        const snap = snapshot.render(<Progressbar value={50} color={color} />);

        expect(snap).toMatchSnapshot(color);
    });
});

test('Progressbar w/ view w/ child', () => {
    const sizes: ProgressbarProps['size'][] = ['s', 'm', 'l'];

    sizes.forEach((size) => {
        const snap = snapshot.render(
            <Progressbar view='circle' size={size} value={50}>
                <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    34%
                </div>
            </Progressbar>
        );
        expect(snap).toMatchSnapshot(size);
    });
});

// Тест для проверки для маппинга старых значений цвета на новые. Удалить по окончанию поддержки старых значений цветов
test('Progressbar w/ depricated color', () => {
    const designs: ProgressbarProps['design'][] = [
        'red',
        'orange',
        'yellow',
        'green',
        'darkBlue',
        'darkGray',
        'lightBlue',
    ];

    const designToColorMapping = {
        red: 'moscow100',
        orange: 'osaka100',
        yellow: 'accent',
        green: 'geneva100',
        darkBlue: 'oslo120',
        darkGray: 'seattle140',
        lightBlue: 'oslo100',
    };

    designs.forEach((design) => {
        if (!design) {
            return;
        }

        const snap = snapshot.mount(<Progressbar value={50} design={design} />);
        const progress = snap.find(Progress);

        expect(progress.prop('color')).toBe(designToColorMapping[design]);
    });
});

test('Progressbar w/ loading', () => {
    const snap = snapshot.render(<Progressbar value={50} loading />);
    expect(snap).toMatchSnapshot();
});
