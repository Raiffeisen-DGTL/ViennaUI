import React, { useState, useRef, useEffect } from 'react';
import { Body, GradientTop, GradientBottom } from './Screen.styles';

export const WrappedBody = (props) => {
    const { children, scroll, ...args } = props;
    const [showGradient, setShowGradient] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const box = ref.current;
        setTimeout(() => {
            if (box && scroll) {
                if (box.offsetHeight < box.scrollHeight) {
                    setShowGradient(true);
                } else {
                    setShowGradient(false);
                }
            }
        });
    });
    return (
        <Body ref={ref} scroll={scroll} {...args}>
            {showGradient && <GradientTop />}
            {children}
            {showGradient && <GradientBottom />}
        </Body>
    );
};
