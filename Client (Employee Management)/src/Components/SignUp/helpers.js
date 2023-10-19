export async function postUserData(data) {
  console.log(data)
  return await fetch(
    'http://localhost:4000/admin/add-employee',
    {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer ' +
          localStorage.getItem('tocken') +
          ' ' +
          localStorage.getItem('userId')
      },
      body: JSON.stringify({
        userName: data.userName,
        userEmail: data.email,
        pass: data.pass,
        userType: data.userType
      })
    }
  )
}
