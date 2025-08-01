import React, { useMemo, useState } from 'react';
import { Controls, Unstyled } from '@storybook/blocks';

import { Tabs, Body, Button, H1 } from '@/atlant';
import ThemePlayground from './ThemePlayground';
import { TableOfContents } from './TableOfContents';
import { ScopedStory } from '@/Utils';
import { Box, Header, Navs, StyledButton } from './DocsMeta.styles';

interface DocsMetaProps extends React.PropsWithChildren {
    componentName: string;
    themedStory?: React.ReactElement & ScopedStory;
    controlsCanvas?: React.ReactNode;
    figmaLink?: string;
}

export const DocsMeta = ({
    children,
    componentName,
    controlsCanvas,
    themedStory,
    figmaLink,
}: DocsMetaProps): JSX.Element => {
    const navs = [
        { id: 'main', name: 'Компонент' },
        { id: 'props', name: 'Свойства' },
        ...(themedStory ? [{ id: 'themes', name: 'Темизация' }] : []),
    ];

    const [nav, setNav] = useState(navs[0].id);

    const body = useMemo(() => {
        if (nav === 'props') {
            return (
                <>
                    {controlsCanvas}
                    <Controls />
                </>
            );
        }

        if (nav === 'themes') {
            if (!themedStory) return null;

            return <ThemePlayground componentName={componentName}>{themedStory}</ThemePlayground>;
        }

        return (
            <>
                <TableOfContents>{children}</TableOfContents>
                {children}
            </>
        );
    }, [nav]);

    return (
        <Unstyled>
            <Body>
                <Box>
                    <Header>
                        {componentName && <H1>{componentName}</H1>}

                        {figmaLink && (
                            <a href={figmaLink} target='_blank' rel='noopener noreferrer'>
                                <img
                                    alt='figma-logotype'
                                    width='20px'
                                    height='20px'
                                    src='https://cdn-rf.raiffeisen.ru/ds/img/figma/figma-logo.png'
                                    style={{ marginTop: '4px' }}
                                />
                            </a>
                        )}

                        <Navs>
                            <Tabs value={nav} onChange={({ value }) => setNav(value)}>
                                {navs.map(({ id, name, ...props }) => (
                                    <Tabs.Tab key={id} value={id} {...props}>
                                        {name}
                                    </Tabs.Tab>
                                ))}
                            </Tabs>
                        </Navs>
                        <StyledButton>
                            <Button
                                href='https://gitlabci.raiffeisen.ru/fcc-atlant/atlant/-/issues/new?issue%5Bassignee_id%5D=&issue%5Bmilestone_id%5D='
                                target='_blank'>
                                Сообщить об ошибке
                            </Button>
                        </StyledButton>
                    </Header>
                    {body}
                </Box>
            </Body>
        </Unstyled>
    );
};
