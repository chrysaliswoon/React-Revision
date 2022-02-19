export default function flatten(arr, result = []) {
    arr.forEach(elm => {
        switch(true) {
            case Array.isArray(elm) :
                flatten(elm, result); break 
            default :
                result.push(elm)
        }
    })
    return result
}