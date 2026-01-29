import { type IconButtonType } from '@/types/ui.type';

export default function IconButton({ children, color }: IconButtonType) {
    return <button className="w-8 h-8 p-1.5 rounded-full flex justify-center items-center text-white bg-white/50">{children}</button>;
}
