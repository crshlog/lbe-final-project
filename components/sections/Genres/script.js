export async function loadCards() {
    const response = await fetch('http://localhost:8080/api/items');

    console.log("status:", response.status);

    const items = await response.json();

    console.log("items:", items);

    return items;
}