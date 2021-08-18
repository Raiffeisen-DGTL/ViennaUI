import { parse } from 'date-fns';

export const convertStringToDate = (value: string, mask?: string): Date => {
    return parse(value, mask || 'dd.MM.yyyy', new Date('2021-1-1'));
};
