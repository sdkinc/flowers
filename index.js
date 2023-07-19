const flowersElement = document.getElementById("flowers-container");

async function loadFlowers() {
    const resp = await fetch("https://sdkinc.github.io/BookingKino/flowers.json");
    const obj = await resp.json();
    console.log(obj);
    obj.forEach((flower) => {
        console.log(flower);
        const { name, color, description, image, maxHeight } = flower;
        const cardElement = document.createElement("div");
        cardElement.className = 'card';
        const nameElement = document.createElement("span");
        nameElement.className = 'card-element title';
        const imageElement = document.createElement("img");
        imageElement.className = 'image-element card-element';
        imageElement.src = image;
        nameElement.textContent = `${name} ${color} ${description}`;
        cardElement.append(nameElement, imageElement);
        flowersElement.append(cardElement);
    })
};

loadFlowers();