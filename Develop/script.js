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
          localStorage.setItem("8am", JSON.stringify(t8.value));
          localStorage.setItem("9am", JSON.stringify(t9.value));
          localStorage.setItem("10am", JSON.stringify(t10.value));
          localStorage.setItem("11am", JSON.stringify(t11.value));
          localStorage.setItem("12pm", JSON.stringify(t12.value));
          localStorage.setItem("1pm", JSON.stringify(t1.value));
          localStorage.setItem("2pm", JSON.stringify(t2.value));
          localStorage.setItem("3pm", JSON.stringify(t3.value));
          localStorage.setItem("4pm", JSON.stringify(t4.value));
          localStorage.setItem("5pm", JSON.stringify(t5.value));

     //     //localStorage.setItem('8am',timeBlock.value);
     
     function saveTime() {
          let notes = localStorage.getItem("notes")
          var storedNotes = JSON.parse(localStorage.getItem("t8"));
          
          if (storedNotes) {
              notes = storedNotes;
              return;
          }
     }
          t8.innerHTML=localStorage.notes;
          console.log();
          saveTime();
     
});
}
// saveBtn.addEventListener('click', function (event) {
//      event.preventDefault();
//      localStorage.setItem("9am", JSON.stringify(t9.value));
//      t9.value.innerHTML = this.value 
// //     //localStorage.setItem('8am',timeBlock.value);

// function saveTime() {
//      let notes = localStorage.getItem("notes")
//      var storedNotes = JSON.parse(localStorage.getItem("t9"));

//      if (storedNotes) {
//          notes = storedNotes;
//          return;
//      }
// }
//      t9.innerHTML=localStorage.notes;
//      console.log();
//      saveTime();
// });


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