// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
if (typeof window !== 'undefined') {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }

    if (!Element.prototype.closest) {
        Element.prototype.closest = function (s: string) {
            let el = this;

            do {
                if (el.matches(s)) return el;
                el = el.parentElement || el.parentNode;
            } while (el !== null && el.nodeType === 1);
            return null;
        };
    }
}
