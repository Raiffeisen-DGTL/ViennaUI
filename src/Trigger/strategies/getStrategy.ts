import { HoverStrategy, HoverStrategyOptions } from './HoverStrategy';
import { ClickStrategy } from './ClickStrategy';
import { IActionStrategy, TriggerActionType } from '../types';

export function getStrategy(
    action: TriggerActionType,
    target: HTMLElement,
    { mouseEnterDelay, mouseLeaveDelay, ...rest }: HoverStrategyOptions
): IActionStrategy {
    switch (action) {
        case 'click':
            return new ClickStrategy(target, rest);
        case 'hover':
            return new HoverStrategy(target, { ...rest, mouseEnterDelay, mouseLeaveDelay });
        default:
            throw Error(`Unknown action: ${action}`);
    }
}
