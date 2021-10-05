export const fetchRequest = async (username, email, pass, setter) => {
    try {
        const response = await fetch("http://localhost:5000/user", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: username,
                email: email,
                password: pass,
            }),
        });
        const data = await response.json();
            // console.log(data.user.name);
            setter(data.user)
            localStorage.setItem("myToken", data.token)
    } catch (error) {
        console.log(error);
    }
}

export const login = async (email, pass, setter) => {
    try {
        const response = await fetch("http://localhost:5000/user/login", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: email,
                password: pass,
            }),
        });
        console.log(response) //output to console for testing purposes 
        const data = await response.json();
        console.log(`${data.user.name} has logged in`)
        localStorage.setItem("myToken", data.token)
        setter(data.user)
    } catch (error) {
        console.log(error, "AN ERROR OCCURED in login FRONTEND, check username and password")
    }
}
