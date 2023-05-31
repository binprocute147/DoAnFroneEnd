// chèn hình ảnh để sau 3s sẽ đổi ảnh 1 lần và click vào < > sẽ chuyển ảnh tới hoặc lui 
var images = ["public/images/1.jpg", "public/images/2.jpg"];
var currentImage = 0;

document.getElementById("prevBtn").addEventListener("click", function () {
  currentImage--;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  document.getElementById("myImage").src = images[currentImage];
});

document.getElementById("nextBtn").addEventListener("click", function () {
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
  document.getElementById("myImage").src = images[currentImage];
});
setInterval(function () {
  currentImage++;
  if (currentImage >= images.length) {
  currentImage = 0;
  }
  document.getElementById("myImage").src = images[currentImage];
 }, 3000);
 

// map lấy mã nguồn từ microsoft maps và key tự tạo 
function initMap() {
  var map = new Microsoft.Maps.Map(document.getElementById('map'), {
    center: new Microsoft.Maps.Location(47.6062, -122.3321),
    zoom: 12
  });
}



