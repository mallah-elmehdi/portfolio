import ArticleCard from '@/components/features/Article/ArticleCard';
import Hero from '@/components/features/Landing/Hero';
import Section from '@/components/layout/Section';
import { getAllPosts } from '@/lib/api/posts/actions';

export default function Index() {
    const allPosts = getAllPosts();

    return (
        <>
            <Hero />
            <main>
                <div className="">
                    <Section title="Articles" description="Here I share my thoughts and analysis in different health topics.">
                        <div className="grid gap-5 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                            {allPosts.slice(0, 3).map((post) => (
                                <ArticleCard key={post.slug} {...post} />
                            ))}
                        </div>
                    </Section>
                </div>
            </main>
        </>
    );
}
