export type Blog = {
    id: number;
    user_id: number;
    title: string;
    body: string;
    description: string;
    eye_catch: string;
    state: number;
    publish_at: string;
    categories: Category[];
    tags: Tag[];
    contests: Content[];
};

export type Category = {
    name: string;
    slug: string;
};

export type Tag = {
    name: string;
    slug: string;
};

export type Content = {
    name: string;
    anchor: string;
    position: number;
};
