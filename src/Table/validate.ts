/*  eslint-disable no-console */
import { TableProps } from './Table';
import { TableConfig, TableFeatures, TableState } from './types';

interface ValidateParams<T> {
    props: TableProps<T>;
    config: TableConfig<T>;
    state: TableState<T>;
    features: TableFeatures;
}
export const validate = <T>(params: ValidateParams<T>) => {
    const { state } = params;

    // table configuration
    const columns = state.columns?.list;
    columns?.forEach((c, index) => {
        if (!c.id) {
            const columnId = c.title ?? `#${index}`;
            console.error(`Table ERROR: Column ${columnId} is missing required attribute: id.`);
        }
    });
};
