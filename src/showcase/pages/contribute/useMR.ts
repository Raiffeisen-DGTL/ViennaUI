import { useEffect, useState } from 'react';
import { getAllMR, PROJECT_CREDENTIALS } from './api';
import { GitlabMR, Project } from './types';
import { consoleDevOnly } from '@/Utils/console';

const HOUR = 3_600_000;

export const useMR = (project: Project) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<GitlabMR[]>([]);

    useEffect(() => {
        try {
            const lsValue = localStorage.getItem('contributors');
            const cache: { data: GitlabMR[]; timestamp: number } | null = lsValue ? JSON.parse(lsValue) : null;

            const delta = Date.now() - (cache?.timestamp ?? 0);

            if (cache && delta < HOUR) {
                if (!cache.data) throw new Error();

                setData(cache.data);
                setIsLoading(false);

                return;
            }
        } catch (e) {
            consoleDevOnly(e);
        }

        const getMRs = async () => {
            const allMRs = (await Promise.all([await getAllMR('web'), await getAllMR('techhub')])).flatMap((p) => p);

            const contributorMRs = allMRs.filter((mr) => !PROJECT_CREDENTIALS[project][2].includes(mr.author.id));

            setData(contributorMRs);
            localStorage.setItem('contributors', JSON.stringify({ data: contributorMRs, timestamp: Date.now() }));
            setIsLoading(false);
        };

        getMRs();
    }, []);

    return {
        data,
        isLoading,
    };
};
