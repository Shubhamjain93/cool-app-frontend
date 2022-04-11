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


$("#uploadimage").change(async ($event) => {
    let file = $event.target.files[0]
    var imgRef = storage.child(file.name);

    let result = await imgRef.put(file)
    let url = await result.ref.getDownloadURL()
    console.log({downloadUrl: url});


})