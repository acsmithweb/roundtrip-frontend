var url = 'http://localhost:3000/'

export function retrieve_master_plans() {
  return fetch(url + "master-plans/")
    .then(response => {
      return response.json()
    });
}

export function retrieve_unmatched_plan(id) {
  return fetch(url + "unmatched-plans/" + id)
    .then(response => {
      return response.json()
    });
}

export function create_alias(params) {
  fetch(url + 'aliases/',
  {
    method: 'POST',
    headers:
    {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(params)})
    .then(res => res.json())
    .then(res => alert('alias has been created'));
}

export function create_master_plan(params) {
  fetch(url + 'master-plans',
  {
    method: 'Post',
    headers:
    {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(params)})
    .then(res => res.json())
    .then(res => alert('master plan has been created'));
}
