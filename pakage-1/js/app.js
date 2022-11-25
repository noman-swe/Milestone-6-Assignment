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
    phonesContainer.textContent = '';

    phones.forEach(phone => {
        // console.log(phone);

        const colDiv = document.createElement('div');
        colDiv.classList.add('col');
        colDiv.innerHTML = `
            <div class="card border-1 shadow p-3 mb-5 bg-body rounded" onclick = "loadPhoneDetails('${phone.slug}')">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Name : ${phone.phone_name}</h5>
            <p class="card-text">Brand : ${phone.brand}</p>
            <p class="card-text">Realise Date : ${phone.releaseDate ? phone.releaseDate : 'Not found.'}</p>
            <p class="card-text">Slug : ${phone.slug}</p>
            </div>
            </div>
            `;
        phonesContainer.appendChild(colDiv);

    });
}

const loadPhoneDetails = slug => {
    // console.log(slug);
    const url = `https://openapi.programming-hero.com/api/phone/${slug}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetails(data.data))
}

const displayPhoneDetails = specifications => {

    // const sensors = specifications.mainFeatures.sensors;
    // sensors.forEach(sensor => { console.log(sensor);})
    const sensors = specifications.mainFeatures.sensors;

    const detailsContainer = document.getElementById('detail-section');
    detailsContainer.textContent = '';
    const div = document.createElement('div');

    div.innerHTML = `
    <div class="card">
        <div class="card-header">
            <div class="d-flex align-items-center">
                <img src="${specifications.image}" class="card-img w-50" alt="..."> 
                <img src="${specifications.image}" class="card-img w-50" alt="..."> 
            </div>
        </div>
        <div class="card-body">
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">${specifications.brand}</th>
                        <th scope="col">${specifications.name}'s Specefications</th>   
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Brand</th>
                        <td>${specifications.brand}</td>
                    </tr> 
                    
                    <tr>
                        <th scope="row">Name</th>
                        <td>${specifications.name}</td>
                    </tr> 

                    <tr>
                        <th scope="row">Storage</th>
                        <td>${specifications.mainFeatures.storage}</td>
                    </tr>                     

                    <tr>
                        <th scope="row">Display Size</th>
                        <td>${specifications.mainFeatures.displaySize}</td>
                    </tr>

                    <tr>
                        <th scope="row">Chip-set</th>
                        <td>${specifications.mainFeatures.chipSet}</td>
                    </tr>

                    <tr>
                        <th scope="row">Bluetooth</th>
                        <td>${specifications.others.Bluetooth}</td>
                    </tr>

                    <tr>
                        <th scope="row">GPS</th>
                        <td>${specifications.others.GPS}</td>
                    </tr>

                    <tr>
                        <th scope="row">NFC/th>
                        <td>${specifications.others.NFC}</td>
                    </tr>

                    <tr>
                        <th scope="row">Radio</th>
                        <td>${specifications.others.Radio}</td>
                    </tr>

                    <tr>
                        <th scope="row">USB</th>
                        <td>${specifications.others.USB}</td>
                    </tr>

                    <tr>
                        <th scope="row">WLAN</th>
                        <td>${specifications.others.WLAN}</td>
                    </tr>

                    <tr>
                        <th scope="row">Realise Date</th>
                        <td>${specifications.releaseDate}</td>
                    </tr>
                    
                    <tr>                    
                        <th scope="row">Sensors</th> 
                        <td id="sensor-td"> </td>
                    </tr>
                    
                    
                    </tbody>
                    </table>
                    </div>
                    
                    </div>
                    <p class="mt-4 text-success text-center">Related Items...</p>
                    `;
            detailsContainer.appendChild(div);
            displaySensor(sensors)

    /*  <tr>                    
        <th scope="row">Sensors</th>
        <td> ${displaySensor(sensors)} </td>
    </tr>  */
}


// loadPhones();
// displayPhoneDetails();

function displaySensor(sensors) {
    const td = document.getElementById('sensor-td');
    sensors.forEach(sensor => {
        console.log(sensor);
        const p = document.createElement('p');
        div.innerHTML = `
        <span> ${sensor} </span>
        `;

        td.appendChild(p);
    });
}