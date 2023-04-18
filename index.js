// Add your code here
function submitData(name, email) {
    const formData = { name, email };
  
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
  
    return fetch("http://localhost:3000/users", configObj)
      .then(response => response.json())
      .then(data => {
        document.body.append(data.id);
        return data;
      })
      .catch(error => {
        document.body.append(error.message);
        return error;
      });
  }