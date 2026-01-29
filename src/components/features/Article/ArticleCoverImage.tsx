import { ArticleType } from '@/types/article.type';
import Image from 'next/image';
import React from 'react';

export default function ArticleCoverImage({ coverImage, title }: Pick<ArticleType, 'coverImage' | 'title'>) {
    return <Image src={coverImage} quality={80} width={800} height={400} alt={`Cover Image for ${title}`} className="rounded-xl mb-2" />;
}
