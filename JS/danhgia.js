app.post('/submit-review', (req, res) => {
    const { productName, rating, comment } = req.body;
    // Giả sử bạn có một hàm để lưu đánh giá vào cơ sở dữ liệu
    const success = saveReviewToDatabase({ productName, rating, comment });

    if (success) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});
app.get('/get-reviews/:productName', (req, res) => {
    const productName = req.params.productName;
    // Giả sử bạn có một hàm để lấy đánh giá từ cơ sở dữ liệu
    const reviews = getReviewsByProductName(productName);

    res.json({ reviews });
});
app.get('/search-products', (req, res) => {
    const query = req.query.q.toLowerCase();
    const products = getAllProducts(); // Giả sử bạn có hàm để lấy tất cả sản phẩm
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );

    res.json({ products: filteredProducts });
});