import { handWritingFont } from '@/lib/fonts';
import { ArticleType } from '@/types/article.type';
import classNames from 'classnames';

export default function ArticleTitle({ title }: Pick<ArticleType, 'title'>) {
    return <h1 className={classNames('text-6xl mb-6 mt-16 font-bold', handWritingFont.className)}>{title}</h1>;
}
