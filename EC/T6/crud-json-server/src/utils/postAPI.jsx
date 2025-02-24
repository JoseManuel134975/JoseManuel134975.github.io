export async function postAPI(url, producto) {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(producto),
    });
    return await res.json();
  }