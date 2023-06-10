const password = '12345'
const validPassword = '123456'
var retry = 0;


if (password==validPassword) {
    console.log("Selamat datang user!")
} else {
    console.log("Password salah, silakan coba lagi!")
}

if (password==validPassword) {
    console.log("Selamat datang user!")
} else if(retry<3) {
    console.log("Ulangi lagi!")
    retry= retry++
} else {
    console.log("Batas pengisian!")
}