$(document).ready(function(){
  $(".rowslider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots : true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
}); 

function store(){
  let username = document.getElementById('username');
  let email = document.getElementById('email');
  let password = document.getElementById('pass');
  if(username.value.length == 0){
      alert('Please fill details');
  } else if(email.value.length == 0){
      alert('Please fill details');
  } else if(password.value.length == 0){
      alert('please fill details');
  } else{
      localStorage.setItem('username', username.value);
      localStorage.setItem('email', email.value);
      localStorage.setItem('pass', password.value);
  }
  console.log(username);
  console.log(email);
  console.log(password);
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}