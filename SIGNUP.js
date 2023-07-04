function validateForm() {
    let x = document.getElementById("email").value;
    let y = document.getElementById("pwd").value;
    let z = document.getElementById("FNAME").value;
    let p = document.getElementById("LNAME").value;
    let q = document.getElementById("pwd").value;
    let r = document.getElementById("PNO").value;
    if (x  == "" && y=="" && z=="" && p==" " && q=="" && r=="" ) {
      alert("Fill all the Entries");
      return false;
    }
    else{
      alert("Successfully Created");
    }
  }