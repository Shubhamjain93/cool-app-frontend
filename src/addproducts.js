let additem = document.querySelector('#additem');

additem.addEventListener('click', () => {
    let productname = document.querySelector('#productname');
    let category = document.querySelector('#category');
    let price = document.querySelector('#price');
    let discounted = document.querySelector('#discounted');

    // validation
    if (productname.value.length < 2) {
        showFormerror('Item name too short');
    } else if (!category.value.length) {
        showFormerror('Specify Something About Product');
    } else if (!price.value.length) {
        showFormerror('Enter the Price Of Product');
    } else if (!discounted.value.length) {
        showFormerror('Add discounted price if no discount then enter the same price as above.')
    }

})

// imahe upload

let uploadInput = document.querySelector('#uploadimage');
let imagePath = 'img/noImage.png';

uploadInput.addEventListener('change', () => {
    const file = uploadimage.files[0];
    let imageUrl;

    if (file.type.includes('image')) {

        fetch('/s3url').then(res => res.json())
            .then(url => {
                console.log(url);
            })
    }

})