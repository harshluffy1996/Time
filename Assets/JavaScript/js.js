function monthfn() {
  var month = new Date();
  var no1 = month.getMonth();
  //alert("The Month is" + date);
  switch (no1) {
    case 0:
      date = "Jan";
      break;
    case 1:
      date = "Feb";
      break;
    case 2:
      date = "March";
      break;
    case 3:
      date = "April";
      break;
    case 4:
      date = "May";
      break;
    case 5:
      date = "June";
      break;
    case 6:
      date = "July";
    case 7:
      date = "Aug";
      break;
    case 8:
      date = "Sept";
      break;
    case 9:
      date = "Oct";
      break;
    case 10:
      date = "Nov";
      break;
    case 11:
      date = "Dec";
      break;
  }
  window.document.f1.t1.value = date;
}
