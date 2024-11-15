app.get('/get-orders', (req, res) => {
    // Giả sử bạn có một hàm để lấy tất cả đơn hàng từ cơ sở dữ liệu
    const orders = getAllOrders();

    res.json({ orders });
});

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.innerText = message;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 5000); // Ẩn thông báo sau 5 giây
}

// Ví dụ sử dụng
showNotification('Cảm ơn bạn! Đơn hàng của bạn đã được xác nhận.');
app.post('/send-notification', (req, res) => {
    const { userId, message } = req.body;
    // Giả sử bạn có một hàm để lưu thông báo vào cơ sở dữ liệu
    const success = saveNotificationToDatabase({ userId, message });

    if (success) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

function trackEvent(eventName) {
    gtag('event', eventName, {
        'event_category': 'Ecommerce',
        'event_label': 'User  Actions'
    });
}

// Ví dụ sử dụng
trackEvent('add_to_cart');