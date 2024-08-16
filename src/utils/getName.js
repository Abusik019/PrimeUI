export const getName = (array) => {
    const extractNames = (items) =>
        items.reduce((acc, item) => {
            acc.push(item.name);
            if (item.links) {
                acc.push(...extractNames(item.links));
            }

            return acc;
        }, []);

    return extractNames(array);
};
