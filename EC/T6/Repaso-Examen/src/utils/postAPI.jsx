export const postAPI = async (url, obj) => {
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(obj)
    })
    return response.json()
}