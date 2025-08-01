import React, { FC } from 'react';
import { Flex, Spinner } from '@/atlant';
import { useMR } from './useMR';
import { getYears } from './utils';
import { YearCard } from './YearCard';

const years = getYears();

export const Contribute: FC = () => {
    const { data, isLoading } = useMR('web');

    if (isLoading) {
        return (
            <Flex>
                <Spinner size='xl' position='absolute' />
            </Flex>
        );
    }

    return (
        <Flex gap='s5' flow='column'>
            {years.map((year) => (
                <YearCard
                    key={year}
                    year={year}
                    project={'web'}
                    data={data.filter((mr) => new Date(mr.created_at).getFullYear() === year)}
                />
            ))}
        </Flex>
    );
};
