/**
 * Утилитарные типы для "разворачивания" `type aliases`, позволяющие обеспечить лучшую читамость в тултипах IDE.
 * Хорошо подходят для оборачивания и отдельного экспорта составных типов и интерфейсов. Не рекомендуется использовать в имплементации.
 */
export namespace Pretty {
    /**
     * Рекурсивная развертка с контролем максимального уровня вложенности, подлежащего раскрытию (BFS)
     * @param T - исходный тип, который требуется "развернуть"
     * @param N - максимальный уровень вложенности. `default = 1`
     * @param E - union исключений (напр. известные встроенные типы, типы React и т.д.). `default = never`
     */
    export type fy<T, N extends number = 1, E = never> = T extends E | DefaultExclude
        ? T
        : AnyFunc extends T
          ? Pretty.Func<Extract<T, AnyFunc>, E> | Exclude<T, AnyFunc>
          : T extends object
            ? { [K in keyof T]: Pretty.fy<T[K], Dec[N], E> }
            : T;

    /**
     * Развертка для функций. Инферит и разворачивает аргументы и `ReturnType` через `Pretty.fy`
     * @param T - исходный тип, который требуется "развернуть"
     * @param E - union исключений (напр. известные встроенные типы, типы React и т.д.). `default = never`
     * @param N1 - максимальный уровень вложенности для аргументов. `default = 2`
     * @param N2 - максимальный уровень вложенности для `ReturnType`. `default = 1`
     */
    export type Func<T, E = never, N1 extends number = 2, N2 extends number = 1> = T extends (
        ...args: infer A
    ) => infer R
        ? (...args: Pretty.fy<A, N1, E>) => Pretty.fy<R, N2, E>
        : T;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    export type Distribute<U> = U extends any ? { type: U }['type'] : never;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type DefaultExclude = Date | Event | HTMLElement | React.ReactNode | React.SyntheticEvent;

    type Dec = [never, 0, 1, 2, 3, 4, 5];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type AnyFunc = (...args: any) => any;
}
