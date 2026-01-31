import { ArticleType } from '@/types/article.type';
import ArticleCoverImage from './ArticleCoverImage';
import ArticleAuthor from './ArticleAuthor';
import ArticleDate from './ArticleDate';
import Link from 'next/link';

export default function ArticleCard({ coverImage, title, author, date, excerpt, slug }: ArticleType) {
    return (
        <div className="flex flex-col gap-3">
            <ArticleCoverImage coverImage={coverImage} title={title} />
            <ArticleDate date={date} />
            <Link href={`/articles/${slug}`}>
                <h2 className="text-lg hover:underline">{title}</h2>
            </Link>
            <p className="text-sm text-gray-500 font-extralight">{excerpt}</p>
            <ArticleAuthor author={author} />
        </div>
    );
}
