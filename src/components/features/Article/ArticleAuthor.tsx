import { mainFont } from '@/lib/fonts';
import { ArticleType } from '@/types/article.type';
import classNames from 'classnames';
import Image from 'next/image';

export default function ArticleAuthor({ author }: Pick<ArticleType, 'author'>) {
    return (
        <div className="flex gap-2 items-center mb-3">
            <Image src={author.picture} className="rounded-full" width={25} height={25} alt={`Image of the author ${author.name}`} />
            <span className={classNames('capitalize tracking-wider text-sm font-extralight')}>{author.name}</span>
        </div>
    );
}
