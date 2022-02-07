
var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
   event.preventDefault();
   var status = document.getElementById("my-form-status");
   var data = new FormData(event.target);
   fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
   }).then(response => {
      if (response.ok) {
         status.innerHTML = "Password: Freewifi";
         form.reset()
      } else {
         response.json().then(data => {
         if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
               status.innerHTML = "You need to fill you the form so we can make sure how many people are on are conection"
            }
         })
      }
    }).catch(error => {
       status.innerHTML = "Oops! There was a problem submitting your form"
    });
  }
form.addEventListener("submit", handleSubmit)
