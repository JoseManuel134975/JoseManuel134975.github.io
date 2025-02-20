export const postAPI = async (url, obj) => {
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(obj)
    })
    return response.json()
}

export const requestPOST = async (url, obj) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
    return response.json()
}