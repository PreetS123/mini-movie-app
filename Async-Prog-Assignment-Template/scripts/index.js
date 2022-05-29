






let arr = [
    "http://3.bp.blogspot.com/-KniaAUJZMvk/VjxLabnWBQI/AAAAAAAADUA/KvATMVIFkQo/s1600/Heropanti-Movie-Poster1.jpg",
    "https://cdn.99images.com/photos/movies-tv/roudram-ranam-rudhiram-rrr/roudram-ranam-rudhiram-rrr-movie-latest-hd-photos-um1h.jpg?v=1621841307",
    "http://2.bp.blogspot.com/-uZUMCsz_H4M/TWaqInlGSmI/AAAAAAAABbc/2Xbu9kylMrQ/s1600/Inception-Widescreen-Wallpaper-1920x1200-2.jpg",
    "https://tse3.mm.bing.net/th?id=OIP.QZ1lHqG4SMmqfO-EBEVTpAHaDH&pid=Api&P=0&w=435&h=182"
]

function slide() {
    let image = document.createElement("img");
    let i = 0;
    setInterval(function () {
        if (i === arr.length) {
            i = 0;
        }
        image.src = arr[i];
        //slideshow.append(image);
        slideshow.append(image);
        i++;
        //    console.log("i:",i)


    }, 5000);
}

slide();


let movies_data = JSON.parse(localStorage.getItem("movies"));
console.log(movies_data);

function display() {
    movies_data.map(function (el, index) {
        let div = document.createElement("div");

        let name = document.createElement("h3");
        name.innerText = el.name;

        let image = document.createElement("img");
        image.src = el.img_url;

        let release = document.createElement("h3");
        release.innerText = el.relasedate;

        let rate = document.createElement("h3");
        rate.innerText = el.IMDb_rating;

        let url = document.createElement("p");
        url.innerText = el.img_url;

        div.append(image, name, release, rate, url);
        movies.append(div);
    })
}

display();


function sortitem() {
    var sort = document.getElementById("sorting").value;
    document.querySelector("#movies").innerHTML = "";
    if (sort === "h2l") {
        movies_data.sort(function (x, y) {
            return y.IMDb_rating - x.IMDb_rating;
        })

    }
    else if (sort === "l2h") {
        movies_data.sort(function (x, y) {
            return x.IMDb_rating - y.IMDb_rating;

        })
    }
    display();
}

sortitem();

