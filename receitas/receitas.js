const recipesJson = `{
    "recipes" : [
        {
            "name": "Arroz de Couve-Flor",
            "img": "arroz.jpg",
            "ingredients":  [
                "Arroz",
                "Couve-Flor",
                "Cebola Média",
                "Azeite"
            ],
            "instructions": "Deixe a couve-flor picada. Adicione os ingredientes e refogue bem. Adicione sal, tampe a panela e deixe cozinhar."
        },
        {
            "name": "Bolo de Café",
            "img": "bolo.jpg",
            "ingredients": [
                "Farinha de Trigo",
                "Açúcar",
                "Café Coado",
                "Chocolate em Pó",
                "Ovos"
            ],
            "instructions": "Bata o açúcar, as gemas e o café. Adicione farinha e chocolate e mexa bem. Bata as claras e junte à mistura."
        },
        {
            "name": "Coxinha de Brigadeiro",
            "img": "coxinha.jpg",
            "ingredients": [
                "Leite Condensado",
                "Chocolate em Pó",
                "Manteiga",
                "Morango",
                "Chocolate Granulado"
            ],
            "instructions": "Junte o leite condensado, chocolate em pó e manteiga. Aqueça no fogo babixo. Envolva os morangos e passe no granulao."
        }
    ]
}`;

const renderRecipes = () => {
    let recipes = JSON.parse(recipesJson);
    let html = recipes.recipes.map(renderCard)
        .reduce((accumulator, current) => accumulator + current);

    document.getElementById('cardContainer').innerHTML = html;
}

const renderIngredientsList = (ingredients) => {
    return ingredients
        .map((val) => "<li>" + val + "</li>")
        .reduce((acc, curr) => acc + curr);
}

const renderCard = (recipe) => {
    let ingredients = renderIngredientsList(recipe.ingredients);

    return `
        <div class="col">
            <div class="card">
                <img src=${recipe.img} class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${recipe.name}</h5>
                    <ul class="card-text">
                        ${ingredients}
                    </ul>
                    <hr>
                    <p class="card-text">
                        ${recipe.instructions}
                    </p>
                </div>
            </div>
        </div>
    `;
}