import ArticleAuthor from '@/components/features/Article/ArticleAuthor';
import ArticleBody from '@/components/features/Article/ArticleBody';
import ArticleCoverImage from '@/components/features/Article/ArticleCoverImage';
import ArticleDate from '@/components/features/Article/ArticleDate';
import Container from '@/components/ui/Container';
import { getPostBySlug } from '@/lib/api/posts/actions';
import { handWritingFont } from '@/lib/fonts';
import { type ArticleParamsType } from '@/types/article.type';
import classNames from 'classnames';
import { notFound } from 'next/navigation';

// metadata
import { generateMetadata } from './metadata';
export { generateMetadata };

// SSG for [slug] dynamic router
import { generateStaticParams } from './staticParams';
import ArticleTitle from '@/components/features/Article/ArticleTitle';
export { generateStaticParams };

export default async function Post(props: ArticleParamsType) {
    const params = await props.params;
    const post = getPostBySlug(params.slug);

    if (!post) {
        return notFound();
    }

    return (
        <main>
            <Container className="max-w-[800px]">
                <ArticleTitle title={post.title} />
                <ArticleAuthor author={post.author} />
                <ArticleCoverImage title={post.title} coverImage={post.coverImage} />
                <ArticleDate date={post.date} />
                <ArticleBody content={post.content} />
            </Container>
        </main>
    );
}
