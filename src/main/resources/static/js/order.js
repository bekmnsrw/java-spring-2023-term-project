function applyPromo(totalOrderPrice, csrfToken) {
    const promo = document.getElementById("promo-code").value
    $.ajax(
        {
            type: "GET",
            url: "/discount",
            data: $.param({promoCode: promo}),
            headers: {'X-CSRF-Token': csrfToken},
            success: function (response) {
                document.getElementById("totalPrice").innerText = (totalOrderPrice - totalOrderPrice * response / 100).toFixed(1) + " ₽"
                document.getElementById("supporting-text").innerText = "Promo code successfully applied!"
                document.getElementById("supporting-text").style.color = "#0fc200"
            },
            error: function () {
                document.getElementById("totalPrice").innerText = (totalOrderPrice * 1).toFixed(1) + " ₽"
                document.getElementById("supporting-text").innerText = "No such promo code :("
                document.getElementById("supporting-text").style.color = "#c70000"
            }
        }
    )
}
