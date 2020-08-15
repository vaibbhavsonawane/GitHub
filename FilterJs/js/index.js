document.getElementById('search-item').addEventListener('keyup', function(event) {
    //let keyWord = event.target.value;
    //console.log(keyWord);
    let keyWord = event.target.value.toLowerCase();

    let dessert = document.getElementsByClassName('store-item');
    //console.log(dessert[3].textContent);

    for (let i = 0; i < dessert.length; i++) {
        //console.log(dessert[i].textContent);
        const cName = dessert[i].textContent.toLowerCase();
        console.log(cName);

        if (cName.includes(keyWord)) {
            dessert[i].style.display = "block";
        } else {
            dessert[i].style.display = "none";
        }
    }
})