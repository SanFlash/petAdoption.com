document.addEventListener("DOMContentLoaded", function () {
    const pets = [
        { name: "Luna", age: "2 years", breed: "Golden Retriever", image: "dog1.jpg" },
        { name: "Milo", age: "1 year", breed: "Persian Cat", image: "cat1.jpg" },
        { name: "Fluffy", age: "3 years", breed: "Rabbit", image: "rabbit1.jpg" }
    ];

    const petContainer = document.querySelector(".pet-container");
    const modal = document.querySelector(".modal");
    const closeModal = document.querySelector(".close-btn");

    function loadPets() {
        petContainer.innerHTML = "";
        pets.forEach(pet => {
            const petCard = document.createElement("div");
            petCard.classList.add("pet-card");
            petCard.innerHTML = `
                <img src="${pet.image}" alt="${pet.name}">
                <h3>${pet.name}</h3>
                <p>${pet.age} | ${pet.breed}</p>
                <button class="adopt-btn">Adopt Me</button>
            `;
            petCard.querySelector(".adopt-btn").addEventListener("click", () => {
                modal.style.display = "flex";
            });
            petContainer.appendChild(petCard);
        });
    }

    loadPets();

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    document.getElementById("dark-mode-toggle").addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
