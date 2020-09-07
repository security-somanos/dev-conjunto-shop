//vrde.club

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBvYdUi3Ydfl1_HCDNjiOQdjqtyrFIcM2U",
    authDomain: "el-conjunto.firebaseapp.com",
    databaseURL: "https://el-conjunto.firebaseio.com",
    projectId: "el-conjunto",
    storageBucket: "el-conjunto.appspot.com",
    messagingSenderId: "506296486519",
    appId: "1:506296486519:web:4a7e691e275ee14047d472",
    measurementId: "G-0JT0Z4J3TT"
};

firebase.initializeApp(config);

const defaultAnalytics = firebase.analytics();

var database = firebase.database();
var perf = firebase.performance();

const productsRef = database.ref('productsVrde');


var app = new Vue({
    el: '#app',
    data: {
        search: '',
        price: 50,
        discounts: '',
        productList: [],
        cartTotal: 0,
        cart: [],
        cartItems: 0,
        saleComplete: false,
        fieldsMissing: false,
        confirmModal: false,
        deliveryMethod: false,
        preferenceSelected: false,
        userData: {
            name: '',
            address: '',
            phone: '',
            email: '',
            delivery: 0,
            pago: "",
            preference1: "",
            preference2: "",
            localidad: "",
            status: "pendiente",
            recargo: 0,
            porcentajeRecargo: 0
        },
        active: {
            'verdura': { status: true },
            'fruta': { status: false },
            'almacen': { status: false },
            'vinos': { status: false },
            'medicina': { status: false },
            'comida': { status: false }
        },
        localidades: [
            { text: 'La Lucila', value: '$100' },
            { text: 'Olivos', value: '$120' },
            { text: 'Florida', value: '$150' },
            { text: 'Munro', value: '$200' },
            { text: 'Martinez', value: '$150' },
            { text: 'Acassuso', value: '$200' },
            { text: 'San Isidro', value: '$250' },
            { text: 'Beccar', value: '$300' },
            { text: 'Tigre', value: '$400' },
            { text: 'San Fernando', value: '$350' },
            { text: 'Victoria', value: '$400' },
            { text: 'Virreyes', value: '$400' },
            { text: 'Tigre', value: '$500' }
        ],
        cartHas: {
            verdura: false,
            fruta: false,
            almacen: false,
            vinos: false,
            medicina: false,
            comida: false
        }
    },
    mixins: [Vue2Filters.mixin],
    created: function () {
        productsRef.on('value', snap => {
            let products = [];
            snap.forEach(item => {
                products.push({
                    active: item.child('active').val(),
                    name: item.child('name').val(),
                    type: item.child('type').val(),
                    price: item.child('price').val(),
                    image: item.child('image').val(),
                    stock: item.child('stock').val(),
                    outOfStock: false,
                    key: item.key,
                    amount: 0
                }
                );
            });
            this.setProducts(products);
        });
    },
    methods: {
        setProducts: function (products) {
            this.productList = products;
        },
        getTotal: function () {

            var self = this;
            this.cartTotal = 0;
            this.cartItems = 0;

            this.cart = this.productList.filter(function (item) {
                return item.total > 0;
            });

            for (var item in this.cart) {

                if (this.cart[item].type == 'fruta') {
                    this.cartHas.fruta = true;
                }
                if (this.cart[item].type == 'verdura') {
                    this.cartHas.verdura = true;
                }
                if (this.cart[item].type == "almacen") {
                    this.cartHas.almacen = true;
                }
                if (this.cart[item].type == 'vinos') {
                    this.cartHas.vinos = true;
                }
                if (this.cart[item].type == 'medicina') {
                    this.cartHas.medicina = true;
                }
                if (this.cart[item].type == "comida") {
                    this.cartHas.comida = true;
                }
                this.cart[item].total = this.cart[item].amount * this.cart[item].price;
                this.cart[item].total = parseFloat(this.cart[item].total.toFixed(2));

                this.cartTotal += this.cart[item].total;
                this.cartTotal = parseFloat(this.cartTotal.toFixed(2))
            }
        },
        addItem: function (item) {
            if (item.stock > item.amount) {
              //  console.log("Add", item)
                item.outOfStock = false;
                item.amount++;
                item.total = item.amount * item.price;
                this.getTotal();
            } else {
                item.outOfStock = true;
            }
        },
        addPayment: function () {
            if (userData.pago != '') {
                console.log(userData.pago);
            }
        },

        removeItem: function (item) {
            this.getTotal();
            if (item.amount > 0 && item.stock > 0) {
                item.amount--;
                console.log("Remove", item)
                item.outOfStock = false;
            } else {
                item.outOfStock = true;
            }
            item.total = item.amount * item.price;
            this.getTotal();
        },
        updateValue: function (item) {
         //   console.log("Update", item)
            if (item.amount === '' || parseFloat(item.amount) == NaN) {
                item.amount = 0
            }
            if (item.stock - item.amount >= 0) {
                (item.amount = parseFloat(item.amount));
                item.total = item.amount * item.price;
                item.outOfStock = false;
            } else {
                item.outOfStock = true;
            }
            this.getTotal();
        },
        formValidate() {
            // form validation
            if (this.userData.name == '' || this.userData.phone == '' || this.userData.pago == '' 
                    || this.userData.preference1 == '' || this.userData.preference2 == '') {
                this.fieldsMissing = true;
            }
            else if (this.deliveryMethod == true && (this.userData.address == '' || this.userData.localidad == '' 
                   || this.userData.preference1 == '' || this.userData.preference2 == '' || this.userData.pago == '')) {
                this.fieldsMissing = true;
            }
            else {
                this.fieldsMissing = false;
            }
            console.log(this.fieldsMissing)
            this.confirmModal = true;
        },
        changeLocation(event) {
            if (event.target.value === "3") {
                this.userData.delivery = 3;
                this.userData.address = "Retira Sábado por el Local";
                this.deliveryMethod  = false;
            }
            else if (event.target.value === "2") {
                this.userData.delivery = 2;
                this.userData.address = "Retira en el día";
                this.deliveryMethod  = false;
            }
            else {
                this.userData.delivery = 1;
                this.userData.address = "";
                this.deliveryMethod = true;
            }
        },
        changePreference(event) {
            if (event.target.value === "") {
                this.preferenceSelected = false;
            }
            else if (event.target.value != "") {
                this.userData.preference1 = event.target.value;
            }
        },
        changePreference2(event) {
            if (event.target.value === "") {
                this.preferenceSelected = false;
            }
            else if (event.target.value != "") {
                this.userData.preference2 = event.target.value;
            }
        },
        setPaymentType(event) {
            this.userData.pago = event.target.value;
            if (event.target.value == 'Mercado Pago Recargo') {
                console.log(event.target.value);
                this.userData.porcentajeRecargo = 8;
                var partialValue = this.userData.porcentajeRecargo;
                this.userData.recargo = function (partialValue, totalValue) {
                    console.log(partialValue);
                    return (100 * partialValue) / totalValue;
                 };
        }
        },
        saveSale(cart) {
            // send to firebase
            var today = new Date().toLocaleDateString('es-GB', {
                day: 'numeric',
                month: 'numeric',
                year: 'numeric'
            }).split('/').join('-');

            var sale = [{
                date: today,
                name: this.userData.name,
                address: this.userData.address,
                phone: this.userData.phone,
                status: this.userData.status,
                email: this.userData.email,
                delivery: this.userData.delivery,
                preference1: this.userData.preference1,
                preference2: this.userData.preference2,
                total: this.cartTotal,
                pago: this.userData.pago,
                recargo: this.userData.recargo,
                localidad: this.userData.localidad,
                items: []
            }];

            for (var item in cart) {
                if (item.price === 0) {
                    item.price = this.price;
                }
                sale[0].items.push({
                    variedad: cart[item].name,
                    cantidad: cart[item].amount,
                    precio: cart[item].price,
                    pago: cart[item].total
                })
            }

            var self = this;
            database.ref('salesVrde/').push(sale, function (error) {
                if (error) {
                    console.log(error)
                } else {
                    self.saleComplete = true;
                }
            });

            database.ref('salesVrdeArchive/').push(sale, function (error) {
                if (error) {
                    console.log(error)
                } else {
                    self.saleComplete = true;
                }
            });

            for (var item in this.cart) {
                for (var i in this.productList) {
                    if (this.productList[i].key == this.cart[item].key) {
                        let key = this.cart[item].key.toString();
                        let stockDiff = this.productList[i].stock -= this.cart[item].amount;
                        console.log("Hello", key, stockDiff)
                        productsRef.child(key).update({ stock: stockDiff });
                    }
                }
            }
        },
        //toggle category buttons
        setVisibility: function (type) {
            let p = document.getElementById("products");
            scrollTo({ top: p.offsetTop - 55, behavior: "smooth" });
            this.search = '';
            for (var t in this.active) {
                this.active[t].status = false;
            }
            this.active[type].status = true;
        },
        toggleActive: function (e) {
            e.target.classList.add('active');
        },
        scrollTop: function () {
            window.scrollTo(0, 0);
        }
    },
    computed: {
        // totalRecargo: function (totalR) {
        //   var self = this;
        //   var partialValue = this.userData.porcentajeRecargo;
        //   var totalR = function (partialValue, totalValue) {
        //     return (100 * partialValue) / totalValue;
        //  } 
        //  return totalR

        // };

        // returns filtered list by search term or category
        filteredItems: function () {
            var self = this;
            var newList = this.productList.sort().filter(function (item) {
                console.log(item)
                return item.name && item.name.toLowerCase().indexOf(self.search.toLowerCase()) >= 0 && item.active !== false && item.stock > 0;
            });
            if (self.search != '') {
                for (var t in this.active) {
                    this.active[t].status = false;
                }
                for (var i in newList) {
                    self.active[newList[i].type].status = true;
                }
            }

            var input = document.getElementById('searchInput');
            input.onkeyup = function () {
                var key = event.keyCode || event.charCode;

                if (key == 8 || key == 46 && self.search == '') {
                    self.active = {
                        'verdura': { status: true },
                        'fruta': { status: false },
                        'almacen': { status: false },
                        'vinos': { status: false },
                        'medicina': { status: false },
                        'comida': { status: false }
                    }
                }
            };

            return newList.filter(function (item) {
                return self.active[item.type].status == true;
            }).sort();
        }
    }
})


//Scroll top on pageload
window.addEventListener('scroll', function () {
    var distance_from_top = document.documentElement.scrollTop;
    var cartDiv = document.getElementById("cart").getBoundingClientRect();
    if (distance_from_top < 250) {
        document.getElementsByClassName("search")[0].classList.remove("fixed");
        document.getElementById('up').classList.remove("fixed");
        document.getElementById('down').classList.remove("fixed");
    }
    if (distance_from_top > 250) {
        document.getElementsByClassName("search")[0].classList.add("fixed");
        document.getElementById('up').classList.add("fixed");
        document.getElementById('down').classList.add("fixed");
    }
    if (cartDiv.top < 200) {
        document.getElementById('totalFloat').classList.add("hide");
    } else {
        document.getElementById('totalFloat').classList.remove("hide");
    }
});

const scrollToTop = () => {
    let c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 10);
    }
};
const scrollTopProducts = () => {
    let p = document.getElementById("products");
    scrollTo({ top: p.offsetTop - 55, behavior: "smooth" });
};




