document.querySelector('button').addEventListener('click', getUsers);  


function getUsers(){
  let xhr = new XMLHttpRequest(); 
  xhr.open('GET', 'https://api.github.com/users', true);  
  xhr.onload = function(){ 
    if(this.status == 200) { 
      let users = JSON.parse(this.responseText); 
      let output = '';   
      for (let i in users) { 
        output += 
        '<div class="user"' + 
        '<ul>' + 
        '<li>ID: '+users[i].id+'</li>' + 
        '<li>Login: '+users[i].login+'</li>' + 
        '</ul>' + 
        '</div>' ;
      }

    document.querySelector('.users').innerHTML = output; 


  }
  }
  xhr.send();

}