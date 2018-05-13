function UserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.login = login;
    this.URL = 'http://localhost:8080/api/user';
    this.LOGIN_URL = 'http://localhost:8080/api/login';
    var self = this;

    function findAllUsers()
    {
        return fetch(self.URL)
                .then(function (response) {
                return response.json();
                });
    }

    function createUser(user)
    {
        return fetch(self.URL, {
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        });
    }

    function deleteUser(userId) {
        return fetch(self.URL + '/' + userId, {
            method: 'delete'
        })
    }

    function findUserById(userId) {
        return fetch(self.URL + '/' + userId)
            .then(function(response){
                return response.json();
            });
    }

    function login(username, password) {
        return fetch(self.LOGIN_URL, {
            method: 'post',
            body: JSON.stringify({username:username, password: password}),
            headers: {
                'content-type': 'application/json'
            }
        });
    }

    function updateUser(userId, user) {
        return fetch(self.URL + '/' + userId, {
            method: 'put',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(function(response){
                if(response != null) {
                    return response.json();
                } else {
                    return null;
                }
            });
    }

}