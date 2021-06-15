//vrde.club

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCkh0tqLFK9LVQKG8yIukuPASPkY8DnCnE",
    authDomain: "el-conjunto-93a89.firebaseapp.com",
    databaseURL: "https://el-conjunto-93a89-default-rtdb.firebaseio.com",
    projectId: "el-conjunto-93a89",
    storageBucket: "el-conjunto-93a89.appspot.com",
    messagingSenderId: "306465039355",
    appId: "1:306465039355:web:d787f834c44f30d489a15e",
    measurementId: "G-GHLFFLFL0J"
  };

firebase.initializeApp(firebaseConfig);
firebase.analytics();

var database = firebase.database();
var perf = firebase.performance();

const productsRef = database.ref('products');

var app = new Vue({
    el: '#app',
    data: {
        type: 'Mayorista',
        search: '',
        priceMay: 50,
        discounts: '',
        productList: [],
        cartTotal: 0,
        subTotalCosto: 0,
        totalCantidad: 0,
        totalCosto: 0,
        cantidad: 0,
        totalUnidades: 0,
        unidadM: "",
        cart: [],
        cartItems: 0,
        saleComplete: false,
        fieldsMissing: false,
        confirmModal: false,
        userData: {
            name: '',
            address: '',
            phone: '',
            email: 'Mayorista',
            delivery: 0,
            pago: "",
            preference: "",
            localidad: "",
        },
        active: {
            'verdura': { status: true },
            'fruta': { status: false },
            'almacen': { status: false },
            'vinos': { status: false },
            'medicina': { status: false },
            'comida': { status: false }
        },
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
            let products = []
            snap.forEach(item => {
                if (item.child('view').val() == this.type || item.child('view').val() == "Todas"){
                    products.push({
                        active: item.child('active').val(),
                        name: item.child('name').val(),
                        type: item.child('type').val(),
                        priceMay: item.child('priceMay').val(),
                        priceCosto: item.child('priceCosto').val(),
                        unidadM: item.child('unidadM').val(),
                        cantidad: item.child('cantidad').val(),
                        stock: item.child('stock').val(),
                        image: item.child('image').val(),
                        key: item.key,
                        amount: 0
                    });
                }
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
            this.totalCosto = 0;
            this.totalCantidad = 0;

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

                this.cart[item].total = this.cart[item].amount * this.cart[item].priceMay;
                this.cart[item].total = parseFloat(this.cart[item].total.toFixed(2))
                this.cartTotal += this.cart[item].total;
                this.cartTotal = parseFloat(this.cartTotal.toFixed(2))
                this.cart[item].subTotalCosto = this.cart[item].amount * this.cart[item].priceCosto;
                this.cart[item].subTotalCosto = parseFloat(this.cart[item].subTotalCosto.toFixed(2))
                this.totalCosto += this.cart[item].subTotalCosto;
                this.totalCosto = parseFloat(this.totalCosto.toFixed(2))
                this.totalCantidad += this.cart[item].amount;
                this.totalCantidad = parseFloat(this.totalCantidad.toFixed(2))
            }
        },
        addItem: function (item) {
            item.amount++;
            item.total = item.amount * item.priceMay;
            item.subTotalCosto = item.amount *  item.priceCosto;
            this.getTotal();

        },
        removeItem: function (item) {
            this.getTotal();
            if (item.amount > 0) {
                item.amount--;
            }
            item.total = item.amount * item.priceMay;
            item.subTotalCosto = item.amount * item.priceCosto;
            this.getTotal();
        },
        updateValue: function (item) {
            if (item.amount == '' || parseFloat(item.amount) == NaN) {
                 item.amount = 0 
                }
            else (item.amount = parseFloat(item.amount))
            item.total = item.amount * item.priceMay;
            item.subTotalCosto = item.amount * item.priceCosto;
            this.getTotal();
        },
        formValidate() {
            // form validation
            if (this.userData.name == '' || this.userData.phone == '' || this.deliveryMethod == false || this.userData.pago == '') {
                this.fieldsMissing = true;
            }
            else if (this.userData.delivery == 3 && this.userData.address == '' && this.userData.localidad == '' && this.userData.pago == '') {
                this.fieldsMissing = true;
            }
            else {
                this.fieldsMissing = false;
            }
            this.confirmModal = true;
        },
        changeLocation(event) {
            if (event.target.value === "1") {
                this.userData.delivery = 1;
                this.userData.address = "Retira por La Lucila";
            }
            else {
                this.userData.delivery = 3;
                this.userData.address = "";

            }
            this.deliveryMethod = true;
        },
        setPaymentType(event) {
            this.userData.pago = event.target.value;
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
                email: this.userData.email,
                delivery: this.userData.delivery,
                totalCosto: this.totalCosto,
                Type: this.type,
                pago: this.userData.pago,
                totalCantidad: this.totalCantidad,
                total: this.cartTotal,
                preference: this.userData.preference,
                localidad: this.userData.localidad,
                items: []
            }];

            for (var item in cart) {
                if (item.priceMay === 0 && item.priceCosto === 0) {
                    item.priceMay = this.priceMay;
                    item.priceCosto = this.priceCosto;
                }
               // console.log(item.priceCosto);
                sale[0].items.push({
                    variedad: cart[item].name,
                    cantidad: cart[item].amount,
                    cantidadMay: cart[item].cantidad,
                    unidadMay: cart[item].unidadM,
                    precioMay: cart[item].priceMay,
                    pago: cart[item].total,
                    precioCosto: cart[item].priceCosto,
                    subTotalCosto: cart[item].subTotalCosto,

                })
            }

            var self = this;
            database.ref('sales/mayorista').push(sale, function (error) {
                if (error) {
                    console.log(error)
                } else {
                    self.saleComplete = true;
                    setTimeout(function () { location.reload() }, 20000);
                }
            });

            database.ref('salesArchive/mayorista').push(sale, function (error) {
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

        // returns filtered list by search term or category
        filteredItems: function () {
            var self = this;
            var newList = this.productList.sort().filter(function (item) {
                return item.name.toLowerCase().indexOf(self.search.toLowerCase()) >= 0 && item.active !== false;
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
        // document.getElementById('down').classList.remove("fixed");
    }
    if (distance_from_top > 250) {
        document.getElementsByClassName("search")[0].classList.add("fixed");
        document.getElementById('up').classList.add("fixed");
        // document.getElementById('down').classList.add("fixed");
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

