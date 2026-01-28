import { type Author } from './author.type';

export type Post = {
    slug: string;
    title: string;
    date: string;
    coverImage: string;
    author: Author;
    excerpt: string;
    ogImage: {
        url: string;
    };
    content: string;
    preview?: boolean;
};

export type PostParams = {
    params: Promise<{
        slug: string;
    }>;
};
