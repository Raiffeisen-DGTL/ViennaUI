import { GitlabMR, GitlabUser, Contributor } from './types';

export function getYears() {
    const currentYear = new Date().getFullYear();

    return Array.from(Array(3), (_, i) => currentYear - i);
}

function getAuthors(data: GitlabMR[]) {
    return data.reduce<Record<number, GitlabUser>>((acc, mr) => {
        const authorID = mr.author.id;

        acc[authorID] = acc[authorID] ?? mr.author;

        return acc;
    }, {});
}

function getMRbyAuthor(data: GitlabMR[]) {
    return data.reduce<Record<number, GitlabMR[]>>((acc, mr) => {
        const authorID = mr.author.id;

        acc[authorID] = acc[authorID] ?? [];
        acc[authorID].push(mr);

        return acc;
    }, {});
}

export const getDateQuarter = (date: string) => {
    return Math.floor((new Date(date).getMonth() + 3) / 3);
};

export const getTopContributors = (data: GitlabMR[]) => {
    const authors = getAuthors(data);
    const mrByAuthors = getMRbyAuthor(data);
    const result: Contributor[] = [];

    Object.keys(authors).forEach((authorID) => {
        result.push({
            author: authors[+authorID],
            list: mrByAuthors[+authorID],
        });
    });
    return result.sort((a, b) => b.list.length - a.list.length);
};

export const getMedal = (initialContributors: Contributor[], contributors: GitlabMR[]) => {
    const gold = getTopContributor(initialContributors);
    if (contributors.length === gold) return '🥇';
    const silver = getTopContributor(initialContributors, gold);
    if (contributors.length === silver) return '🥈';
    const bronze = initialContributors
        .map((item) => item.list)
        .map((item) => item.length)
        .filter((i) => i !== gold)
        .filter((i) => i !== silver)
        .reduce((a, b) => (a >= b ? a : b));
    if (contributors.length === bronze) return '🥉';
    return null;
};

const getTopContributor = (contributors: Contributor[], excludeItem?: number) => {
    // находит контрибьютора с максимальным количеством мр
    return excludeItem
        ? contributors
              .map((item) => item.list)
              .map((item) => item.length)
              .filter((i) => i !== excludeItem)
              .reduce((a, b) => (a >= b ? a : b))
        : contributors
              .map((item) => item.list)
              .map((item) => item.length)
              .reduce((a, b) => (a >= b ? a : b));
};
