import React, { FC, useState } from 'react';
import { Flex, Text, Badge, Card, Checkbox } from '@/atlant';
import { GitlabMR, Project, Contributor } from './types';
import { getDateQuarter, getTopContributors } from './utils';
import { ContributorsAccordion } from './ContributorsAccordion';

interface YearCardProps {
    year: number;
    data: GitlabMR[];
    project: Project;
}

export const YearCard: FC<YearCardProps> = ({ year, data, project }) => {
    const [showQuarters, setShowQuarters] = useState(true);
    const contributors = getTopContributors(data);
    const mrCount = contributors.reduce((acc, item) => acc + item.list.length, 0);

    return (
        <Card
            header={
                <Flex alignItems='center' gap='s2'>
                    <Text size={'xxl'} weight='bold'>
                        {year}
                    </Text>
                    <Badge color='paris30'>{`${mrCount} MR`}</Badge>
                    <Badge color='paris10'>{`${contributors.length} Contributors`}</Badge>
                </Flex>
            }
            size='l'
            actions={
                <Checkbox checked={showQuarters} onChange={(e) => setShowQuarters(e.currentTarget.checked)}>
                    По кварталам
                </Checkbox>
            }>
            {showQuarters ? (
                <Flex wrap='wrap' gap='s3'>
                    {[1, 2, 3, 4].map((quarter) => {
                        const contributors = getTopContributors(
                            data.filter((mr) => getDateQuarter(mr.created_at) === quarter)
                        );
                        return contributors.length ? (
                            <Flex.Item key={quarter} flex='1 0 400px'>
                                <QuarterCard quarter={quarter} contributors={contributors} project={project} />
                            </Flex.Item>
                        ) : null;
                    })}
                </Flex>
            ) : (
                <ContributorsAccordion list={contributors} project={project} showMedals />
            )}
        </Card>
    );
};

interface QuarterCardProps {
    quarter: number;
    contributors: Contributor[];
    project: Project;
}

const QuarterCard: FC<QuarterCardProps> = ({ quarter, contributors, project }) => {
    const mrCount = contributors.reduce((acc, item) => acc + item.list.length, 0);

    return (
        <Card
            header={
                <Flex alignItems='center' gap='s2'>
                    <Text size={'l'} weight='bold'>{`Q${quarter}`}</Text>
                    <Badge size='s' color='paris30'>{`${mrCount} MR`}</Badge>
                    <Badge size='s' color='paris10'>{`${contributors.length} Contributors`}</Badge>
                </Flex>
            }>
            {contributors.length ? <ContributorsAccordion list={contributors} project={project} /> : null}
        </Card>
    );
};
