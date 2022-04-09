const baseUrl = "https://marco-cortes-todo.herokuapp.com/api";
const authUrl = "https://marco-cortes-auth.herokuapp.com/api";

const authFetch = (endpoint, data, method = "GET") => {
    const url = `${authUrl}/${endpoint}`;
    if (method === "GET") {
        return fetch(url);
    } else {
        return fetch(url, {
            method,
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }
}

const renewFetch = (endpoint, data, method = "GET") => {
    const url = `${authUrl}/${endpoint}`;
    if (method === "GET") {
        return fetch(url, {
            method,
            headers: {
                "x-token": localStorage.getItem("token") || ""
            }
        });
    } else {
        return fetch(url, {
            method,
            headers: {
                "Content-type": "application/json",
                "x-token": localStorage.getItem("token") || ""
            },
            body: JSON.stringify(data)
        })
    }
}



const myfetch = (endpoint, data, method = "GET") => {
    const url = `${baseUrl}/${endpoint}`;
    if (method === "GET") {
        return fetch(url, {
            method,
            headers: {
                "x-token": localStorage.getItem("token") || ""
            }
        });
    } else {
        return fetch(url, {
            method,
            headers: {
                "Content-type": "application/json",
                "x-token": localStorage.getItem("token") || ""
            },
            body: JSON.stringify(data)
        })
    }
}

export {
    myfetch,
    authFetch,
    renewFetch
}