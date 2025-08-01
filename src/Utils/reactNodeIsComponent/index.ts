import { isValidElement, ReactNode, ReactElement, ComponentType, ComponentProps } from 'react';

export const reactNodeIsComponent = <T extends ComponentType>(
    elem: ReactNode,
    component: T
): elem is ReactElement<ComponentProps<T>> => {
    if (typeof component === 'function') {
        return isValidElement(elem) ? elem?.type?.toString() === component.toString() : false;
    }

    return isValidElement(elem) ? elem?.type === component : false;
};
