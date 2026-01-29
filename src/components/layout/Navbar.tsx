import { NAVBAR_LIST } from '@/lib/constants';
import Logo from '../ui/Logo';
import Link from 'next/link';
import Container from '../ui/Container';

export default function Navbar() {
    return (
        <header className="bg-orange-100 p-5 rounded-xl">
            <Container>
                <nav className="flex items-center  gap-5 justify-between">
                    <Logo />
                    <div className="flex items-center  gap-5">
                        {NAVBAR_LIST.map(({ title, href, Icon }) => (
                            <Link key={href} href={href}>
                                <div className="flex items-center gap-2 text-sm">
                                    <Icon />
                                    <span className="text-xl">{title}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </nav>
            </Container>
        </header>
    );
}
