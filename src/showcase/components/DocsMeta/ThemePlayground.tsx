import React from 'react';
import defaultTheme from 'vienna.ui-theme';
import { H5, Alert, Link, ScopedStory } from '@/atlant';
import { Playground } from '../Playground';
import { isProperKey } from '@/Utils';
import { Code } from '../Code';

interface ThemePlaygroundProps {
    children: React.ReactElement & ScopedStory;
    componentName: string;
}

const format = <T extends object>(json: T) => JSON.stringify(json, null, 4);

export const ThemePlayground: React.FC<ThemePlaygroundProps> = ({ children, componentName }): JSX.Element => {
    const themeKey = componentName.toLowerCase();
    const theme = isProperKey(defaultTheme, themeKey)
        ? format({
              ...((themeKey === 'modal' || themeKey === 'drawer') && {
                  screen: defaultTheme['screen'],
              }),
              [themeKey]: defaultTheme[themeKey],
          })
        : null;

    return (
        <>
            <Alert>
                Подробную информацию, как устроена система темизации компонентов дизайн-системы, вы можете найти{' '}
                <Link design='accent' target='_blank' href='/web/docs/themeprovider'>
                    здесь
                </Link>
            </Alert>
            <H5 style={{ margin: '32px 0 16px 0' }}>Playground</H5>
            <Playground>{children}</Playground>
            <H5 style={{ margin: '32px 0 16px 0' }}>Дефолтная тема компонента</H5>
            <Code style={{ maxHeight: 'unset' }} className='language-json'>
                {theme}
            </Code>
        </>
    );
};

ThemePlayground.displayName = 'ThemePlayground';
export default ThemePlayground;
