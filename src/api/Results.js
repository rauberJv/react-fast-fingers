export const saveResult = (data) => {
    return new Promise((resolve, reject) => {
        let resultsList = []

        if (localStorage.getItem('results')) {
            resultsList = JSON.parse(localStorage.getItem('results'))
            localStorage.removeItem('results')
        }

        setTimeout(() => {
            resultsList.push(data)
            localStorage.setItem('results', JSON.stringify(resultsList))
            resolve(resultsList)
        }, 700);
    })
}

export const getResults = () => {
    return new Promise((resolve, reject) => {
        let resultsList = JSON.parse(localStorage.getItem('results')) || []

        setTimeout(() => {
            resolve(resultsList)
        }, 700);
    })
}

export const deleteResult = (data) => {
    return new Promise((resolve, reject) => {
        let resultsList = JSON.parse(localStorage.getItem('results'))

        if (resultsList.length > 0) {
            setTimeout(() => {
                resultsList = resultsList.filter(result => result.date !== data.date)

                localStorage.removeItem('results')
                localStorage.setItem('results', JSON.stringify(resultsList))

                resolve(resultsList)
            }, 700);
        }
    })
}