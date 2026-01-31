import { handWritingFont } from '@/lib/fonts';
import { SectionType } from '@/types/ui.type';
import classNames from 'classnames';

export default function Section({ children, title, description }: SectionType) {
    return (
        <section className="flex flex-col gap-5">
            <header>
                <h3
                    className={classNames(
                        'font-semibold text-6xl relative w-fit ',
                        'before:absolute before:content-[""] before:w-[calc(100%+12px)] before:bg-orange-400/50 before:rounded-full',
                        'before:z-10 before:bottom-[10px] before:h-[10px]',
                        handWritingFont.className
                    )}
                >
                    {title}
                </h3>

                <p className="font-extralight text-gray-500">{description}</p>
            </header>

            {children}

            <footer></footer>
        </section>
    );
}
