var BasketModule = (function(){

    var sum;
    var goods = [];

    return {
        addProduct: function ( product ) {
            sum += product.price;
            goods.push(product);
        },
        printProducts: function () {
            for (var i = 0; i < goods.length; i++) {
                console.log(goods[i].name, goods[i].price)
            }
        }
    }
}());

var sault = {
    name: "Соль",
    price: "20"
}
var peper = {
    name: "Перец",
    price: "30"
}

BasketModule.addProduct(sault);
BasketModule.printProducts();
console.log('\n')
BasketModule.addProduct(peper);
BasketModule.printProducts();
console.log('\n')
BasketModule.addProduct(peper);
BasketModule.printProducts();

var testModule = (function() {
	var privateVariable = 0;
  
  function resetVariable() {
  	privateVariable = 0;
  }
    
	return {
  	getVariable: function() {
    	return privateVariable;
    },
    increaseVariable: function() {
    	privateVariable++;
    },
    resetVariable: resetVariable
  };
})();

console.log(testModule.getVariable());
testModule.increaseVariable();
console.log(testModule.getVariable());
testModule.resetVariable();
console.log(testModule.getVariable());