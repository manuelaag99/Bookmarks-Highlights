function arrangeCardGroups (label, entries) {
    if (entries) {
        if (entries.length === 0) {
            return "empty"
        } else {
            const selectedArray = entries.map(entry => entry[label])
            const titlesArrayNoDuplicates = selectedArray.filter((item, index) => selectedArray.indexOf(item) === index)
            const listOfCardObjects = []
            titlesArrayNoDuplicates.map((title) => {
                var cardObject = {title: title, labelId: "tagName=" + title , collection: []}
                listOfCardObjects.push(cardObject)
            })
            listOfCardObjects.map((cardObject) => {
                entries.map((entry) => {
                    if (entry[label] === cardObject.title) {
                        cardObject.collection.push(entry)
                    }
                })
            })
            return listOfCardObjects
        }   
    }
}

export { arrangeCardGroups }

function arrangeCardGroupsWhenLabelIsArray (label, entries) {
    if (entries) {
        if (entries.length === 0) {
            return "empty"
        } else {
            const selectedArray = entries.map(entry => entry[label]).flat(1)
            const titlesArrayNoDuplicates = selectedArray.filter((item, index) => selectedArray.indexOf(item) === index)
            const listOfCardObjects = []
            titlesArrayNoDuplicates.map((title) => {
                var cardObject = {title: title, labelId: "tagName=" + title , collection: []}
                listOfCardObjects.push(cardObject)
            })
            listOfCardObjects.map((cardObject) => {
                entries.map((entry) => {
                    if (entry[label].includes(cardObject.title)) {
                        cardObject.collection.push(entry)
                    }
                })
            })
            return listOfCardObjects
        }
    }
}

export { arrangeCardGroupsWhenLabelIsArray }