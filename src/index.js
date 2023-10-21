console.log('%c HI', 'color: firebrick')

function script () {

    // fetch inamges and turn them into JSON
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(response => response.json())
        .then(images => {
        
            // add images to list
            images.message.forEach(element => {
                // console.log(element);
                let img = document.createElement("img");
                img.src = element;
                document.querySelector("#dog-image-container").appendChild(img);
            });
        });

    // fetch all dog breeds and add them to the list
    fetch("https://dog.ceo/api/breeds/list/all")
        .then(response => response.json())
        .then(breedObj => {

            let breeds = Object.keys(breedObj.message);
            console.log(breeds);
            // add breeds to list
            breeds.forEach(breed => {
                let li = document.createElement("li");
                li.textContent = breed;
                li.id = breed;
                document.querySelector("#dog-breeds").appendChild(li);
            })

            // add event listener to each breed
            let breedList = document.querySelector("#dog-breeds");
            // console.log(breedList);
            breedList.addEventListener("click", e => {
                // console.log(e);
                // change li item to red
                e.target.style.color = "pink";
     
            });

            // filter using a dropdown
            let breedDropdown = document.querySelector("#breed-dropdown");
            breedDropdown.addEventListener("change", e => {
                let letter = e.target.value;
                // remove all list items
                breedList.replaceChildren("");
                // add filtered breeds back to list
                let filteredBreeds = breeds.filter(breed => breed.startsWith(letter));
                filteredBreeds.forEach(breed => {
                    let li = document.createElement("li");
                    li.textContent = breed;
                    li.id = breed;
                    document.querySelector("#dog-breeds").appendChild(li);
                })
            })
        })

    // font color changes when user clicks on dog name
    // document.addEventListener("click")

}
document.addEventListener("DOMContentLoaded", script);