import { BaseActionStrategyOptions, IActionStrategy } from '../types';
import { IDebounceCallback, debounce } from '../../Utils';

export type HoverStrategyOptions = BaseActionStrategyOptions & {
    mouseEnterDelay?: number;
    mouseLeaveDelay?: number;
    visible?: boolean;
};

export class HoverStrategy implements IActionStrategy {
    private readonly target: HTMLElement;
    private readonly options: HoverStrategyOptions;
    private readonly debouncedOnTargetMouseLeave: IDebounceCallback;
    private readonly debouncedOnPopupMouseLeave: IDebounceCallback;
    private readonly debouncedOnTargetMouseEnter: IDebounceCallback;

    private clearPopup?: () => void;

    public constructor(target: HTMLElement, options: HoverStrategyOptions) {
        this.target = target;
        this.options = options;
        this.debouncedOnTargetMouseLeave = debounce(this.onTargetMouseLeave, this.options.mouseLeaveDelay);
        this.debouncedOnPopupMouseLeave = debounce(this.onPopupMouseLeave, this.options.mouseLeaveDelay);
        this.debouncedOnTargetMouseEnter = debounce(this.onTargetMouseEnter, this.options.mouseEnterDelay);

        this.target.addEventListener('mouseenter', this.debouncedOnTargetMouseEnter);
        this.target.addEventListener('mouseleave', this.debouncedOnTargetMouseLeave);
    }

    public destroy() {
        this.target.removeEventListener('mouseenter', this.debouncedOnTargetMouseEnter);
        this.target.removeEventListener('mouseleave', this.debouncedOnTargetMouseLeave);
        this.clearPopup?.();
    }

    public setPopup(popup: HTMLElement) {
        popup.addEventListener('mouseenter', this.onPopupMouseEnter);
        popup.addEventListener('mouseleave', this.debouncedOnPopupMouseLeave);

        this.clearPopup = () => {
            this.target.removeEventListener('mouseleave', this.debouncedOnTargetMouseLeave);
            popup.removeEventListener('mouseenter', this.onPopupMouseEnter);
            popup.removeEventListener('mouseleave', this.debouncedOnPopupMouseLeave);
            this.clearPopup = undefined;
        };

        return this.clearPopup;
    }

    private readonly onTargetMouseEnter = () => {
        !this.options.visible && this.options.onOpen();
    };

    private readonly onPopupMouseEnter = () => {
        this.debouncedOnTargetMouseLeave.cancel();
        this.debouncedOnPopupMouseLeave.cancel();
        !this.options.visible && this.options.onOpen();
    };

    private readonly onTargetMouseLeave = () => {
        this.debouncedOnTargetMouseEnter.cancel();
        this.hidePopup();
    };

    private readonly onPopupMouseLeave = () => {
        this.hidePopup();
    };

    private hidePopup() {
        this.clearPopup?.();
        this.options.onClose();
    }
}
