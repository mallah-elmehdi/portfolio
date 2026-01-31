import { NAVBAR_LIST } from '@/lib/constants';
import Link from 'next/link';
import ArticleSearch from '../features/Article/ArticleSearch';
import Container from '../ui/Container';
import Logo from '../ui/Logo';

export default function Header() {
    return (
        <header>
            <nav className="flex items-center  gap-5 justify-between">
                <Logo white />
                <div className="flex items-center  gap-5">
                    {NAVBAR_LIST.map(({ title, href }) => (
                        <Link key={href} href={href}>
                            <span className="hover:underline text-lg font-light text-white">{title}</span>
                        </Link>
                    ))}
                </div>
                <ArticleSearch />
            </nav>
        </header>
    );
}
