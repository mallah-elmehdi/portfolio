import { ChildrenType } from '@/types/common.type';

export default function Container({ children }: ChildrenType) {
    return (
        <div className="flex justify-center">
            <div className="max-w-6xl w-full">{children}</div>
        </div>
    );
}
