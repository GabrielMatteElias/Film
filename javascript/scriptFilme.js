

const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputTitle = e.target.querySelector('#title');
    const title = String(inputTitle.value);
    console.log(title);

    const inputDescription = e.target.querySelector('#description')
    const description = String(inputDescription.value);
    console.log(description);

    const inputGenre = e.target.querySelector('#genre')
    const genre = String(inputGenre.value);
    console.log(genre);

    const inputMetascore = e.target.querySelector('#metascore')
    const metascore = Number(inputMetascore.value);
    console.log(metascore);

    const inputYear = e.target.querySelector('#year')
    const year = String(inputYear.value);
    console.log(year);

    function getStars(metascores) {
    
        switch (metascore) {
            case 1:                
                return '<img src="/prints/1estrelas.png" style="width: 30px;">';
            case 1.5:
                return '<img src="/prints/1estrelasmetade.png" style="width: 45px;">';
            case 2:
                return '<img src="/prints/2estrelas.png" style="width: 60px;">';
            case 2.5:
                return '<img src="/prints/2estrelasmetade.png" style="width: 70px;">';
            case 3:
                return '<img src="/prints/3estrelas.png" style="width: 78px;">'; 
            case 3.5:
                return '<img src="/prints/3estrelasmetade.png" style="width: 84px;">'; 
            case 4:
                return '<img src="/prints/4estrelas.png" style="width: 90px;">'; 
            case 4.5:
                return '<img src="/prints/4estrelasmetade.png" style="width: 100px;">';
            default:
                return '<img src="/prints/5estrelas.png" style="width: 120px;">' 
        } 
    }

    const newstar = getStars(metascore)

    addFilm(`    <div class="containerCards">
    <div class='marginLeft'>   
    <div class='card zoom' style='width: 14rem;'>
        <img src='${file.src}' class='card-img-top' alt='...'>
        <div class='card-body d-flex flex-column align-items-center'>
            <h5 class='card-title'>${title}</h5>
            <p class='card-text'>${description}</p>
        </div>
        <ul class='list-group list-group-flush'>
            <li class='list-group-item'>${genre}</li>
            <li class='list-group-item'>${newstar}</li>
            <li class='list-group-item'>${year}</li>
        </ul>        
    </div>    
</div>
</div> `)
    
});


function addFilm(msg) {
    const result = document.querySelector('.containerFilm');
    result.innerHTML = msg;
}



