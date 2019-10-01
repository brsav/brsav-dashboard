const axios = require('axios');



const Users = (props) => {
    const response = axios.post('/v1/users', {
        "first_name": props.firstName,
        "last_name": props.lastName,
        "email": props.email,
        "password": props.password,
        "phone": props.phone,
        "establishment": {
            "name": props.establishmentName,
            "type": props.establishmentType
        }
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

export default Users;