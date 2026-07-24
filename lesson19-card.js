
function createCard(title, content, imageUrl) {
    const card = document.createElement("div");
    card.className = "card";

    if (imageUrl) {
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = title;
        img.className = "card"
        card.appendChild(img);
    }

    const cardBody = document.createElement("div");
    cardBody.className = "cardBody";

    const cardTitle = document.createElement("h3");
    cardTitle.className = "card-title";
    cardTitle.textContent = title;

    const cardContent = document.createElement("p");
    cardContent.className = "card-content";
    cardContent.textContent = content;

    const button = document.createElement("button");
    button.className = "card-button";
    button.textContent = "Learn More";

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardContent);
    cardBody.appendChild(button);
    card.appendChild(cardBody);

    return card;
}

const articles = [
    {title: "Javascript basic", content: "Learn the basic syntax", image: "js-basic.png"},
    {title: "Javascript basic", content: "Learn the basic method", image: "js-basic.png"},
    {title: "Javascript basic", content: "Learn the basic concept", image: "js-basic.png"}
];

const layout = document.getElementById("card-layout");

articles.forEach(articles => {
    const card = createCard(articles.title, articles.content, articles.imageUrl);
    layout.appendChild(card);
});

