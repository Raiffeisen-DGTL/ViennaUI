import { isClickOutside } from '../../Utils';
import { IActionStrategy, BaseActionStrategyOptions } from '../types';

export class ClickStrategy implements IActionStrategy {
    private readonly target: HTMLElement;
    private readonly options: BaseActionStrategyOptions;

    public constructor(target: HTMLElement, options: BaseActionStrategyOptions) {
        this.target = target;
        this.options = options;
        this.target.addEventListener('click', this.onClick);
    }

    public destroy() {
        this.target.removeEventListener('click', this.onClick);
    }

    public setPopup(popup: HTMLElement) {
        const controller = new AbortController();

        const abortController = () => {
            controller.abort();
        };

        const closePopup = () => {
            abortController();
            this.options.onClose();
        };

        if (!this.options.disableOutsideClick) {
            document.addEventListener('click', (event) => isClickOutside([this.target, popup], event) && closePopup(), {
                signal: controller.signal,
            });
        }

        return abortController;
    }

    private readonly onClick = () => this.options.onOpen();
}
