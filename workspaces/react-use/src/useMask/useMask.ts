import { useMemo } from 'react';
import IMask, { PIPE_TYPE } from 'imask';

export type IMaskProps = Partial<
    IMask.MaskedNumber & IMask.MaskedPattern & IMask.Masked<any> & IMask.MaskedRange & IMask.MaskedDate
>;

export const useMask = (maskProps: IMaskProps) => {
    const valueToMask = useMemo(
        () => (maskProps?.mask ? IMask.createPipe({ ...(maskProps as any), lazy: true }) : (val) => val),
        [maskProps]
    );

    const maskToValue = useMemo(
        () =>
            maskProps?.mask ? IMask.createPipe(maskProps as any, PIPE_TYPE.MASKED, PIPE_TYPE.UNMASKED) : (val) => val,
        [maskProps]
    );

    const placeholder = useMemo(
        () => (maskProps?.mask ? IMask.createPipe({ ...(maskProps as any), lazy: false }) : (val) => val),
        [maskProps]
    );

    return [valueToMask, maskToValue, placeholder];
};

export default useMask;
