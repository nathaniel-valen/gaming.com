const Testimoni = document.querySelector('.our-product')

fetch('testi.json')
    .then((response) => response.json())
    .then((data) => {
        for (let i = 0; i < data.length; i++) {
            div = document.createElement('div')
            div.innerHTML = `
            <div class="container-testi">
            <div class="card-testi">
                <img class="testi-image" src="assett/testimoni/${data[i].Foto1}.png" alt="html" width="170px">
                <br>
                <h2>${data[i].Name1}</h2>
                <p>${data[i].Testi1}</p>
                <img class="rating-image" src="assett/rating/${data[i].rating1}.png" width="75px">
            </div>
            <div class="card-testi">
                <img class="testi-image" src="assett/testimoni/${data[i].Foto2}.png" alt="html" width="170px">
                <br>
                <h2>${data[i].Name2}</h2>
                <p>${data[i].Testi2}</p>
                <img class="rating-image" src="assett/rating/${data[i].rating2}.png" width="75px">
            </div>
            <div class="card-testi">
                <img class="testi-image" src="assett/testimoni/${data[i].Foto3}.png" alt="html" width="170px">
                <br>
                <h2>${data[i].Name3}</h2>
                <p>${data[i].Testi3}</p>
                <img class="rating-image" src="assett/rating/${data[i].rating3}.png" width="75px">
            </div>
            <div class="card-testi">
                <img class="testi-image" src="assett/testimoni/${data[i].Foto4}.png" alt="html" width="170px">
                <br>
                <h2>${data[i].Name4}</h2>
                <p>${data[i].Testi4}</p>
                <img class="rating-image" src="assett/rating/${data[i].rating4}.png" width="75px">
            </div>
            </div>
            `;
            Testimoni.appendChild(div)
        }
    });