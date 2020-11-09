/* eslint-disable valid-jsdoc */
import { useEffect } from 'react';

interface Opts {
    isEnabled?: boolean;
}
type Ref = React.RefObject<HTMLElement>;
const array: Ref[] = [];

/**
 * @param ref Один или несколько useRef()'ов для указания на внутренние элементы
 * @param handler Колбек клика на внешний элемент
 */
export function useOutsideClick(
    ref: Ref | Ref[],
    handler: (e: TouchEvent | MouseEvent) => void,
    { isEnabled = true }: Opts = {}
) {
    const refs = array.concat(ref); // ensure array, even if non-array ref given

    useEffect(
        () => {
            const listener = (event) => {
                if (!isEnabled) return;
                // Do nothing if clicking ref's element or descendent elements
                if (refs.some((ref) => ref?.current?.contains(event.target))) return;

                handler(event);
            };

            if (isEnabled) {
                document.addEventListener('mousedown', listener);
                document.addEventListener('touchstart', listener);
            }

            return () => {
                document.removeEventListener('mousedown', listener);
                document.removeEventListener('touchstart', listener);
            };
        },
        // Add ref and handler to effect dependencies
        // It's worth noting that because passed in handler is a new ...
        // ... function on every render that will cause this effect ...
        // ... callback/cleanup to run every render. It's not a big deal ...
        // ... but to optimize you can wrap handler in useCallback before ...
        // ... passing it into this hook.
        [ref, ...refs, isEnabled, handler]
    );
}
