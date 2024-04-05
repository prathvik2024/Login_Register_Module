(async function verifyUser () {
    await fetch("http://localhost:8000/userAuth", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Authorization": document.cookie?.split("=")[1]
        }
    }).then((data) => {
        return data.json();
    }).then((result) => {
        res = result;
    })
    if (res.status) {
        const userDetails = JSON.parse(localStorage.getItem('userDetails'));
        document.getElementById('userdetails').innerText = "Welcome to " + userDetails.fname + " " + userDetails.lname;
    } else {
        logout();
    }
})()

const logout = () => {
    localStorage.clear();
    document.cookie = "auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "http://127.0.0.1:5500/FRONTEND/html/login.html";
}