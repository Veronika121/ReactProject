export const fetchData = (url) => {
  let data;
  let err;
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else throw new Error(response.statusText);
    })
    .then((resp) => {
      if (resp) {
        data = resp;
      } else throw new Error('Not found.');
    })
    .catch((error) => {
      err = error.message;
    });
  return { data, err };
};
