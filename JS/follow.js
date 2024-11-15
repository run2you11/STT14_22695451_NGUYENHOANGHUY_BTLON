app.get('/track-order/:orderId', (req, res) => {
    const orderId = req.params.orderId;
    // Giả sử bạn có một hàm để tìm kiếm đơn hàng trong cơ sở dữ liệu
    const order = findOrderById(orderId);

    if (order) {
        res.json({ success: true, status: order.status });
    } else {
        res.json({ success: false });
    }
});