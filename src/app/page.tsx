import { getAllPosts } from '@/lib/api/posts/actions';

export default function Index() {
    const allPosts = getAllPosts();

    const heroPost = allPosts[0];

    const morePosts = allPosts.slice(1);

    return <main></main>;
}
