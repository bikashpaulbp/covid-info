


document.getElementById("get-name").addEventListener("keypress", function (event) {

    if (event.key === 'Enter') {
        document.getElementById("search-btn").click();
    }
});



document.getElementById("search-btn").addEventListener("click", function () {
    const getName = document.getElementById("get-name").value || "Bangladesh";
    const url = `https://covid-api.mmediagroup.fr/v1/cases?country=${getName}`;


    fetch(url)
        .then(res => res.json())
        .then(data => display(data.All))


    function display(data) {

            const parentDiv = document.getElementById("covid-info-div");
            parentDiv.innerHTML = "";
            const childDiv = document.createElement("div");
            parentDiv.appendChild(childDiv);
            
            childDiv.innerHTML = `
                <h1>Name : ${data.country}</h1>
                <br>
                <p></p>
                <p> Confirmed : ${data.confirmed}</p>
                <br>
                <p> Recovered : ${data.recovered}</p>
                <br>
                <p> Deaths : ${data.deaths}</p>
                <br>
                <p> Population : ${data.population}</p>
                <br>
                <p> Last updated : ${data.updated}</p>
                <br>
                <br>
                <button id= "back-btn" type="button" class="btn btn-primary">Back</button>
                 `
            document.getElementById("covid-info").classList.remove('d-none')
            document.getElementById("country-display").classList.add('d-none'); 

            document.getElementById("back-btn").addEventListener("click", function(){
                location.reload();
            })



    }
})


fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(all => display(all))



function display(all) {




    let names = all.map(country => country.name);
    let capitals = all.map(country => country.capital);
    let flags = all.map(country => country.flag);
    for (i = 0; i < names.length; i++) {
        const name = names[i];
        const capital = capitals[i];
        const flag = flags[i];


        const countryListDiv = document.getElementById("country-list");
        const displayDiv = document.createElement("div");
        countryListDiv.appendChild(displayDiv)
        displayDiv.style.width = "250px";
        displayDiv.style.height = "350px";
        displayDiv.style.border = "1px solid gray";
        displayDiv.style.margin = "10px 10px";
        displayDiv.style.borderRadius = "10px";
        displayDiv.style.boxShadow = "5px 5px 10px green";
        displayDiv.style.cursor = "pointer";



        const flagImage = document.createElement("img");
        flagImage.setAttribute('src', flag);
        flagImage.style.width = "200px";
        flagImage.style.height = "150px";
        flagImage.style.paddingTop = "10px";
        flagImage.style.paddingBottom = "10px";
        displayDiv.appendChild(flagImage);

        const hTag = document.createElement("h3");
        hTag.innerText = name;
        hTag.style.color = "red ";
        displayDiv.appendChild(hTag);

        const h4Tag = document.createElement("h4");
        h4Tag.innerText = "Capital Name: " + capital;
        displayDiv.appendChild(h4Tag);


        displayDiv.addEventListener("click", function () {

            const url = `https://covid-api.mmediagroup.fr/v1/cases?country=${name}`
            fetch(url)
                .then(res => res.json())
                .then(data => showInfo(data.All))



        });



        function showInfo(data) {

            console.log(data)

            const parentDiv = document.getElementById("covid-info-div");
            parentDiv.innerHTML = "";
            const childDiv = document.createElement("div");
            parentDiv.appendChild(childDiv);
            childDiv.innerHTML = `
                <h1>Name : ${name}</h1>
                <br>
                <p></p>
                <p> Confirmed : ${data.confirmed}</p>
                <br>
                <p> Recovered : ${data.recovered}</p>
                <br>
                <p> Deaths : ${data.deaths}</p>
                <br>
                <p> Population : ${data.population}</p>
                <br>
                <p> Last updated : ${data.updated}</p>
                <br>
                <br>
                <button id= "back-btn" type="button" class="btn btn-primary">Back</button>
                 `
            document.getElementById("covid-info").classList.remove('d-none')
            document.getElementById("country-display").classList.add('d-none'); 

            document.getElementById("back-btn").addEventListener("click", function(){
                location.reload();
            })





        }
    }

}




