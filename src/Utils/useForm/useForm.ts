import { useEffect, useState, useRef } from 'react';
import { useObjectState } from '../useObjectState';

export type ResolveType = (value: unknown) => void;
export type RejectType = (reason?: any) => void;
export type ValidationObject<T extends object> = {
    [K in keyof T]: {
        error: boolean;
        msg: string;
    };
};

const generateValidationObject = <T extends object>(state: T): ValidationObject<T> => {
    const result = {} as ValidationObject<T>;
    Object.keys(state).forEach((key) => {
        result[key] = {
            error: false,
            msg: '',
        };
    });
    return result;
};

export function useForm<T extends object>(
    defaultState: T,
    validators?: Partial<{
        [K in keyof T]: () => string;
    }>,
    onSubmit?: (data: T, resolve: ResolveType, reject: RejectType) => void | Promise<void>,
    success?: ResolveType,
    error?: RejectType
) {
    const objectState = useObjectState(defaultState);
    const prevObjectState = useRef(defaultState);
    const { state: validationObject, setPartialState: setPartialValidationObject } = useObjectState(
        generateValidationObject(defaultState)
    );

    const [sending, setSending] = useState<boolean>(false);

    const validation = (): boolean => {
        let valid = true;
        if (validators) {
            Object.keys(validators).forEach((key) => {
                const validateMsg = validators[key]();
                setPartialValidationObject({
                    [key]: {
                        error: !!validateMsg,
                        msg: validateMsg,
                    },
                } as Partial<ValidationObject<T>>);
                valid = valid ? !validateMsg : valid;
            });
        }
        return valid;
    };

    const submit = async () => {
        if (onSubmit) {
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            await new Promise((res, rej) => onSubmit(objectState.state, res, rej))
                .then((e) => {
                    if (success) {
                        success(e);
                    }
                })
                .catch((e) => {
                    if (error) {
                        error(e);
                    }
                });
        }
    };

    const submitForm = async () => {
        setSending(true);

        if (validation()) {
            await submit();
        }

        setSending(false);
    };

    // Здесь происходит сброс валидации при изменении значения
    useEffect(() => {
        for (const prop in objectState.state) {
            if (objectState.state[prop] !== prevObjectState.current[prop]) {
                setPartialValidationObject({
                    [prop]: {
                        error: false,
                        msg: '',
                    },
                } as Partial<ValidationObject<T>>);
            }
        }

        prevObjectState.current = objectState.state;
    }, [objectState.state]);

    return {
        ...objectState,
        validationObject,
        submitForm,
        sending,
    };
}
