import { getPostBySlug } from '@/lib/api/posts/actions';
import markdownToHtml from '@/lib/markdownToHtml';
import { PostParams } from '@/types/post.type';
import { notFound } from 'next/navigation';

// metadata
import { generateMetadata } from './metadata';
export { generateMetadata };

// SSG for [slug] dynamic router
import { generateStaticParams } from './staticParams';
export { generateStaticParams };

export default async function Post(props: PostParams) {
    const params = await props.params;
    const post = getPostBySlug(params.slug);

    if (!post) {
        return notFound();
    }

    const content = await markdownToHtml(post.content || '');

    return <main></main>;
}
