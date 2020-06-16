export const findIndexInArray = (arr: any[], value: any, field: string) => {
    let index = -1;
    if(arr.length === 0 || value) return index;
    index = arr.findIndex((item: any) => {
        return item[field] ? item[field] === value : item === value;
    });
    return index;
}