const initializeGroups = (allPossibleGroups) => {
    return allPossibleGroups.reduce((acc, group) => {
        acc[group] = [];
        return acc;
    }, {});
};

const multiGroupBy = (array, allPossibleGroups, callback) => {
    const result = initializeGroups(allPossibleGroups);

    array.forEach((item) => {
        const groups = callback(item);

        groups.forEach((group) => {
            result[group].push(item);
        });
    });

    return result;
};

module.exports = multiGroupBy;
