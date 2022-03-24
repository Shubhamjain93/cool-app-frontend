const senddata = async (path, data) => {
    let response = await fetch(path, {
        method: 'post',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(data)
    })
    // .then(res => res.json())
    // .then(data => {
    //     return processData(data)
    // });
    let rdata = await response.json()
    return await processData(rdata)
}

const processData = (data) => {
    console.log(data);
    if (data.alert) {
        return showFormerror(data.alert)
    } //else if (data.name) {
    //     sessionStorage.user = JSON.stringify(data);
    //     return location.replace(/home);
    //  }

    alert('success')
    return data;
}




const showFormerror = (err) => {
    // let errorEle = document.querySelector('.error');
    // errorEle.innerHTML = err;
    // errorEle.classList.add('show')
    $(".error").html(err).addClass('show')
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};