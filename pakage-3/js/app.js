document.getElementById('btn-search').addEventListener('click', function () {
    processSearch(20);
});
const processSearch = (dataLimit) => {
    toggleSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhones(searchText, dataLimit);

    searchField.value = '';
}



const loadPhones = (searchText, dataLimit) => {
    // console.log(searchText, dataLimit);
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhones(data.data, dataLimit));

}
const displayPhones = (phones, dataLimit) => {
    // console.log(phones, dataLimit);
    const phonesContainer = document.getElementById('phones-container');
    phonesContainer.textContent = '';

    // display 20 phones only
    const showAll = document.getElementById('show-all');
    if(dataLimit && phones.length > 20){
        phones = phones.slice(0, 20);
        showAll.classList.remove('d-none');
    }else{
        showAll.classList.add('d-none');
    }

    phones.forEach(phone => {
        // console.log(phone);
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card p-4" onclick="loadPhoneDetails('${phone.slug}')">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button  href="#" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Show Details</button>
                
            </div>
        </div>
        `;
        phonesContainer.appendChild(phoneDiv);
    });
    // spin off
    toggleSpinner(false);
};

// spin / loader
const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('d-none')
    }
    else {
        loaderSection.classList.add('d-none');
    }
}


const loadPhoneDetails = slug => {
    const url = `https://openapi.programming-hero.com/api/phone/${slug}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetails(data.data));
}
const displayPhoneDetails = phone => {
    console.log(phone);
    const detailsContainer = document.getElementById('detail-section');
    detailsContainer.textContent = '';
    const div = document.createElement('div');

    div.innerHTML = `
    <div class="card">
        <div class="card-header">
            <div class="d-flex align-items-center">
                <img src="${phone.image}" class="card-img w-50" alt="..."> 
                <img src="${phone.image}" class="card-img w-50" alt="..."> 
            </div>
        </div>
        <div class="card-body">
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">${phone.brand ? phone.brand : 'Untitle Brand.'}</th>
                        <th scope="col">${phone.name ? phone.name : 'No Phone Name'}'s Specefications</th>   
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Brand</th>
                        <td>${phone.brand ? phone.brand : 'No Brand.'}</td>
                    </tr> 
                    
                    <tr>
                        <th scope="row">Name</th>
                        <td>${phone.name ? phone.name : 'No Name'}</td>
                    </tr> 

                    <tr>
                        <th scope="row">Storage</th>
                        <td>${phone.mainFeatures.storage ? phone.mainFeatures.storage : 'No Storage Information.'}</td>
                    </tr>                     

                    <tr>
                        <th scope="row">Display Size</th>
                        <td>${phone.mainFeatures.displaySize ? phone.mainFeatures.displaySize : 'No DisplaySize information.'}</td>
                    </tr>

                    <tr>
                        <th scope="row">Chip-set</th>
                        <td>${phone.mainFeatures.chipSet ? phone.mainFeatures.chipSet : 'No ChipSet information.'}</td>
                    </tr>

                    <tr>
                        <th scope="row">Bluetooth</th>
                        <td>${phone.others.Bluetooth ? phone.others.Bluetooth : 'No Bluetooth information.'}</td>
                    </tr>

                    <tr>
                        <th scope="row">GPS</th>
                        <td>${phone.others.GPS ? phone.others.GPS : 'No GPS information'}</td>
                    </tr>

                    <tr>
                        <th scope="row">NFC/th>
                        <td>${phone.others.NFC ? phone.others.NFC : 'No NFC information'}</td>
                    </tr>

                    <tr>
                        <th scope="row">Radio</th>
                        <td>${phone.others.Radio ? phone.others.Radio : 'No radio information.'}</td>
                    </tr>

                    <tr>
                        <th scope="row">USB</th>
                        <td>${phone.others.USB ? phone.others.USB : 'No USB information'}</td>
                    </tr>

                    <tr>
                        <th scope="row">WLAN</th>
                        <td>${phone.others.WLAN ? phone.others.WLAN : 'No WLAN information.'}</td>
                    </tr>

                    <tr>
                        <th scope="row">Realise Date</th>
                        <td>${phone.releaseDate ? phone.releaseDate : 'Not recorded information.'}</td>
                    </tr>
                    
                    <tr>                    
                        <th scope="row">Sensors</th>
                        <td> ${(phone.mainFeatures.sensors ? phone.mainFeatures.sensors[0] : 'no sensors information.')} </td>
                        
                    </tr>

                </tbody>
            </table>
        </div>
        
        </div>
        <p class="mt-4 text-success text-center">Related Items...</p>
        `;
    detailsContainer.appendChild(div);
    console.log(phone.mainFeatures.sensors[0]);

}