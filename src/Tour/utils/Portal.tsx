import React, { useEffect, useState, useRef, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

const Portal: React.FC<PropsWithChildren<PortalProps>> = ({ children, type = 'div' }) => {
    const mountNode = useRef<HTMLDivElement | null>(null);
    const portalNode = useRef<Element | null>(null);
    const [, forceUpdate] = useState({});

    useEffect(() => {
        if (!mountNode.current) return;

        const ownerDocument = mountNode.current.ownerDocument;
        portalNode.current = ownerDocument?.createElement(type);
        ownerDocument.body.appendChild(portalNode.current);
        forceUpdate({});

        return () => {
            if (portalNode.current?.ownerDocument) {
                portalNode.current.ownerDocument.body.removeChild(portalNode.current);
            }
        };
    }, [type]);

    return portalNode.current ? createPortal(children, portalNode.current) : <span ref={mountNode} />;
};

export interface PortalProps {
    type?: string;
}

export default Portal;
