
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
    

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const termsAccepted = document.getElementById('terms').checked;


    if (!validateAge(dob)) {
        alert('Age must be between 18 and 55.');
        return;
    }

    const userData = {
        name,
        email,
        password,
        dob,
        termsAccepted: termsAccepted ? 'Yes' : 'No'
    };


    storeUserData(userData);
    loadUsers();


    document.getElementById('registrationForm').reset();
});


function validateAge(dob) {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age >= 18 && age <= 55;
}


function storeUserData(userData) {
    // Fetch existing users or create a new array
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
}

function loadUsers() {
    const usersTable = document.querySelector('#usersTable tbody');
    usersTable.innerHTML = ''; // Clear the table first

    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${user.name}</td><td>${user.email}</td><td>${user.password}</td><td>${user.dob}</td><td>${user.termsAccepted}</td>`;
        usersTable.appendChild(row);
    });
}


window.onload = function() {
    loadUsers(); 
    
    const dobInput = document.getElementById('dob');
    const today = new Date();

    const minAgeDate = new Date(today.getFullYear() - 55, today.getMonth(), today.getDate());
    const maxAgeDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());

    dobInput.setAttribute('min', minAgeDate.toISOString().split('T')[0]);
    dobInput.setAttribute('max', maxAgeDate.toISOString().split('T')[0]);
};
