// search input field enter key handler
document.getElementById('search-field').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        processSearch();
        // console.log(e);
    }
});

// input text
document.getElementById('btn-search').addEventListener('click', function () {
    processSearch();
});

// process search
const processSearch = () => {
    // console.log(dataLinit);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhones(searchText);
    searchField.value = '';
}

// load data of phones 
const loadPhones = (searchText,) => {
    // console.log(searchText, dataLinit);
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhones(data.data))
}

// display phones by search
const displayPhones = (phones) => {
    // console.log(phones.length);
    const phonesContainer = document.getElementById('phones-container');
    phonesContainer.textContent = '';

    // count limited phones
    const showAll = document.getElementById('show-all');
    if (phones.length > 20) {
        phones = phones.slice(0, 20);
        showAll.classList.remove('d-none');
    }
    else {
        showAll.classList.add('d-none');
    }
    // console.log(phones);

    // Error - no phone found
    const noMsg = document.getElementById('no-found-message');
    if (phones.length == 0) {
        noMsg.classList.remove('d-none');
    }
    else {
        noMsg.classList.add('d-none');
    }

    // display all phones
    phones.forEach(phone => {
        console.log(phone);
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div onclick="loadPhoneDetails('${phone.slug}')" class="card p-4">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button  href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Show Details</button>
                
            </div>
        </div>
        `;

        phonesContainer.appendChild(phoneDiv);
    });

}