let products = [ 
    { name: 'Nectar de Manzana" (1Lt)', amount: 0, url: 'images/nectarmanzana.jpg', type: 'veggie', price: 60 },
    { name: 'Salsa de Tomate (950cc)', amount: 0, url: 'images/xsalsatomate.jpg', type: 'veggie', price: 70 },
    { name: 'Jugo de Compota de Cereza (1Lt)', amount: 0, url: 'images/xjugocompotacereza.jpg', type: 'veggie', price: 80 },
    { name: 'Jugo de Compota de Membrillo (1Lt)', amount: 0, url: 'images/jugocompotamembrillo.jpg', type: 'veggie', price: 80 },
    { name: 'Cerezas en conserva (1kg)', amount: 0, url: 'images/cerezaconserva.jpg', type: 'veggie', price: 100 },
    { name: 'Salsa de Tomate (500cc)', amount: 0, url: 'images/xsalsatomatechica.jpg', type: 'veggie', price: 45 },
    { name: 'Miel artesanal de la Finca (500gr)', amount: 0, url: 'images/Miel3.jpg', type: 'veggie', price: 90 },
    { name: 'Tomates al Natural (380gr)', amount: 0, url: 'images/xtomatenatural.jpg', type: 'veggie', price: 60 },
    { name: 'Dulce de Cereza (450gr)', amount: 0, url: 'images/xdulcecereza.jpg', type: 'veggie', price: 90 },
    { name: 'Dulce de Manzana (450gr)', amount: 0, url: 'images/dulcemanzana.jpg', type: 'veggie', price: 90 },
    { name: 'Dulce de Manzana y Canela (450gr)', amount: 0, url: 'images/xdulcemanzanacanela.jpg', type: 'veggie', price: 90 },
    { name: 'Dulce de Tomate (450gr)', amount: 0, url: 'images/xdulcetomate.jpg', type: 'veggie', price: 90 },
    { name: 'Pasta de Cacho de Cabra (100gr)', amount: 0, url: 'images/xpastacachocabra.jpg', type: 'veggie', price: 55 },
    { name: 'Pasta de Jalapeño (100gr)', amount: 0, url: 'images/xpastajalapeño.jpg', type: 'veggie', price: 55 }
   
]

products = products.sort();

//Scroll top on pageload
window.addEventListener('scroll', function (evt) {

    var distance_from_top = document.documentElement.scrollTop

    if (distance_from_top === 0) {
        document.getElementsByClassName("search")[0].classList.remove("fixed");
    }

    if (distance_from_top > 0) {
        document.getElementsByClassName("search")[0].classList.add("fixed");
    }

});