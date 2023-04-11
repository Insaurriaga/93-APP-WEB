function addUser() {
    // Essa função addUser() adicionará o nome do usuário ao local storage e redirecionará o usuário à página kwitterRoom.
  
    userName = document.getElementById("userName").value;
  
    localStorage.setItem("userName", userName);
    
      window.location = "kwitterRoom.html";
  }
  
  