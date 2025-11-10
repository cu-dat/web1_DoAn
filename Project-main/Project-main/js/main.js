// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

var locks = document.querySelectorAll('.lock');

locks.forEach(function(lock, index) {
  // Thêm sự kiện 'click' cho mỗi biểu tượng khóa
  lock.addEventListener('click', function() {
    // Lấy hàng chứa biểu tượng khóa được nhấn
    var row = lock.parentNode.parentNode;

    // Toggle class 'highlight' của hàng khi biểu tượng khóa được nhấn
    row.classList.toggle('highlight');
  });
});