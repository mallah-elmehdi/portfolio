import Hero from '@/components/features/Lading/Hero';
import Navbar from '@/components/layout/Navbar';
import { getAllPosts } from '@/lib/api/posts/actions';

export default function Index() {
    const allPosts = getAllPosts();
    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);

    return (
        <main className="flex flex-col gap-5">
            <Navbar />
        </main>
    );
}
