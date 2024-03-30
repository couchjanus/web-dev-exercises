
class AuthException extends Error {
  constructor(code, message) {
    
    this.message;
  }
  
  toString() {
    return this.message;
  }
}

let isAuth = (auth)  => auth ?? false;


let dialogBoxId=document.getElementById("dialogBox");



function showDialog(e){
  dialogBoxId.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
    }
  });
  
  dialogBoxId.showModal();
}

function closeDialog(){
  dialogBoxId.close(); 
}

