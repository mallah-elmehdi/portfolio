import { ArticleType } from '@/types/article.type';
import { format } from 'date-fns';

export default function ArticleDate({ date }: Pick<ArticleType, 'date'>) {
    return <p className="font-extralight tracking-wider text-gray-600 text-sm">{format(date, 'LL MMM YYY')}</p>;
}
