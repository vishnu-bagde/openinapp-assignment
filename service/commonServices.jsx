export function isEmpty(val) {
    return val === undefined || val == null || val == "NaN" || val == "undefined" || val.length === 0 || Object.keys(val).length === 0 || val == '' ? true : false;
}

export const getDataFromLocalStorage = (key) => {
    if (typeof window !== "undefined") {
        const data = localStorage.getItem(key);
        if (!isEmpty(data) && data != "undefined") {
            return JSON.parse(data);
        } else {
            return null;
        }
    }
    return null;
};