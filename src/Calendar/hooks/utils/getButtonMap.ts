import { HeaderButton, ViewMode } from '../../types';

export const getButtonMap = (viewMode: ViewMode): HeaderButton[] => {
    switch (viewMode) {
        case 'month_list': {
            return ['back', 'leftArrow', 'year', 'rightArrow'];
        }
        case 'year_list': {
            return ['back', 'leftArrow', 'rightArrow'];
        }
        case 'month':
        default: {
            return ['leftArrowDouble', 'leftArrow', 'month', 'year', 'rightArrow', 'rightArrowDouble'];
        }
    }
};
