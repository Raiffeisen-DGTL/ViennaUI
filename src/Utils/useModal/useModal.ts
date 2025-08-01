import { useCallback, useEffect } from 'react';

interface Props {
    /** Флаг, который позволяет или запрешает закрывать окно по нажатию Escape */
    closeByEscape: boolean;
    /** Callback функция закрытия окна */
    handleClose: VoidFunction;
}

export function useModal({ closeByEscape, handleClose }: Props) {
    const escapeFunction = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === 'Escape' && closeByEscape) {
                handleClose();
            }
        },
        [closeByEscape, handleClose]
    );

    const useModalEscapeHandler = () => {
        useEffect(() => {
            window.addEventListener('keydown', escapeFunction);

            return () => window.removeEventListener('keydown', escapeFunction);
        }, [escapeFunction]);
    };

    return { useModalEscapeHandler };
}
