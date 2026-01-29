import { mainFont } from '@/lib/fonts';
import markdownToHtml from '@/lib/markdownToHtml';
import markdownStyles from '@/styles/markdown.module.css';
import { ArticleType } from '@/types/article.type';
import cn from 'classnames';

export default async function ArticleBody({ content }: Pick<ArticleType, 'content'>) {
    const htmlContent = await markdownToHtml(content || '');

    return <div className={cn(markdownStyles['markdown'], mainFont.className)} dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
