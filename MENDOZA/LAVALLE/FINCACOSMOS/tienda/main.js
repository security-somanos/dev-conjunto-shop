//vrde.club
var app = new Vue({
    el: '#app',
    data: {
        search: "",
        price: 0,
        productList: products,
        cartTotal: 0,
        cart: [],
        cartItems: 0,
        saleComplete: false,
        fieldsMissing: true,
        userData: {
            name: "",
            address: "",
            phone: "",
            email: "",
            delivery: false
        },
        active: {
            'veggie': { status: true },
            'fruit': { status: false },
            'meal': { status: false }
        },
        cartHas: {
            veggie: false,
            fruit: false,
            meal: false
        }
    },
    methods: {
        getTotal: function () {
            var self = this;
            this.cartTotal = 0;
            this.cartItems = 0;
            this.cart = this.productList.filter(function (item) {
                return item.total > 0;
            });

            for (var item in this.cart) {
                this.cart[item].total = this.cart[item].amount * this.cart[item].price;
                this.cart[item].total = parseFloat(this.cart[item].total.toFixed(2))
                if (this.cart[item].type == 'fruit') {
                    this.cartHas.fruit = true;
                }
                if (this.cart[item].type == 'veggie') {
                    this.cartHas.veggie = true;
                }
                if (this.cart[item].type == "meal") {
                    this.cartHas.meal = true;
                }
                this.cartTotal += this.cart[item].total;
                this.cartTotal = parseFloat(this.cartTotal.toFixed(2))
            }
        },
        addItem: function (item) {
            item.amount++;
            item.total = item.amount * item.price;
            this.getTotal();
        },
        removeItem: function (item) {
            this.getTotal();
            if (item.amount > 0) {
                item.amount--;
            }
            item.total = item.amount * item.price;
            this.getTotal();
        },
        updateValue: function (item) {
            if (item.amount == "" || parseFloat(item.amount) == NaN) { item.amount = 0 }
            else (item.amount = parseFloat(item.amount))
            item.total = item.amount * item.price;
            this.getTotal();
        },
        saveSale: function (cart) {

            // form validation
            if (this.userData.name == "" || this.userData.phone == "") {
                this.fieldsMissing = true;
            }
            if (this.userData.delivery == true && this.userData.address == "") {
                this.fieldsMissing = true;
            }
            else {
                this.fieldsMissing = false;
            }
            if (this.fieldsMissing == false) {

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
                    total: this.cartTotal
                }];

                for (var item in cart) {
                    sale.push({
                        variedad: cart[item].name,
                        cantidad: cart[item].amount,
                        precio: cart[item].price,
                        pago: cart[item].total
                    })
                }

                var self = this;
                database.ref('fincacosmos/' + today).push(sale, function (error) {
                    if (error) {
                        console.log(error)
                    } else {
                        self.saleComplete = true;
                    }
                });

                database.ref('fincacosmosArchive/' + today).push(sale, function (error) {
                    if (error) {
                        console.log(error)
                    } else {
                        self.saleComplete = true;
                    }
                });
            }
        },

        //toggle category buttons
        setVisibility: function (type) {
            this.search = "";
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
                return item.name.toLowerCase().indexOf(self.search.toLowerCase()) >= 0;
            });
            if (self.search != "") {
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

                if (key == 8 || key == 46 && self.search == "") {
                    self.active = {
                        'veggie': { status: true },
                        'fruit': { status: false },
                        'meal': { status: false }
                    }
                }
            };

            return newList.filter(function (item) {
                return self.active[item.type].status == true;
            }).sort();
        }
    }
})