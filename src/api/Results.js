export const saveResult = (data) => {
    return new Promise((resolve, reject) => {
        let resultsList = []
        
        if(localStorage.getItem('results')) {
            resultsList = JSON.parse(localStorage.getItem('results'))
            localStorage.removeItem('results')
        }

        setTimeout(() => {  
            resultsList.push(data)
            localStorage.setItem('results', JSON.stringify(resultsList))
            resolve(resultsList)
        }, 3000);
    })
}

export const getResults = () => {
    return new Promise((resolve, reject) => {
        let resultsList = JSON.parse(localStorage.getItem('results')) || []

        setTimeout(() => {
            console.log(resultsList)
            resolve(resultsList)
        }, 300);
    })
}