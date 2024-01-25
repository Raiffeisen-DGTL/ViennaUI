import { FC, ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePortal } from './context';
import { ContainerType, GetContainer } from './types';

const DEFAULT_CONTAINER_GETTER = () => document.body;

export interface PortalProps {
    getContainer?: GetContainer;
    children?: ReactNode;
}

const getPortalContainer = (getContainer?: GetContainer) => {
    let container: ContainerType | null | undefined;
    if (typeof getContainer === 'string') {
        container = document.querySelector(getContainer);
    } else if (typeof getContainer === 'function') {
        container = getContainer();
    } else {
        container = getContainer;
    }

    return container ?? DEFAULT_CONTAINER_GETTER();
};

export const Portal: FC<PortalProps> = ({ getContainer: getContainerProps, children }) => {
    const { getContainer: getContainerContext } = usePortal();

    const getContainer = getContainerProps ?? getContainerContext;

    const [innerContainer, setInnerContainer] = useState<ContainerType>(() => getPortalContainer(getContainer));

    useEffect(() => {
        const customizeContainer = getPortalContainer(getContainer);
        setInnerContainer(customizeContainer ?? null);
    }, [getContainer]);

    return createPortal(children, innerContainer);
};
