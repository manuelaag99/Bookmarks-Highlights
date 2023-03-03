// export function checkInput (value) {
//     if ()
// }

export function nonEmptyText (value) {
    if (value === "") {
        return false
    } else {
        return true
    }
}

export function minLengthText (value, requiredLength) {
    if (value.length > requiredLength) {
        return false
    } else {
        return true
    }
}

export function areBothTextsTheSame (textOne, textTwo) {
    if (textOne === textTwo) {
        return true
    } else {
        return false
    }
}