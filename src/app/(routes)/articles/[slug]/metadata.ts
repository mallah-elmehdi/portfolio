import { getPostBySlug } from '@/lib/api/posts/actions';
import { PostParams } from '@/types/post.type';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata(props: PostParams): Promise<Metadata> {
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
