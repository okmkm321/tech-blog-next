export type Blog = {
    id: number;
    user_id: number;
    title: string;
    body: string;
    description: string;
    eye_catch: string;
    state: number;
    publish_at: string;
    categories: BlogCategory[];
    tags: BlogTag[];
    contests: BlogContent[];
};

export type BlogCategory = {
    name: string;
    slug: string;
};

export type BlogTag = {
    name: string;
    slug: string;
};

export type BlogContent = {
    name: string;
    anchor: string;
    position: number;
};
