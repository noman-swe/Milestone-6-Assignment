document.getElementById('empty-search').style.display = 'none';
document.getElementById('spinner').style.display = 'none';

// style functions
// --> empty-search
const getEmptySearch = styleAttribute => {
    document.getElementById('empty-search').style.display = styleAttribute;
}
// --> spinner
const getSpinner = styleAttribute => {
    document.getElementById('spinner').style.display = styleAttribute;
}

const loadPhones = () => {
    const searchField = document.getElementById('search-field');
    searchField.textContent = '';
    const searchText = searchField.value;
    
    if (searchText == '') {
        getSpinner('block');
        getEmptySearch('block');
        getSpinner('none');
    } else {
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => displayPhones(data.data))

        getSpinner('block');
    }
    searchField.value = '';
}

const displayPhones = phones => {
    getSpinner('none');
    const phonesContainer = document.getElementById('display-phones');

    phones.forEach(phone => {
        console.log(phone);
        const colDiv = document.createElement('div');
        colDiv.classList.add('col');
        colDiv.innerHTML = `
        <div class="card border-1 shadow p-3 mb-5 bg-body rounded" onclick = 'loadPhoneDetails(${phone.slug})'>
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Name : ${phone.phone_name}</h5>
                <p class="card-text">Brand : ${phone.brand}</p>
                <p class="card-text">Brand : ${phone.releaseDate}</p>
                <p class="card-text">Slug : ${phone.slug}</p>
            </div>
        </div>
        `;
        phonesContainer.appendChild(colDiv);
    });
}

const loadPhoneDetails = slug => {
    console.log(slug);
    const url = `https://openapi.programming-hero.com/api/phone/${slug}`;
    console.log(url);
}


