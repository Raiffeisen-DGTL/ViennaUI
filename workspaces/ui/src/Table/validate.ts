/*  eslint-disable no-console */
import { TableProps } from './Table';
import { TableConfig, TableFeatures, TableState } from './types';

interface ValidateParams {
    props: TableProps;
    config: TableConfig;
    state: TableState;
    features: TableFeatures;
}
export const validate = (params: ValidateParams) => {
    const { props, state } = params;

    // deprecated props
    if (props.onServiceInit) {
        console.warn('Table WARNING: onServiceInit table handler is deprecated. Use onInit instead.');
    }

    if (props.onStateUpdate) {
        console.warn('Table WARNING: onStateUpdate table handler is deprecated. Use onUpdate instead.');
    }

    // table configuration
    const columns = state.columns?.list;
    columns?.forEach((c, index) => {
        if (!c.id) {
            const columnId = c.title ?? `#${index}`;
            console.error(`Table ERROR: Column ${columnId} is missing required attribute: id.`);
        }
    });
};
