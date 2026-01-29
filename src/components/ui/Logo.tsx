import { handWritingFont } from '@/lib/fonts';
import { LogoType } from '@/types/ui.type';
import cn from 'classnames';
import Link from 'next/link';

export default function Logo({ white }: LogoType) {
    return (
        <Link href="/">
            <span className={cn(handWritingFont.className, 'text-5xl', white ? 'text-white' : '')}>el mehdi</span>
        </Link>
    );
}
