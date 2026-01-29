import { getPostBySlug } from '@/lib/api/posts/actions';
import { type ArticleParamsType } from '@/types/article.type';
import { type Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata(props: ArticleParamsType): Promise<Metadata> {
    const params = await props.params;
    const post = getPostBySlug(params.slug);

    if (!post) {
        return notFound();
    }

    return {
        title: post.title,
        openGraph: {
            title: post.title,
            images: [post.ogImage.url],
        },
    };
}
