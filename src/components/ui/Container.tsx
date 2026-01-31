import { type ContainerType } from '@/types/ui.type';
import cn from 'classnames';

export default function Container({ children, className = '' }: ContainerType) {
    return (
        <div className="flex justify-center">
            <div className={cn('max-w-[1200px] w-full', className)}>{children}</div>
        </div>
    );
}
