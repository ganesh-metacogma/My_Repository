const Controller = {};
const model = require("./../models/Products.js");
​
Controller.home = (req, res) => {
​
    return res.redirect('/cart/retrive')
}
Controller.add = (req, res) => {
​
    cartObj.cartAdd(req)
    return res.redirect('/cart/retrive')
​
}
Controller.remove = (req, res) => {
​
    cartObj.cartRemove(req)
    return res.redirect('/cart/retrive')
​
}
Controller.update = (req, res) => {
​
    cartObj.cartUpdate(req)
    return res.redirect('/cart/retrive')
​
}
Controller.retrive = (req, res) => {
​
    cartObj.cartRetrive(req)
    let sum = 0;
    setTimeout(() => {
        cartObj.data.forEach(data => {
            sum = sum + (parseInt(data.productPrice) * parseInt(data.productQuantity))
        });
        return res.render("cartpage", {
            title: "Cart Page",
            css: "style.css",
            value: cartObj.data,
            sum: sum
        });
    }, 500);
}
​
class Cart {
    constructor(productId = null) {
        this.productId = productId;
        this.tempData = null;
    }
    cartAdd(req) {
        const product = new model({
            productName: req.body.productName,
            productPrice: req.body.productPrice,
            productQuantity: parseInt(req.body.productQuantity),
        });
        product
            .save()
            .then(result => {
                if (result) {
                    console.log(result)
                }
            })
            .catch(err => {
                console.log(err)
            });
    };
​
    cartRemove(req) {
​
        model.findByIdAndRemove(req.params.id, (err, user) => {
            if (err) {
                return console.log(err);
            }
            if (!user) {
​
                return console.log("Not Found");
            }
            console.log("Removed>>>", user)
​
​
        })
    }
    cartUpdate(req) {
        let result = 0;
        if (req.params.operation == 'add') {
            result = parseInt(req.params.val) + 1;
        }
        else {
            result = parseInt(req.params.val) - 1;
        }
        if (result <= 0) {
            result = 1;
        }
        model.findByIdAndUpdate(
            req.params.id,
            { $set: { productQuantity: result } },
            { multi: true, new: true },
            (err, user) => {
                if (err) {
                    return console.log(err);
                }
                if (!user) {
                    return console.log("Not Found");
                }
                return console.log("Updated", user);
            }
        );
    }
    cartRetrive(req) {
        model.find((err, address) => {
            if (err) {
                return console.log(err);
            }
            if (!address) {
                return console.log("Not Found");
            }
            console.log("Retrived>>>", address)
            cartObj.data = address;
        });
    }
    set data(tempData) {
        this.tempData = tempData;
        return this.tempData;
    }
    get data() {
        return this.tempData;
    }
}
let cartObj = new Cart();
​
module.exports = Controller;
