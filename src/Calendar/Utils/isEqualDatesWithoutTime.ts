const dateFormat = (date: Date) => {
    return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
};

export const isEqualDatesWithoutTime = (dateFirst: Date, dateSecond: Date): boolean => {
    return dateFormat(dateFirst) === dateFormat(dateSecond);
};
