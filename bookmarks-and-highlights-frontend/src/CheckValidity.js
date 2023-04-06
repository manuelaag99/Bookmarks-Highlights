
export function nonEmptyText (value) {
    if (value === "") {
        return false
    } else {
        return true
    }
}

export function minLengthText (value, requiredLength) {
    if (value.length < requiredLength) {
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

export function isTextAnEmail (value) {
    if (value.includes("@")) {
        return true
    } else {
        return false
    }
}

export function isTextAPassword (value) {
    const specialChars = `/[!@#$%^&*()_+\-=\[\]{};':"|,.<>\/?]+/;`
    const doesItHaveSpecialCharacters = specialChars.split("").some(character => value.includes(character))
    if (doesItHaveSpecialCharacters) {
        if (value.length > 9) {
            if (value !== value.toLowerCase()) { //this checks if the string has at least one uppercase letter
                if (value !== value.toUpperCase()) {
                    return true
                } else {
                    return false
                }
            } else {
                return false
            }        
        } else {
            return false
        }
    } else {
        return false
    }
}