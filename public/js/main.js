const thumbnail = document.querySelector("#thumbnail");
const title_div = document.querySelector(".title"); 
const time = document.querySelector("#time");
const year = document.querySelector("#year");
const genres = document.querySelector(".genres");
const release = document.querySelector(".release");
const info = document.querySelector(".movie_info");
// const btn1 = document.querySelector("#btn1");
// const btn2 = document.querySelector("#")
const movie_btn = document.querySelectorAll(".movie_btn");

const getData = async() => {
    const API = "https://imdb-api.com/en/API/InTheaters/k_n9qld2z1";
    try {
        const data = await fetch(API);
        const jsonData = await data.json();
        const items = await jsonData.items;
        thumbnail.setAttribute("src", items[0].image);
        title_div.innerHTML = items[0].title;
        time.innerHTML = items[0].runtimeStr;
        year.innerHTML = items[0].year;
        genres.innerHTML = `Genres: ${items[0].genres}`;
        info.innerHTML = items[0].plot;


        movie_btn.forEach((btn) => {
            btn.addEventListener("click", () => {
                let num = btn.value 
                thumbnail.setAttribute("src", items[num].image);
                title_div.innerHTML = items[num].title;
                time.innerHTML = items[num].runtimeStr;
                year.innerHTML = items[num].year;
                genres.innerHTML = `Genres: ${items[num].genres}`;
                info.innerHTML = items[num].plot;
            })
        })


 

    } catch (error) {
        console.log(error);
    }
}

getData();