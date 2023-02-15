const nonEmptyText = (value) => {
    if (value === "") {
        return false
    } else {
        return true
    }
}

export { nonEmptyText };