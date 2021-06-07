const lables = document.querySelectorAll('.form-control lable');

lables.forEach(lable => {
    //   Return a span with an array of the lable's text splitted into seperated letters
    lable.innerHTML = lable.innerText
        .split('').map((letter, idx) => `<span style="transition-delay: ${idx * 18}ms">${letter}</span>`
        ).join('')
})

const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const email = form['email'].value;
    const paswd1 = form['password1'].value;
    const paswd2 = form['password2'].value;

    if (email === '') {
        addErrorTo('email', 'Email address is required!')
    } else if (!isValid(email)) {
        addErrorTo('email', 'A Valid email address is required!')
    } else {
        removeErrorFrom('email')
    }


    if (paswd1 === '') {
        addErrorTo('password1', 'Use the password your boss gave you')
    } else {
        removeErrorFrom('password1')
    }

    if (paswd2 === '') {
        addErrorTo('password2', 'Use the password your just recieved in your mail')
    } else {
        removeErrorFrom('password2')
    }
});

function addErrorTo(field, message) {
    const formControl = form[field].parentNode;
    formControl.classList.add('error');
    const small = formControl.querySelector('small');
    small.innerText = message;
    small.style.opacity = '1';
}

function removeErrorFrom(field) {
    const formControl = form[field].parentNode;
    formControl.classList.remove('error');
    const small = formControl.querySelector('small');
    small.style.opacity = '0';
}

function isValid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

