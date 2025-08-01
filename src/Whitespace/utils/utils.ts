import { whitespace } from 'vienna.ui-theme';
import { getPresets } from '../../Utils/styling';

const presets = getPresets(
    whitespace,
    'whitespace'
)({
    size: '$size',
});

export const size = ($size: string | boolean | null) => presets.size({ $size });
