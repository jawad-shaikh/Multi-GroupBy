declare module "multi-groupby" {
    function initializeGroups<T extends string>(allPossibleGroups: T[]): Record<T, any[]>;

    function multiGroupBy<T, K extends string>(
        array: T[],
        allPossibleGroups: K[],
        callback: (item: T) => K[]
    ): Record<K, T[]>;

    export = multiGroupBy;
}
