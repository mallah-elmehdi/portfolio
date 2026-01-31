import { InstagramIcon, YoutubeIcon } from 'lucide-react';
import ArticleSearch from '../features/Article/ArticleSearch';
import Container from '../ui/Container';
import IconButton from '../ui/IconButton';
import Logo from '../ui/Logo';

export default function Footer() {
    return (
        <footer className="bg-gray-950 p-5 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 justify-between">
                <div className="flex flex-col gap-4">
                    <Logo white />
                    <span className="text-white font-extralight text-sm leading-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet temporibus aperiam velit, molestiae odit ex
                    </span>
                </div>
                <div></div>
                <div></div>
                <div className="flex flex-col gap-4">
                    <ArticleSearch />
                    <div className="flex items-center gap-2">
                        <IconButton>
                            <InstagramIcon />
                        </IconButton>

                        <IconButton>
                            <YoutubeIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
        </footer>
    );
}
