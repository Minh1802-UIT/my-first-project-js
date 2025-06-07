// Encapsulate logic to avoid polluting the global scope
(() => {
    // Lấy các phần tử HTML
    const clickButton = document.getElementById('clickButton');
    const clickCountDisplay = document.getElementById('clickCount');

    // Kiểm tra sự tồn tại của các phần tử trước khi thao tác
    if (!clickButton || !clickCountDisplay) {
        console.error('Required HTML elements not found.');
        return;
    }

    // Khởi tạo biến đếm
    let count = 0;

    // Thêm sự kiện click cho nút (dùng arrow function)
    clickButton.addEventListener('click', () => {
        count++; // Tăng biến đếm
        clickCountDisplay.textContent = count; // Cập nhật số lần click hiển thị trên trang
    });
})();