const thumbnail = document.querySelector("#thumbnail");
const title_div = document.querySelector(".title"); 


const getData = async() => {
    const API = "https://imdb-api.com/en/API/InTheaters/k_n9qld2z1";
    try {
        const data = await fetch(API);
        const jsonData = await data.json();
        const items = await jsonData.items;
        
        for(let i = 0; i < 3; i++){
            console.log(items[i].title)
        }
        thumbnail.setAttribute("src", items[3].image)
 

    } catch (error) {
        console.log(error);
    }
}

getData();