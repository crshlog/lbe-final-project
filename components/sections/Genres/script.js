export async function loadCards() {
    // const response = await fetch(
    //   "https://8d35-103-186-60-106.ngrok-free.app/api/items",
    //   {
    //     headers: {
    //       "ngrok-skip-browser-warning": "true",
    //     },
    //   },
    // );
    const response = await fetch("http://localhost:8080/api/items");

    console.log("status:", response.status);

//   const response = await fetch("./test.json");

  const items = await response.json();

  console.log("items:", items);

  return items;
}
