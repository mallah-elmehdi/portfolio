import { getAllPosts } from '@/lib/api/posts/actions';

export async function generateStaticParams() {
    const posts = getAllPosts();

    return posts.map((post) => ({
        slug: post.slug,
    }));
}
