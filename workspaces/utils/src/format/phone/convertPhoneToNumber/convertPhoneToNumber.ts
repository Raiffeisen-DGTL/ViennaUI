import { PhoneOptions } from '../types';

export const convertPhoneToNumber = (value: string, options?: PhoneOptions): number => {
    const { startWith = '+7' } = options || {};
    const result = value.replace(/-/g, '').replace(/ /g, '');
    return startWith === '+7' ? Number(result.slice(2)) : Number(result.slice(1));
};
