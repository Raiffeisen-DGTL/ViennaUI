import { FactoryOpts } from 'imask';

type Props = FactoryOpts & {
    [x: string | number | symbol]: unknown;
    placeholderChar?: string;
    mapToRadix: string[];
    min?: number;
    max?: number;
};

export const getMaskOptionsFromProps = (props: Props) => {
    const options = {
        mask: props.mask,
        parent: props.parent,
        prepare: props.prepare,
        prepareChar: props.prepareChar,
        placeholderChar: props.placeholderChar,
        validate: props.validate,
        commit: props.commit,
        format: props.format,
        parse: props.parse,
        overwrite: props.overwrite,
        radix: props.radix,
        mapToRadix: props.mapToRadix,
        eager: props.eager,
        min: props.min,
        max: props.max,
        skipInvalid: props.skipInvalid,
    };

    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    Object.keys(options).forEach((key: string) => options[key] === undefined && delete options[key]);

    return options;
};
