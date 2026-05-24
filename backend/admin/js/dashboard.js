const token = localStorage.getItem('savedToken')

async function loadUsers() {
  const response = await fetch('/api/projects')
  const projects = await response.json()
  document.querySelector('#projectList').innerHTML = projects.map(project => `
  <li>
    ${project.title}
    <button onclick="deleteUser(${project.id})">Видалити</button>
  </li>
 `).join('')
}
document.querySelector('button[name="add"]').addEventListener('click', async () => {

  const getTitle = document.querySelector('input[name = "title"]').value
  const getMini_description = document.querySelector('input[name = "mini_description"]').value
  const geFtull_description = document.querySelector('input[name = "full_description"]').value
  const getImage_url = document.querySelector('input[name = "image_url"]').value
  const getGithub_url = document.querySelector('input[name = "github_url"]').value
  const getSite_url = document.querySelector('input[name = "site_url"]').value
  const info = {
    title: getTitle,
    mini_description: getMini_description,
    full_description: geFtull_description,
    image_url: getImage_url,
    github_url: getGithub_url,
    site_url: getSite_url
  }

  await fetch('/api/projects', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(info)


  })
  loadUsers()
})

async function deleteUser(id) {
  await fetch(`/api/projects/${id}`, {
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${token}` }
  })

  loadUsers()
}

loadUsers()