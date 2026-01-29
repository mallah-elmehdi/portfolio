export type AuthorType = {
    name: string;
    picture: string;
};

export type ArticleType = {
    slug: string;
    title: string;
    date: string;
    coverImage: string;
    author: AuthorType;
    excerpt: string;
    ogImage: {
        url: string;
    };
    content: string;
    preview?: boolean;
};

export type ArticleParamsType = {
    params: Promise<{
        slug: string;
    }>;
};
