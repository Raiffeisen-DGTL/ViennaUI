import React, { useEffect, useMemo, useRef, useState } from 'react';
import { LiveProvider, withLive } from 'react-live';
import { themes } from 'prism-react-renderer';
import { Text } from '@/Typography';
import { local_readObjectByPath, ScopedStory } from '@/Utils';
import { usePrettyCode } from './usePrettyCode';
import {
    SContainer,
    SPreview,
    SEditor,
    SError,
    SButton,
    SErrorContainer,
    SButtonContainer,
    SUnderscore,
} from './Playground.styles';

interface PlaygroundProps {
    children: React.ReactElement & ScopedStory;
    code?: string;
    scope?: Record<string, object>;
    style?: React.CSSProperties;
}

export const Playground: React.FC<PlaygroundProps> = ({
    children,
    code: externalCode,
    scope: externalScope,
    style,
}) => {
    const codeRef = useRef('');
    const [isCopied, setIsCopied] = useState(false);
    const [sourceParsingError, setSourceParsingError] = useState('');

    const [showUnderscore, setShowUnderscore] = useState(false);

    const code = useMemo((): string | null => {
        if (externalCode) return externalCode;

        const source = local_readObjectByPath<string, PlaygroundProps['children']>(
            children,
            'parameters.docs.source.originalSource'
        );

        if (!source) return null;

        if (!source.includes('render')) {
            setSourceParsingError('У переданной Story отсутствует render-функция');

            return null;
        }

        const extractedRenderBody = source.split('=>').slice(1).join('=>').trim().slice(0, -1);
        const withArgsRemoved = extractedRenderBody.split('{...args}').join('');

        return `() => ${withArgsRemoved}`;
    }, [children]);

    const prettyCode = usePrettyCode(code);

    const scope = useMemo((): Record<string, object> | null => {
        if (externalScope) return externalScope;

        if (!children.scope) {
            setSourceParsingError('Переданной Story не задан scope');

            return null;
        }

        return children.scope;
    }, [children]);

    const onLiveCaptureChange = (newCode: string) => {
        if (newCode === codeRef.current) return;

        setIsCopied(false);
        codeRef.current = newCode;
    };

    const onCopyClick = () => {
        if (isCopied) return;

        navigator.clipboard.writeText(codeRef.current);
        setIsCopied(true);
        setShowUnderscore(true);

        setTimeout(() => setIsCopied(false), 1500);
    };

    if (!code || !scope)
        return (
            <SErrorContainer>
                <Text>Ошибка Playground</Text>
                {sourceParsingError && <Text>{sourceParsingError}</Text>}
                <Text>Обратитесь к гайду по миграции витрины DocsMigrationGuide.md</Text>
            </SErrorContainer>
        );

    return (
        <LiveProvider language='tsx' theme={themes.vsLight} code={prettyCode} scope={scope}>
            <SContainer style={style}>
                <LiveChangeCapture onChange={onLiveCaptureChange} />
                <SPreview />
                <SEditor />
                <SError />
                <SButtonContainer tabIndex={1} onBlur={() => setShowUnderscore(false)}>
                    <SButton onClick={onCopyClick}>{isCopied ? 'Copied' : 'Copy'}</SButton>
                    {showUnderscore && <SUnderscore />}
                </SButtonContainer>
            </SContainer>
        </LiveProvider>
    );
};

Playground.displayName = 'Playground';

const ChangeCapture = (props: { live?: { newCode?: string }; onChange?: (newCode: string) => void }) => {
    useEffect(() => {
        props.onChange?.(props.live?.newCode ?? '');
    }, [props]);

    return null;
};

const LiveChangeCapture = withLive(ChangeCapture);
