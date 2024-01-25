import React, { useState, useEffect } from 'react';

export const useRipple = () => {
    const [rippleStyles, setrippleStyles] = useState<any>({});
    let timer = 0;

    const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
        const { pageX, pageY, currentTarget } = e;
        const { left: leftTarget, top: topTarget, width, height } = currentTarget.getBoundingClientRect();

        const left = pageX - (leftTarget + window.pageXOffset);
        const top = pageY - (topTarget + window.pageYOffset);
        const size = Math.max(width, height);

        setrippleStyles({
            left,
            top,
            opacity: 1,
        });
        timer = window.setTimeout(() => {
            setrippleStyles({
                left,
                top,
                opacity: 0,
                transform: `scale(${size / 9})`,
                transition: `all 1000ms`,
            });
        }, 50);
    };

    useEffect(() => {
        return () => {
            timer && clearTimeout(timer);
        };
    }, []);

    return [rippleStyles, handleClick];
};
