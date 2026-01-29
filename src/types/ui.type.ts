import { type ChildrenType } from './common.type';

export type ContainerType = Partial<
    ChildrenType & {
        className: string;
    }
>;

export type LogoType = {
    white?: boolean;
};

export type IconButtonType = ChildrenType & {
    color?: string;
};
