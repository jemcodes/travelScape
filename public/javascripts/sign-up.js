const signUpForm = document.querySelector('.sign-up-form');

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(signUpForm);
    const penName = formData.get('pen_name');
    const email = formData.get('email');
    const password = formData.get('password');

    const body = { penName, email, password };

    try {
        const res = await fetch('http://localhost:8080/users/sign-up', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (!res.ok) {
            throw res;
        }
        const {
            token, user: { id }
        } = await res.json()

        // Setting storage
        localStorage.setItem('TRAVEL_SCAPE_ACCESS_TOKEN', token)
        localStorage.setItem('TRAVEL_SCAPE_CURRENT_USER_ID', id)

        // Change redirect route later pretty please!!!!!!
        window.location.href = '/';


    } catch (e) {
        if (e.status >= 400 && e.status < 600) {
            const errorJson = await e.json();
            const errorsContainer = document.querySelector('.errors-container');
            let errorsHTML = [
                `
                    <div class='alert alert-danger'>
                        Something went wrong. Please try again.
                    </div>
                `
            ]
            const { errors } = errorJson
            if (errors && Array.isArray(errors)) {
                errorsHTML = errors.map(
                    (message) => `
                    <div class='alert alert-danger'>
                        ${message}
                    </div>
                    `
                )
            }
            errorsContainer.innerHTML = errorsHTML.join('')
        } else {
            alert(
                'Something went wrong. Please check your internet connection and try again.'
            )
        }
    }
})