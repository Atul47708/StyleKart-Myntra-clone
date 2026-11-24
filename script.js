
document.addEventListener("DOMContentLoaded", function () {

    // Add products to bag
    document.querySelectorAll(".add-btn").forEach(function (button) {

        button.addEventListener("click", function () {

            const productCard = button.closest(".product-card");

            const product = {
                id: productCard.querySelector("h3").innerText,
                name: productCard.querySelector("h3").innerText,
                image: productCard.querySelector("img").src,
                price: Number(
                    productCard.querySelector(".price").innerText
                        .replace(/[^\d]/g, "")
                ),
                quantity: 1
            };

            let cart = JSON.parse(localStorage.getItem("stylekartCart")) || [];

            const existingProduct = cart.find(item => item.id === product.id);

            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                cart.push(product);
            }

            localStorage.setItem("stylekartCart", JSON.stringify(cart));

            alert(product.name + " added to your bag!");
        });
    });

});
