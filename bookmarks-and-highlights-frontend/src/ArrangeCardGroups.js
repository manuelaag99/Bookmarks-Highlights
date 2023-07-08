function arrangeCardGroups (label, entries) {
    if (entries) {
        if (entries.length === 0) {
            return "empty"
        } else {
            const selectedArray = entries.map(entry => entry[label]).flat(1) //creates an array of only the labels, flattens it if necessary  
            const titlesArrayNoDuplicates = selectedArray.filter((item, index) => selectedArray.indexOf(item) === index) //eliminates repeated labels
            const listOfCardObjects = [] //starts an empty array 
            titlesArrayNoDuplicates.map((title) => {
                var cardObject = {title: title, labelId: "tagName=" + title , collection: []}
                listOfCardObjects.push(cardObject)
            }) //turns each element into an object with an array within it 
            listOfCardObjects.map((cardObject) => {
                entries.map((entry) => {
                    if (entry[label].toString() === cardObject.title) {
                        cardObject.collection.push(entry)
                    } else if (entry[label].toString().includes(cardObject.title)) {
                        cardObject.collection.push(entry)
                    }
                })
            })
            console.log(entries)
            return listOfCardObjects;
        }   
    }
};

export { arrangeCardGroups };