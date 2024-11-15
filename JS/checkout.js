document.getElementById('checkout-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // Kiểm tra thông tin người dùng
    if (!name || !email || !address || !phone) {
        alert('Vui lòng điền đầy đủ thông tin.');
        return;
    }

    // Kiểm tra định dạng email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Vui lòng nhập địa chỉ email hợp lệ.');
        return;
    }

    // Kiểm tra định dạng số điện thoại (giả định là số điện thoại Việt Nam)
    const phonePattern = /^(0[1-9]\d{8})$/;
    if (!phonePattern.test(phone)) {
        alert('Vui lòng nhập số điện thoại hợp lệ.');
        return;
    }

    // Xử lý thanh toán
    alert(`Cảm ơn ${name}! Đơn hàng của bạn đã được xác nhận. Chúng tôi sẽ gửi đến địa chỉ: ${address}.`);

    // Xóa giỏ hàng sau khi thanh toán
    localStorage.removeItem('cart');
    window.location.href = 'index.html'; // Quay lại trang chủ
});
document.getElementById('checkout-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // Kiểm tra thông tin người dùng
    if (!name || !email || !address || !phone) {
        alert('Vui lòng điền đầy đủ thông tin.');
        return;
    }

    // Kiểm tra định dạng email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Vui lòng nhập địa chỉ email hợp lệ.');
        return;
    }

    // Kiểm tra định dạng số điện thoại
    const phonePattern = /^(0[1-9]\d{8})$/;
    if (!phonePattern.test(phone)) {
        alert('Vui lòng nhập số điện thoại hợp lệ.');
        return;
    }

    // Gửi thông tin đơn hàng qua API
    const orderDetails = {
        name,
        email,
        address,
        phone,
        cart: JSON.parse(localStorage.getItem('cart')) || []
    };

    fetch('https://your-api-endpoint.com/send-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
        .then(response => response.json())
        .then(data => {
            alert(`Cảm ơn ${name}! Đơn hàng của bạn đã được xác nhận. Chúng tôi sẽ gửi đến địa chỉ: ${address}.`);
            localStorage.removeItem('cart');
            window.location.href = 'index.html'; // Quay lại trang chủ
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Đã xảy ra lỗi trong quá trình xử lý đơn hàng. Vui lòng thử lại.');
        });
});
document.getElementById('checkout-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form

    const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // Kiểm tra thông tin người dùng
    if (!name || !email || !address || !phone) {
        alert('Vui lòng điền đầy đủ thông tin.');
        return;
    }

    // Xử lý thanh toán dựa trên phương thức đã chọn
    if (paymentMethod === 'credit-card') {
        // Xử lý thanh toán thẻ tín dụng
        alert('Đang xử lý thanh toán bằng thẻ tín dụng...');
    } else if (paymentMethod === 'bank-transfer') {
        // Xử lý thanh toán chuyển khoản ngân hàng
        alert('Vui lòng chuyển khoản đến tài khoản ngân hàng của chúng tôi.');
    } else if (paymentMethod === 'cod') {
        // Xử lý thanh toán khi nhận hàng
        alert('Bạn đã chọn thanh toán khi nhận hàng.');
    } else if (paymentMethod === 'e-wallet') {
        // Xử lý thanh toán qua ví điện tử
        alert('Đang chuyển đến trang thanh toán ví điện tử...');
    }

    // Gửi thông tin đơn hàng
    const orderDetails = {
        name,
        email,
        address,
        phone,
        paymentMethod,
        cart: JSON.parse(localStorage.getItem('cart')) || []
    };

    // Gửi thông tin đơn hàng đến server
    fetch('https://your-api-endpoint.com/submit-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
        .then(response => response.json())
        .then(data => {
            alert(`Cảm ơn ${name}! Đơn hàng của bạn đã được xác nhận.`);
            localStorage.removeItem('cart');
            window.location.href = 'index.html'; // Quay lại trang chủ
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Đã xảy ra lỗi trong quá trình xử lý đơn hàng. Vui lòng thử lại.');
        });
});