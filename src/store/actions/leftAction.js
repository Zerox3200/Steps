export const Rolling = "Rolling";

export const Move = (direction) => {
    return {
        type: Rolling,
        payload: direction
    }
}