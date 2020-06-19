let input = document.querySelector('.field input');
let show_hide = document.querySelector('.field i');
let enter = document.querySelector('.field span i');
let text = document.querySelector('.field span p');
let field = document.querySelector('.field');

function showHide(){
  if(input.type == "password"){
    show_hide.className = "fa fa-eye-slash";
    input.type = "text";
  } else {
    show_hide.className = "fa fa-eye";
    input.type = "password";
  }
}

function validation(){
  if(enter.className == "fa fa-arrow-right"){
    text.style.opacity = "1";
    enter.style.width = "100%";
    field.style.border = "0";

    if(input.value == "sachuverma"){
      text.innerHTML = "Correct Password";
      enter.className = "fa fa-check";
      enter.style.background = "rgba(15,202,62)";
    } else {
      text.innerHTML = "Wrong Password";
      enter.className = "fa fa-times";
      enter.style.background = "rgba(234,45,45)";
    }
  } else {
    field.style.border = "2px solid rgb(0,162,255)";
    text.innerHTML = "";
    enter.style.width = "15%";
    enter.className = "fa fa-arrow-right";
    enter.placeholder = "Password";
    enter.style.background = "rgba(0,162,255)";

  }
}