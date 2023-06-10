var dataKendaraan = ["Yosi", 30, "Avanza", "AB 1234 JJ",600000,false]


var dataSTNKYosi = {
    "nama" : "Yosi",
    "usia" : 30,
    "tipe" : "Avanza",
    "plat" : "AB 1234 JJ",
    "biaya" : 600000,
    "isBayar" : false,

}

console.log(dataSTNKYosi) //data json
console.log(JSON.stringify(dataSTNKYosi)) //data array

var dataSTNK = [
    {
        "nama" : "Krisma",
        "usia" : 31,
        "tipe" : "Brio",
        "plat" : "B 123 JK",
        "biaya" : 500000,
        "isBayar" : false,
    
    },
    {
        "nama" : "Yosi",
        "usia" : 30,
        "tipe" : "Avanza",
        "plat" : "AB 1234 JJ",
        "biaya" : 600000,
        "isBayar" : true,
    },
    {
        "nama" : "Dani",
        "usia" : 32,
        "tipe" : "Xenia",
        "plat" : "AA 12 JL",
        "biaya" : 650000,
        "isBayar" : true,
    }
]

console.log(JSON.stringify(dataSTNK[2]))  //Menampilkan data array ketiga
console.log(JSON.stringify(dataSTNK[2].isBayar)) //Menampilkan data array ketiga value isBayar
