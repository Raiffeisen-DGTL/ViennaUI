import React, { SVGAttributes } from 'react';

export interface PetProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Pet: React.FC<PetProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M16.78 2.077c-.348-.07-.835-.082-1.162-.084a17.746 17.746 0 00-.598.006L14.98 2h-.011c-.35.012-.67.148-.9.266-.255.13-.522.305-.79.502-.54.393-1.166.934-1.834 1.556-1.34 1.247-2.923 2.891-4.428 4.519a223.184 223.184 0 00-5.297 5.948l-.355.414-.093.11-.033.037L2 16l.762.647.03-.035.092-.107.35-.409a237.6 237.6 0 011.707-1.96A7.503 7.503 0 0011 17.983V20H4v2h16v-2h-7v-2.152a7.5 7.5 0 005.814-9.006A3.999 3.999 0 0019.873 7H22V5h-2.127a3.991 3.991 0 00-1.335-2.092 4 4 0 00-1.758-.831zM6.382 12.513a5.502 5.502 0 006.542 3.3 5.501 5.501 0 004.041-5.931A4 4 0 0116 10h-2V8h2a2 2 0 00.39-3.962c-.135-.027-.44-.043-.786-.045a15.694 15.694 0 00-.52.005c-.018.007-.052.02-.102.047a4.22 4.22 0 00-.525.338c-.446.325-1.006.805-1.65 1.405C11.52 6.984 9.978 8.585 8.483 10.2a189.71 189.71 0 00-2.102 2.312z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Pet.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Pet.displayName = 'Pet';
export default Pet;
