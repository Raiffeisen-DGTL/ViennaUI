import React, { SVGAttributes } from 'react';

export interface CallOutProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CallOut: React.FC<CallOutProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M8.516 3.584a2 2 0 00-3.129-.385L2.865 5.72c-.544.545-.903 1.327-.809 2.193.19 1.753 1.026 5.772 4.682 9.362 3.622 3.556 7.568 4.435 9.314 4.652.881.11 1.684-.25 2.24-.806l2.51-2.508a2 2 0 00-.386-3.13l-3.232-1.939a2 2 0 00-2.443.301l-1.027 1.026c-.43-.21-1.26-.736-2.555-2.03-1.294-1.295-1.82-2.125-2.03-2.555l1.026-1.027a2 2 0 00.3-2.443L8.517 3.584zM4.28 7.134L6.8 4.613l1.94 3.232-1.179 1.178c-.339.34-.674.959-.426 1.675.24.693.888 1.835 2.61 3.557 1.72 1.721 2.863 2.369 3.556 2.61.716.247 1.335-.088 1.675-.427l1.178-1.179 3.232 1.94-2.508 2.508c-.194.194-.407.257-.58.236-1.476-.184-4.952-.946-8.16-4.095-3.214-3.157-3.934-6.674-4.094-8.15-.018-.167.044-.373.235-.564z'
                clipRule='evenodd'
            />
            <path d='M14.707 10.707L19 6.414V9h2V4a1 1 0 00-1-1h-5v2h2.586l-4.293 4.293 1.414 1.414z' />
        </svg>
    );
};

CallOut.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CallOut.displayName = 'CallOut';
export default CallOut;
