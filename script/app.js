
const loadPhone = async (searchItem) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchItem}`);
    const data = await res.json();
    const phones = data.data
    // console.log(phones)
    displayPhones(phones)
}

const displayPhones = phones => {

    const phoneContainer = document.getElementById('item-container');
    phoneContainer.textContent = '';
    // console.log(phones)
    phones.forEach(phone => {
        console.log(phone)

        // create a div 
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card w-96 bg-base-100 shadow-xl`;
        phoneCard.innerHTML = `
        <figure class="px-10 pt-10">
            <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
        </figure>
        
        <div class="card-body items-center text-center">
            <h2 class="card-title text-3xl">${phone. phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions">
            <button class="btn btn-primary">Show Details</button>
            </div>
        </div>
        `;
        phoneContainer.appendChild(phoneCard);
    });
}


// handle search button 
const handleSearch = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText)
    loadPhone(searchText)
    searchText.value = '';
}

loadPhone()