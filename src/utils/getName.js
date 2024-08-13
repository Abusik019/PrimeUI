export const getName = (array) => {
    const extractNames = (items) => 
        items.reduce((acc, item) => {
            if(item.visible){
                acc.push(item.name);
                if(item.links) {
                    acc.push(...extractNames(item.links))
                }
            }
            return acc;
        }, [])

    return extractNames(array)
}

export const getVisibleItems = (array) => {
    const extractNames = (items) => 
        items.reduce((acc, item) => {
            if(item.visible){
                const newItem = { ...item }; 
                if(item.links) {
                    newItem.links = extractNames(item.links); 
                }
                acc.push(newItem);
            }
            return acc;
        }, []);

    return extractNames(array);
}
