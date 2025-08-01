import { useState, useEffect, useRef } from 'react';
import { isEqualArraysObjects } from '../Utils';
import { TableProps } from './Table';

export const useTableUpdatedChildren = ({ data, children }: TableProps) => {
    const [count, setCount] = useState(0);
    const oldDataRef = useRef<typeof data>(data);
    const oldChildrenRef = useRef<typeof children>(children);

    useEffect(() => {
        if (data === oldDataRef.current && children === oldChildrenRef.current) {
            return;
        }

        if (children !== oldChildrenRef.current || !isEqualArraysObjects(data || [], oldDataRef.current || [])) {
            setCount((prev) => prev + 1);
        }
        oldDataRef.current = data;
        oldChildrenRef.current = children;
    }, [data, children]);

    return count;
};
