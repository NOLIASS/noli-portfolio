
  document.querySelector('button[name="send"]').addEventListener('click', async () => {
    const getEmail = document.querySelector('input[name = "email"]').value
    const getPassword = document.querySelector('input[name = "password"]').value



    const data = { email: getEmail, password: getPassword }


    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    const result = await response.json()

    localStorage.setItem('savedToken', result.token)
    window.location.href = '/admin/dashboard.html'

  })
