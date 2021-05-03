var b=document.getElementById("Basic Pay").value;
var d=document.getElementById("DA").value;
var h=document.getElementById("HRA").value;
var m=document.getElementById("Medical insurance").value;
var c=document.getElementById("conveyence").value;
var p=document.getElementById("PF").value;
var t=document.getElementById("TDS").value;

if (isNaN(b)) {
    alert("invalid entry");
    submitOK = "false";
  }

  if (isNaN(d)) {
    alert("invalid entry");
    submitOK = "false";
  }
  if (isNaN(h)) {
    alert("invalid entry");
    submitOK = "false";
  }
  if (isNaN(m)) {
    alert("invalid entry");
    submitOK = "false";
  }
  if (isNaN(c)) {
    alert("invalid entry");
    submitOK = "false";
  }
  if (isNaN(p)) {
    alert("invalid entry");
    submitOK = "false";
  }
  if (isNaN(t)) {
    alert("invalid entry");
    submitOK = "false";
  }

  var p_deduct= (b/10)
  var salary=a+d+h+m+c+p+t;
  