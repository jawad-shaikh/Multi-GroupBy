const multiGroupBy = (array, callback) => {
    const result = {};

    array.forEach((item) => {
        const groups = callback(item);

        groups.forEach((group) => {
        if (!result[group]) {
            result[group] = [];
        }

        result[group].push(item);
        });
    });

    return result;
};

module.exports = multiGroupBy;
