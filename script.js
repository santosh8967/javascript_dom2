var list1=[];
var list2=[];
var list3=[];
var list4=[];
var list5=[];
var list6=[];
var list7=[];
var list8=[];

var n=1;
var x=0;
function add()
{
  var addrow=document.getElementById("table-ins");
  var newrow=addrow.insertRow(n);
  list1[x]=document.getElementById("first-name").value;
  list2[x]=document.getElementById("last-name").value;
  list3[x]=document.getElementById("address").value;
  list4[x]=document.getElementById("state").value;
  list5[x]=document.getElementById("country").value;
  list6[x]=document.getElementById("pincode").value;
  list7[x]=document.getElementById("male").value;
  list8[x]=document.getElementById("indian").value;

  var cel1=newrow.insertCell(0)
  var cel2=newrow.insertCell(1)
  var cel3=newrow.insertCell(2)
  var cel4=newrow.insertCell(3)
  var cel5=newrow.insertCell(4)
  var cel6=newrow.insertCell(5)
  var cel7=newrow.insertCell(6)
  var cel8=newrow.insertCell(7)

  cel1.innerHTML=list1[x];
  cel2.innerHTML=list2[x]
  cel3.innerHTML=list3[x]
  cel4.innerHTML=list4[x]
  cel5.innerHTML=list5[x]
  cel6.innerHTML=list6[x]
  cel7.innerHTML=list7[x]
  cel8.innerHTML=list8[x]

  n++;
  x++
}