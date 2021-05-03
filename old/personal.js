
var Employee_No =document.getElementById("Employee No.").value;
var Employee_Name =document.getElementById("Employee Name").value;
var Employee_Address =document.getElementById("Employee Address").value;
var City =document.getElementById("City").value;
var State =document.getElementById("State").value;
var PAN_No =document.getElementById("PAN No.").value;
var Adhaar_No =document.getElementById("Adhaar No.").value;
var PF_No =document.getElementById("PF No..").value;
var ESIC_No= document.getElementById("ESIC No.").value;
submitOK = "true";

if (isNaN(Employee_no) || Employee_no.length != 4) {
    alert("incorrect number");
    submitOK = "false";
  }
  
  if (Name.length >10) {
    alert("The name may have no more than 10 characters");
    submitOK = "false";
  }

  if (address.length >20) {
    alert("The address may have no more than 10 characters");
    submitOK = "false";
  }
  if (city.length >15) {
    alert("The city may have no more than 15 characters");
    submitOK = "false";
  }
  if (state.length >20) {
    alert("The state  may have no more than 20 characters");
    submitOK = "false";
  }

  if (isNaN(PAN_no) || PAN_no.length >10) {
    alert("The PAN NO. may have no more than 10 digits");
    submitOK = "false";
  }

  if (isNaN(Adhaar_No) || Adhaar_No.length >12) {
    alert("The adhaar NO. may have no more than 12 digits");
    submitOK = "false";
  }

  if (isNaN(PF_No) || PF_No.length >12) {
    alert("The PF NO. may have no more than 12 digits");
    submitOK = "false";
  }

  if (isNaN(ESIC_No) || ESIC_No.length >17) {
    alert("The ESIC NO. may have no more than 17 digits");
    submitOK = "false";
  }
 
  add.onclick =alert("employee detail added");
  