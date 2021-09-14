import { DSLocalizationProps, Localization } from '../Localization';

export interface WizardLocalizationMap {
    'ds.wizard.steps'?: string;
}

export type WizardLocalization = Localization<WizardLocalizationMap, WizardLocalizationContext>;
interface Steps {
    value: number | string;
    count: number | string;
}

export type WizardLocalizationContext = Steps | undefined;

export type WizardLocalizationProps = DSLocalizationProps<WizardLocalizationMap, WizardLocalizationContext>;

export const defaultWizardLocalization = (key: keyof WizardLocalizationMap, context: WizardLocalizationContext) => {
    if (key === 'ds.wizard.steps') {
        return `(шаг ${context?.value} из ${context?.count})`;
    }

    return '';
};
