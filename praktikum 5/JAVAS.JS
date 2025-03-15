document.querySelectorAll(".detail-btn").forEach(button => {
    button.addEventListener("click", function() {
        alert("Detail Produk: " + this.getAttribute("data-product"));
    });
});