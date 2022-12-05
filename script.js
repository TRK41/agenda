var t8 = document.getElementById("eight");
var t9 = document.getElementById("nine");
var t10 = document.getElementById("ten");
var t11 = document.getElementById("eleven");
var t12 = document.getElementById("twelve");
var t1 = document.getElementById("one");
var t2 = document.getElementById("two");
var t3 = document.getElementById("three");
var t4 = document.getElementById("four");
var t5 = document.getElementById("five");
const saveBtnArr = document.querySelectorAll('button');
var arr = $(".8am")


for (let saveBtn of saveBtnArr) {

     saveBtn.addEventListener('click', function (event) {
          event.preventDefault();
          localStorage.setItem("8am", JSON.stringify(t8.value));// adding the key and value for local storage
          localStorage.setItem("9am", JSON.stringify(t9.value));
          localStorage.setItem("10am", JSON.stringify(t10.value));
          localStorage.setItem("11am", JSON.stringify(t11.value));
          localStorage.setItem("12pm", JSON.stringify(t12.value));
          localStorage.setItem("1pm", JSON.stringify(t1.value));
          localStorage.setItem("2pm", JSON.stringify(t2.value));
          localStorage.setItem("3pm", JSON.stringify(t3.value));
          localStorage.setItem("4pm", JSON.stringify(t4.value));
          localStorage.setItem("5pm", JSON.stringify(t5.value));


          window.onbeforeunload = function() {
               localStorage.setItem("8am", JSON.stringify(t8.value));
          }
     
     function saveTime() {
          let notes = localStorage.getItem("notes")
          var storedNotes = JSON.parse(localStorage.getItem("8am",t8.value));
          
          if (storedNotes) {
              notes = storedNotes;
              return;
          }
          localStorage.setItem(x,storedNotes);
     }
          
          console.log();
          saveTime()
});
}
     
document.getElementById("eight").value = JSON.parse(localStorage.getItem("8am"));
document.getElementById("nine").value = JSON.parse(localStorage.getItem("9am"));
document.getElementById("ten").value = JSON.parse(localStorage.getItem("10am"));
document.getElementById("eleven").value = JSON.parse(localStorage.getItem("11am"));
document.getElementById("twelve").value = JSON.parse(localStorage.getItem("12pm"));
document.getElementById("one").value = JSON.parse(localStorage.getItem("1pm"));
document.getElementById("two").value = JSON.parse(localStorage.getItem("2pm"));
document.getElementById("three").value = JSON.parse(localStorage.getItem("3pm"));
document.getElementById("four").value = JSON.parse(localStorage.getItem("4pm"));
document.getElementById("five").value = JSON.parse(localStorage.getItem("5pm"));


//current day time (real time)
setInterval(function time() {
     var todayDate = moment().format('MMMM Do YYYY h:mm:ss a');
     $("#currentDay").text(todayDate);
}, 1000);



//8am
//  const eight = '08:00:00'
//  const format = 'hh:mm:ss A'

//  var beforetime = moment(eight,format);

//  if (moment(time).isBefore(eight.valueOf)
//  (document.querySelector(".past") = document.getElementById('input')));