let products = [ 
    { name: 'Vino casero tinto "Flor del Cosmos" (750ml)', amount: 0, url: 'images/vinoflordelcosmos.jpg', type: 'veggie', price: 180 },
    { name: 'Vino casero tinto "Dos Mundos" (750ml)', amount: 0, url: 'images/vinodosmundos.jpg', type: 'veggie', price: 150 },
    { name: 'Vino casero rosado "Flor del Cosmos" (750ml)', amount: 0, url: 'images/vinorosadoflor.jpg', type: 'veggie', price: 150 },
    { name: 'Jugo de uva tinta (500ml)', amount: 0, url: 'images/jugouvatinta.jpg', type: 'veggie', price: 80 },
    { name: 'Jugo de uva blanca (500ml)', amount: 0, url: 'images/jugouvablanca.jpg', type: 'veggie', price: 80 },
    { name: 'Jugo de durazno (500ml)', amount: 0, url: 'images/jugodurazno.jpg', type: 'veggie', price: 80 },
    { name: 'Orégano frasco de vidrio (50gr)', amount: 0, url: 'images/oregano.jpg', type: 'veggie', price: 80 },
    { name: 'Albahaca frasco de vidrio (50gr)', amount: 0, url: 'images/albahaca.jpg', type: 'veggie', price: 80 },
    { name: 'Romero frasco de vidrio (50gr)', amount: 0, url: 'images/romero.jpg', type: 'veggie', price: 80 },
    { name: 'Ajo deshidratado (50gr)', amount: 0, url: 'images/ajodeshidratado.jpg', type: 'veggie', price: 100 },
    { name: 'Tomate deshidratado frasco de vidrio (50gr)', amount: 0, url: 'images/tomatedeshidratadofrasco.jpg', type: 'veggie', price: 100 },
    { name: 'Tomate deshidratado bolsa celofán (50gr)', amount: 0, url: 'images/tomatedeshidratadobolsa.jpg', type: 'veggie', price: 60 },
    { name: 'Miel (1/2kg)', amount: 0, url: 'images/mielcosmos.jpg', type: 'veggie', price: 100 },
    { name: 'Miel (1kg)', amount: 0, url: 'images/mielcosmos.jpg', type: 'veggie', price: 180 },
    { name: 'Mix frutos secos (100gr)', amount: 0, url: 'images/mixfrutosecos.jpg', type: 'veggie', price: 60 },
    { name: 'Mix frutos secos (50gr)', amount: 0, url: 'images/mixfrutossecos.jpg', type: 'veggie', price: 35 },
    { name: 'Salsa tomate triturado (500ml)', amount: 0, url: 'images/tomatetriturado.jpg', type: 'veggie', price: 60 },
    { name: 'Salsa tomate triturado pack x 12 (500ml)', amount: 0, url: 'images/tomatetriturado.jpg', type: 'veggie', price: 600 },
    { name: 'Salsa verde Mexicana moderada (250ml)', amount: 0, url: 'images/salsaverdemoderada.jpg', type: 'veggie', price: 100 },
    { name: 'Salsa verde Mexicana picante (250ml)', amount: 0, url: 'images/salsaverdepicante.jpg', type: 'veggie', price: 100 },
    { name: 'Salsa verde Mexicana extra picante (750ml)', amount: 0, url: 'images/salsaverdeextra.jpg', type: 'veggie', price: 100 },
    { name: 'Mermelada de Durazno con azúcar orgánica (450ml)', amount: 0, url: 'images/mermeladadurazno.jpg', type: 'veggie', price: 90 },
    { name: 'Mermelada de Higo con azúcar orgánica (750ml)', amount: 0, url: 'images/mermeladahigo.jpg', type: 'veggie', price: 100 },
    { name: 'Mermelada de Melón (450ml)', amount: 0, url: 'images/mermeladamelon.jpg', type: 'veggie', price: 80 },
    { name: 'Mermelada de Ciruela (450ml)', amount: 0, url: 'images/mermeladaciruela.jpg', type: 'veggie', price: 90 },
    { name: 'Yerba biodinámica "Arapegua" (500gr)', amount: 0, url: 'images/yerbaarapegua.jpg', type: 'veggie', price: 120 },
    { name: 'Yerba orgánica "Yerbeada" (500gr)', amount: 0, url: 'images/yerbayerbeada.jpg', type: 'veggie', price: 90 },
    { name: 'Aceite artesanal "Finca La Guadalupana" (1lt)', amount: 0, url: 'images/aceitelaguadalupana.jpg', type: 'veggie', price: 300 },
    { name: 'Harina de Trigo integral biodinámica "El Roble" (1kg)', amount: 0, url: 'images/harinadetrigoelroble.jpg', type: 'veggie', price: 75 },
    { name: 'Azúcar orgánica (1kg)', amount: 0, url: 'images/azucarorganica.jpg', type: 'veggie', price: 80 },
    { name: 'Calendario agrícola de apoyo a las prácticas', amount: 0, url: 'images/calendarioagricola.jpg', type: 'veggie', price: 130 },
    
    { name: 'Naranja (kg)', amount: 0, url: 'images/naranja.jpg', type: 'fruit', price: 50 },
    
    { name: 'Raviolones orgánicos integrales de Calabaza y Queso "Dilaupé" (10 u)', amount: 0, url: 'images/raviolesintegrales.jpg', type: 'meal', price: 180 },
    
]
products = products.sort()

let discounts = [
    { amount: "1", price: 55 },
    { amount: "2", price: 52.50 },
    { amount: "3", price: 50 },
    { amount: "4", price: 47.50 },
    { amount: "5+", price: 45 },
    //{ amount: "60 > 200", price: 41 },
    //{ amount: "200 > 250", price: 36 },
    //{ amount: "250 >", price: 32 }
]


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