// Lấy các phần tử HTML
const clickButton = document.getElementById('clickButton');
const clickCountDisplay = document.getElementById('clickCount');

// Khởi tạo biến đếm
let count = 0;

// Thêm sự kiện click cho nút
clickButton.addEventListener('click', function() {
    count++; // Tăng biến đếm
    clickCountDisplay.textContent = count; // Cập nhật số lần click hiển thị trên trang
});