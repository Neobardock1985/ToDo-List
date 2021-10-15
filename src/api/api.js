export async function fetchData(url, options = {}){
  return fetch(url, {
    headers: {
      'Content-Type': 'application/json'
    },
    ...options,
  }).then(res => res.json())
};