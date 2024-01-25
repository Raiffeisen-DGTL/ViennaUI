export function isClickOutside<El extends Element>(el: El | El[] | null, event: MouseEvent) {
    const arr = Array.isArray(el) ? el : [el];
    if (arr.some((_el) => _el?.contains(event.target as Node))) {
        return false;
    }

    return true;
}
