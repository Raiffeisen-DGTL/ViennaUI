export type Project = 'web' | 'ios' | 'android' | 'techhub';

export type GitlabUser = {
    id: number;
    username: string;
    name: string;
    state: string;
    avatar_url: string;
    web_url: string;
};

export type GitlabMR = {
    id: number;
    iid: number;
    author: GitlabUser;
    title: string;
    web_url: string;
    created_at: string;
};

export type Contributor = {
    author: GitlabUser;
    list: GitlabMR[];
};
