import { DSLocalizationProps } from '../Localization';

export interface TourLocalization {
    'ds.tour.skip'?: string;
    'ds.tour.next'?: string;
    'ds.tour.back'?: string;
    'ds.tour.start'?: string;
    'ds.tour.end'?: string;
    'ds.tour.step'?: (current: number, all: number) => string;
}

export type TourLocalizationProps = DSLocalizationProps<TourLocalization>;

export const defaultTourLocalization: Required<TourLocalization> = {
    'ds.tour.skip': 'Пропустить',
    'ds.tour.next': 'Далее',
    'ds.tour.back': 'Назад',
    'ds.tour.start': 'Начать обучение',
    'ds.tour.end': 'Завершить',
    'ds.tour.step': (current, all) => `Шаг ${current} из ${all}`,
};
