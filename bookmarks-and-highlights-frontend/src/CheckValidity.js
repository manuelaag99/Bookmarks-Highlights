const nonEmptyText = (value) => {
    if (value === "") {
        return false
    } else {
        return true
    }
}

export { nonEmptyText };

const minLengthText = (value) => {
    if (value.length > 8) {
        return false
    } else {
        return true
    }
}

export { minLengthText };