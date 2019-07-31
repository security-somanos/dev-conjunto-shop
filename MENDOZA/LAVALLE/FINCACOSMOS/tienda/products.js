let products = [ 
    { name: 'Vino casero tinto "Flor del Cosmos" (750ml)', amount: 0, url: 'images/vinoflordelcosmos.jpeg', type: 'veggie', price: 180 },
    // { name: 'Vino casero tinto "Dos Mundos" (750ml)', amount: 0, url: 'images/vinodosmundos.jpeg', type: 'veggie', price: 150 },
    // { name: 'Vino casero rosado "Flor del Cosmos" (750ml)', amount: 0, url: 'images/vinorosadoflor.jpeg', type: 'veggie', price: 150 },
    { name: 'Jugo de uva tinta (500ml)', amount: 0, url: 'images/jugouvatinta.jpeg', type: 'veggie', price: 80 },
    { name: 'Jugo de uva blanca (500ml)', amount: 0, url: 'images/jugouvablanca.jpeg', type: 'veggie', price: 80 },
    { name: 'Jugo de membrillo (500ml)', amount: 0, url: 'images/jugodemembrillo.jpeg', type: 'veggie', price: 80 },
    { name: 'Orégano frasco de vidrio (50gr)', amount: 0, url: 'images/oregano.jpeg', type: 'veggie', price: 80 },
    { name: 'Albahaca frasco de vidrio (50gr)', amount: 0, url: 'images/albahaca.jpg', type: 'veggie', price: 80 },
    { name: 'Romero frasco de vidrio (50gr)', amount: 0, url: 'images/romero.jpeg', type: 'veggie', price: 80 },
    // { name: 'Ajo deshidratado (50gr)', amount: 0, url: 'images/ajodeshidratado.jpeg', type: 'veggie', price: 100 },
    { name: 'Tomate deshidratado frasco de vidrio (50gr)', amount: 0, url: 'images/tomatedeshidratadofrasco.jpg.jpeg', type: 'veggie', price: 100 },
    // { name: 'Tomate deshidratado bolsa celofán (50gr)', amount: 0, url: 'images/tomatedeshidratadobolsa.jpeg', type: 'veggie', price: 60 },
    { name: 'Miel (1/2kg)', amount: 0, url: 'images/mielcosmos.jpeg', type: 'veggie', price: 100 },
    { name: 'Miel (1kg)', amount: 0, url: 'images/mielcosmos.jpeg', type: 'veggie', price: 180 },
    // { name: 'Mix frutos secos (100gr)', amount: 0, url: 'images/mixfrutosecos.jpeg', type: 'veggie', price: 60 },
    // { name: 'Mix frutos secos (50gr)', amount: 0, url: 'images/mixfrutossecos.jpeg', type: 'veggie', price: 35 },
    { name: 'Salsa tomate triturado (500ml)', amount: 0, url: 'images/tomatetriturado.jpeg', type: 'veggie', price: 60 },
    { name: 'Salsa tomate triturado pack x 12 (500ml)', amount: 0, url: 'images/tomatetriturado.jpeg', type: 'veggie', price: 600 },
    { name: 'Salsa verde Mexicana moderada (250ml)', amount: 0, url: 'images/salsaverdePICANTE.jpeg', type: 'veggie', price: 100 },
    { name: 'Salsa verde Mexicana picante (250ml)', amount: 0, url: 'images/salsaverdepicante.jpeg', type: 'veggie', price: 100 },
    { name: 'Salsa verde Mexicana extra picante (750ml)', amount: 0, url: 'images/salsaverdeextra.jpeg', type: 'veggie', price: 100 },
    { name: 'Mermelada de Durazno con azúcar orgánica (450ml)', amount: 0, url: 'images/mermeladadurazno.jpg', type: 'veggie', price: 90 },
    // { name: 'Mermelada de Higo con azúcar orgánica (750ml)', amount: 0, url: 'images/mermeladahigo.jpeg', type: 'veggie', price: 100 },
    { name: 'Mermelada de Melón (450ml)', amount: 0, url: 'images/mermeladamelon.jpeg', type: 'veggie', price: 80 },
    { name: 'Mermelada de Ciruela (450ml)', amount: 0, url: 'images/mermeladaciruela.jpeg', type: 'veggie', price: 90 },
    // { name: 'Yerba biodinámica "Arapegua" (500gr)', amount: 0, url: 'images/yerbaarapegua.jpeg', type: 'veggie', price: 120 },
    // { name: 'Yerba orgánica "Yerbeada" (500gr)', amount: 0, url: 'images/yerbayerbeada.jpeg', type: 'veggie', price: 90 },
    { name: 'Aceite artesanal "Finca La Guadalupana" (1lt)', amount: 0, url: 'images/aceitelaguadalupana.jpeg', type: 'veggie', price: 300 },
    // { name: 'Harina de Trigo integral biodinámica "El Roble" (1kg)', amount: 0, url: 'images/harinadetrigoelroble.jpeg', type: 'veggie', price: 75 },
    // { name: 'Azúcar orgánica (1kg)', amount: 0, url: 'images/azucarorganica.jpeg', type: 'veggie', price: 80 },
    { name: 'Calendario agrícola de apoyo a las prácticas', amount: 0, url: 'images/calendarioagricola.jpeg', type: 'veggie', price: 130 },
    
    { name: 'Champú Cabellos Débiles (220ml)', amount: 0, url: 'images/champucabellosdebiles.jpeg', type: 'fruit', price: 110 },
    { name: 'Champú Cabellos Claros (220ml)', amount: 0, url: 'images/champucabellosclaros.jpeg', type: 'fruit', price: 110 },
    { name: 'Champú Cabellos Oscuros (220ml)', amount: 0, url: 'images/champucabellososcuros.jpeg', type: 'fruit', price: 110 },
    { name: 'Champú Todo tipo de Cabellos (220ml)', amount: 0, url: 'images/champutt.jpeg', type: 'fruit', price: 110 },
    { name: 'Champú sólido Jarilla Cab. Débiles', amount: 0, url: 'images/champusolido.jpeg', type: 'fruit', price: 200 },
    { name: 'Champú sólido Manzanilla Cab. Claros', amount: 0, url: 'images/champusolido.jpeg', type: 'fruit', price: 200 },
    { name: 'Champú sólido Caléndula', amount: 0, url: 'images/champusolido.jpeg', type: 'fruit', price: 200 },
    { name: 'Champú sólido Humectante', amount: 0, url: 'images/champusolido.jpeg', type: 'fruit', price: 150 },
    { name: 'Acondicionador Cab. Débiles (220ml)', amount: 0, url: 'images/aacABDEB.jpg', type: 'fruit', price: 110 },
    { name: 'Acondicionador Cab. Claros (220ml)', amount: 0, url: 'images/aacabellosclaros.jpeg', type: 'fruit', price: 110 },
    { name: 'Acondicionador Cab. Oscuros (220ml)', amount: 0, url: 'images/aacabellososcuros.jpeg', type: 'fruit', price: 110 },
    { name: 'Acondicionador Todo tipo de Cabellos (220ml)', amount: 0, url: 'images/aaTTCAB.jpg', type: 'fruit', price: 110 },
    { name: 'Champú para la Caspa (220ml)', amount: 0, url: 'images/champucaspa.jpeg', type: 'fruit', price: 150 },

    { name: 'Crema exfoliante (60cc)', amount: 0, url: 'images/cremaexfoliante.jpg', type: 'fruit', price: 150 },
    { name: 'Crema facial restauradora (70ml)', amount: 0, url: 'images/cremafacialresT.jpeg', type: 'fruit', price: 200 },
    { name: 'Crema facial nocturna (60cc)', amount: 0, url: 'images/FACIALNOCTURNA.jpg', type: 'fruit', price: 200 },
    { name: 'Emulsión corporal armonizante (200ml)', amount: 0, url: 'images/emulsionarmonizante.jpeg', type: 'fruit', price: 300 },
    { name: 'Emulsión corporal armonizante (125ml)', amount: 0, url: 'images/emulsionarmonizante.jpeg', type: 'fruit', price: 200 },
    // { name: 'Crema humectante para manos (60cc)', amount: 0, url: 'images/cremahumecmanos.jpeg', type: 'fruit', price: 150 },
    { name: 'Bálsamo para labios caléndula', amount: 0, url: 'images/balsamocalendula.jpg', type: 'fruit', price: 70 },
    { name: 'Bálsamo para labios lavanda', amount: 0, url: 'images/balsamolavanda.jpg', type: 'fruit', price: 70 },

    { name: 'Desodorante', amount: 0, url: 'images/desodorante.jpeg', type: 'fruit', price: 130 },
    { name: 'Pasta Dental', amount: 0, url: 'images/pastadental.jpeg', type: 'fruit', price: 130 },
    // { name: 'Jabón Amaranto', amount: 0, url: 'images/jabonamaranto.jpeg', type: 'fruit', price: 65 },
    { name: 'Jabón Anís', amount: 0, url: 'images/jabonanis.jpeg', type: 'fruit', price: 65 },
    { name: 'Jabón Caléndula', amount: 0, url: 'images/jaboncalendula.jpg', type: 'fruit', price: 65 },
    { name: 'Jabón Jarilla', amount: 0, url: 'images/jabonjarilla.jpg', type: 'fruit', price: 65 },
    { name: 'Jabón Lavanda', amount: 0, url: 'images/jabonlavanda.JPG', type: 'fruit', price: 70 },
    // { name: 'Jabón Manzanilla', amount: 0, url: 'images/jabonmanzanilla.jpeg', type: 'fruit', price: 65 },
    // { name: 'Jabón Olivo', amount: 0, url: 'images/jabonolivo.jpeg', type: 'fruit', price: 70 },
    { name: 'Jabón Propóleo', amount: 0, url: 'images/jabonpropoleo.jpeg', type: 'fruit', price: 70 },
    { name: 'Jabón Romero', amount: 0, url: 'images/jabonromero.jpg', type: 'fruit', price: 70 },
    
    { name: 'Champú para barba (50g)', amount: 0, url: 'images/BARBAGRANDE.jpg', type: 'fruit', price: 150 },
    { name: 'Cera para barba (15cc)', amount: 0, url: 'images/cerabarba.jpeg', type: 'fruit', price: 120 },
    { name: 'Champú para barba (30g)', amount: 0, url: 'images/BARBACHICA.jpg', type: 'fruit', price: 90 },
    { name: 'Repelente Mosquitos (125ml)', amount: 0, url: 'images/repelenteNATURAL.jpg', type: 'fruit', price: 170 },
    { name: 'Champú para piojos (220ml)', amount: 0, url: 'images/champupiojos.jpeg', type: 'fruit', price: 150 },

    
    
]
 products = products.sort()

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