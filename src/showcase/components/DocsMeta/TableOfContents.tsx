import React, { useMemo } from 'react';
import { Title, TOCContainer, ListItem, Link, ItemText } from './TableOfContents.styles';
import { local_readObjectByPath } from '@/Utils';

export const TableOfContents: React.FC<React.PropsWithChildren> = ({ children }) => {
    const handleClick = (id: string) => (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();

        const sanitizedHref = window.parent.location.href;
        const withAmendedHash = sanitizedHref.split('#')[0] + '#' + id;

        clickSynthLink(withAmendedHash);

        const target = document.getElementById(id);

        if (!target) return;

        target.scrollIntoView({ behavior: 'smooth' });
    };

    const content = useMemo(() => {
        const anchors = React.Children.toArray(children)
            .filter((c) => typeof c === 'object' && c !== null && local_readObjectByPath(c, 'props.id') !== null)
            .map((c) => {
                const { props, type } = c as React.ReactElement<{ id: string; children: string }>;

                return {
                    name: (type as React.JSXElementConstructor<unknown>).name,
                    id: props.id,
                    children: props.children,
                };
            });

        return anchors.map(({ name, id, children }) => (
            <ListItem key={id} $indent={name === 'h4'}>
                <Link href={'#' + id} onClick={handleClick(id)}>
                    <ItemText>{children}</ItemText>
                </Link>
            </ListItem>
        ));
    }, [children]);

    if (!content.length) return null;

    return (
        <div>
            <Title>Содержание</Title>

            <TOCContainer>{content}</TOCContainer>
        </div>
    );
};

function clickSynthLink(href: string): void {
    const link = document.createElement('a');
    link.href = href;
    link.click();

    setTimeout(function () {
        link.remove();
    }, 100);
}
