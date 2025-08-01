import { GitlabMR, Project } from './types';

export const MOBILE_PROJECT_ID = 14293;
export const MOBILE_BOARD_ID = 859;
export const MOBILE_TOKEN = 'qridEEcuM4UWxBSNrqzC'; // Expires 05.05.2024

export const ANDROID_PROJECT_ID = 3489;
export const ANDROID_TOKEN = 'znyUxxw9uUpmF_9uvxso';
export const ANDROID_DEVELOPERS_IDS = [
    2305, // GORDEEV Pavel A, @Pavel.Gordeev
    3101, // TEYMUROV Maksim T, @Maksim.TEYMUROV
    1419, // NGUEN Khyu Nyat Kuang, @ruanek2
];

export const IOS_PROJECT_ID = 3604;
export const IOS_TOKEN = 'z8mdx-d8J-a8CP_Njn5G';
export const IOS_DEVELOPERS_IDS = [
    1373, // KOROTKOV Nikolay, @ruakrnq
    5262, // BULDA Yaroslav V, @ruablyh
    1744, // Razin Mikhail, @ruarim6
];

export const WEB_PROJECT_ID = 581;
export const TECHHUB_PROJECT_ID = 10313;
export const WEB_BOARD_ID = 408;
export const WEB_TOKEN = 'a2Mkbx_s5-h_2zxTtpBS'; // Expires 09.07.2025
export const WEB_DEVELOPERS_IDS = [
    1731, // SMIRNOVA Maria M, @ruasnms
    9098, //IVANOV Vyacheslav E
    10318, //KLIMOVA Ksenia V
    6539, //BAYKOVA Inna V
    12396, //LIMBERG Artur S
    2182, //GLADKIKH Evgeny
];

export const PROJECT_CREDENTIALS: {
    [key: string]: [string, number, number[]];
} = {
    web: [WEB_TOKEN, WEB_PROJECT_ID, WEB_DEVELOPERS_IDS],
    techhub: [WEB_TOKEN, TECHHUB_PROJECT_ID, WEB_DEVELOPERS_IDS],
    ios: [IOS_TOKEN, IOS_PROJECT_ID, IOS_DEVELOPERS_IDS],
    android: [ANDROID_TOKEN, ANDROID_PROJECT_ID, ANDROID_DEVELOPERS_IDS],
};

export const getMRbyPage = async (project: Project, page: string | number) => {
    const [token, projectId, developers] = PROJECT_CREDENTIALS[project];
    const baseURL = `https://gitlabci.raiffeisen.ru/api/v4/projects/${projectId}/merge_requests?`;
    const params = new URLSearchParams({
        state: 'merged',
        scope: 'all',
        'not[author_id]': String(developers[0]),
        created_after: '2021-01-01T00:00:00Z',
        per_page: '100',
        page: String(page),
    });

    return fetch(baseURL + params, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'PRIVATE-TOKEN': token,
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    });
};

export const getAllMR = async (project: Project): Promise<GitlabMR[]> => {
    const response = await getMRbyPage(project, 1);
    const result: GitlabMR[] = await response.json();
    const pagesCount = Number(response.headers.get('x-total-pages'));
    const promises: Promise<[]>[] = [];

    for (let page = 2; page <= pagesCount; page++) {
        promises.push(getMRbyPage(project, page).then((res) => res.json()));
    }

    const data = await Promise.all(promises);

    return [...result, ...data.reduce((acc, arr) => [...acc, ...arr], [])];
};
