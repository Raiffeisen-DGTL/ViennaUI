export function getClipboardText(event: ClipboardEvent) {
    const isIE = !event.clipboardData;
    const format = isIE ? 'Text' : 'text/plain';
    const clipboardData: DataTransfer = isIE ? (window as any).clipboardData : event.clipboardData;
    return clipboardData?.getData(format);
}
