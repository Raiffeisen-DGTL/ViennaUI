import React, { FC } from 'react';
import { Accordion, Flex, Text, Badge, Tooltip, Link, IconContainer } from '@/atlant';
import { Project, Contributor } from './types';
import { getMedal } from './utils';

interface ContributorsAccordionProps {
    list: Contributor[];
    project: Project;
    showMedals?: boolean;
}

export const ContributorsAccordion: FC<ContributorsAccordionProps> = ({ list, project, showMedals }) => {
    const initialContributors = [...list];

    return (
        <Accordion size='s' style={{ border: 'none' }}>
            {list.map(({ author, list }) => (
                <Accordion.Item
                    key={author.id}
                    style={{ border: 'none', outline: 'none', padding: '10px 18px' }}
                    header={
                        <Flex gap='s2' alignItems='center'>
                            <Flex.Item flex='0 0 12px'>{showMedals && getMedal(initialContributors, list)}</Flex.Item>
                            <Flex.Item flex='0 0 55px'>
                                <Badge size='xs' color='paris30'>{`${list.length} MR`}</Badge>
                            </Flex.Item>
                            <Flex.Item>
                                <Tooltip design={'dark'} content={author.name}>
                                    <IconContainer size='s'>
                                        {author.avatar_url ? (
                                            <img src={author.avatar_url} alt='Avatar' />
                                        ) : (
                                            author.name
                                                .split(' ')
                                                .reduce((acc, str) => acc + str[0], '')
                                                .slice(0, 2)
                                        )}
                                    </IconContainer>
                                </Tooltip>
                            </Flex.Item>
                            <Flex.Item flex='1 0 100%'>
                                <Text size='m' weight='medium'>
                                    {author.name.split(' ').slice(0, 2).join(' ')}
                                </Text>
                            </Flex.Item>
                        </Flex>
                    }>
                    <Flex flow='column' alignContent='flex-start' style={{ width: '100%' }} gap='s2'>
                        {list.map((mr, index) => (
                            <Flex key={mr.id} gap='s2'>
                                <Flex.Item flex='0 0 20px'>
                                    <Text>{`${index + 1}.`}</Text>
                                </Flex.Item>
                                <Flex.Item flex={'1 0'}>
                                    <TaskLink title={mr.title} project={project} />
                                </Flex.Item>
                                <Flex.Item>
                                    <Link design='accent' href={mr.web_url} target='_blank'>{`#${mr.iid}`}</Link>
                                </Flex.Item>
                            </Flex>
                        ))}
                    </Flex>
                </Accordion.Item>
            ))}
        </Accordion>
    );
};

interface TaskLinkProps {
    title: string;
    project: Project;
}

const TaskLink: FC<TaskLinkProps> = ({ title, project }) => {
    if (project === 'ios' && title[0] === '#') {
        const taskNumber = title.slice(1, 4);
        const taskLink = `https://gitlabci.raiffeisen.ru/mobile_development/ios-kit/vienna/-/issues/${taskNumber}`;

        return (
            <>
                <Link href={taskLink} design='accent' target='_blank'>
                    {`#${taskNumber}`}
                </Link>
                <Text style={{ marginLeft: '8px' }}>{title.slice(5)}</Text>
            </>
        );
    }

    return <Text>{title}</Text>;
};
