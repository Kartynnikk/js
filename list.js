const input = document.getElementById("input");
const purchase = document.getElementById("purchase");
const marker = document.getElementById("marker");

console.log(input);
console.log(purchase);
console.log(marker);

marker.addEventListener("click", () => {
    purchase.textContent = "";
})

const addPurchase = () => {
    let additPurchase = document.createElement("h2");
    additPurchase.innerHTML = input.value;
    console.log(additPurchase);


    additPurchase.addEventListener("click", () => {
        const lineThroughStyle = "line-through";
        const noneStyle = "none";

        (additPurchase.style.textDecoration != lineThroughStyle) ? additPurchase.style.textDecoration = lineThroughStyle: additPurchase.style.textDecoration = noneStyle;
    });


    purchase.appendChild(additPurchase);
    input.value = "";
}


input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addPurchase();
    }
})