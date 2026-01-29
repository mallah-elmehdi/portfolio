import { handWritingFont } from '@/lib/fonts';
import cn from 'classnames';
import Link from 'next/link';

export default function Logo() {
    return (
        <Link href="/">
            <span className={cn(handWritingFont.className, 'text-5xl')}>el mehdi</span>
        </Link>
    );
}
