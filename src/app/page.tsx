import ArticleCard from '@/components/features/Article/ArticleCard';
import Container from '@/components/ui/Container';
import { getAllPosts } from '@/lib/api/posts/actions';

export default function Index() {
    const allPosts = getAllPosts();

    return (
        <main>
            <Container className="grid gap-5 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                {allPosts.slice(0, 3).map((post) => (
                    <ArticleCard {...post} />
                ))}
            </Container>
        </main>
    );
}
