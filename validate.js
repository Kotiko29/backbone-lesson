const checkForm = () => {

    switch 


}

const feedbackFormValidate = (form) => {
    const errorRatingMsg = document.querySelector('.error-rating-msg');
    const formReq = document.querySelectorAll('.req');
    let error = 0;
    errorRatingMsg.classList.remove('show');
    errorRatingMsg.classList.add('hide');

    for(let i = 0; i < formReq.length; i++) {
        const input = formReq[i];
        input.classList.remove('form-error');
        input.classList.remove('error-rating-star');

        if(input.classList.contains('name') && input.value === '') {
            input.classList.add('form-error');
            error++;
        } else if (input.classList.contains('website')) {
            if(websiteTest(input) || input.value === '') {
                input.classList.add('form-error');
                error++;
            }
        } else if(input.classList.contains('email')) {
            if(emailTest(input) || input.value === '') {
                input.classList.add('form-error');
                error++;
            }
        } else if (input.classList.contains('minus-txt') && input.value === '') {
            input.classList.add('form-error');
            error++;
        } else if (input.classList.contains('plus-txt') && input.value === '') {
            input.classList.add('form-error');
            error++;
        } else if (input.classList.contains('comment') && input.value === '') {
            input.classList.add('form-error');
            error++;
        } else if (input.classList.contains('star-rating-price') && input.dataset.totalValue === '0') {
            input.classList.add('error-rating-star');
            errorRatingMsg.classList.add('show');
            errorRatingMsg.classList.remove('hide');
            error++;
        } else if (input.classList.contains('star-rating-speed') && input.dataset.totalValue === '0') {
            input.classList.add('error-rating-star');
            errorRatingMsg.classList.add('show');
            errorRatingMsg.classList.remove('hide');
            error++;
        } else if (input.classList.contains('star-rating-security') && input.dataset.totalValue === '0') {
            input.classList.add('error-rating-star');
            errorRatingMsg.classList.add('show');
            errorRatingMsg.classList.remove('hide');
            error++;
        } else if (input.classList.contains('star-rating-support') && input.dataset.totalValue === '0') {
            input.classList.add('error-rating-star');
            errorRatingMsg.classList.add('show');
            errorRatingMsg.classList.remove('hide');
            error++;
        }
    }
    return error;
}

function emailTest(input) {
    return !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(input.value);
}
function websiteTest(input) {
    return !/^(https?:\/\/)?([\w\.]+)\.([a-z]{2,6}\.?)(\/[\w\.]*)*\/?$/.test(input.value);
}