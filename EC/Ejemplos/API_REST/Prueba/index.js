function getFetchV1() {
  return fetch("http://localhost:3000/posts")
    .then((res) => res.json())
    .then((json) => {
      json.forEach((element) => {
        console.log(element.username);
      });
    });
}

