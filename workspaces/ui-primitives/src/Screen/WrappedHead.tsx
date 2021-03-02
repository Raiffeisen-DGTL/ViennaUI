import React, { forwardRef } from 'react';
import { Head, HeadContent, LyaoutProps } from './Screen.styles';

export const WrappedHead = forwardRef((props: React.PropsWithChildren<LyaoutProps>, ref: React.Ref<HTMLDivElement>) => {
    const { children, align, ...args } = props;
    return (
        <Head ref={ref} {...args}>
            <HeadContent align={align}>{children}</HeadContent>
        </Head>
    );
});
