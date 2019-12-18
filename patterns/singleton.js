//singleton
 var Singleton = (function(){
    var instance;    

    function Singleton(){
        if ( !instance ){
            instance = this;
        } else {
            return instance;
        }
    };
    return Singleton;

})();

var s1 = new Singleton();
var s2 = new Singleton();
console.log(s1 === s2);
 

var mySingleton = (function () {
    var instance;
    function init() {
        function privateMethod() {
            console.log("I am private")
        }

        var privateVariable = "I am also private";

        var privateRandomNumber = Math.random();

        return {
            publicMethod: function () {
                console.log("The public can see me!")
            },

            publicProperty: "I am also public",

            getRandomNumber: function () {
                return privateRandomNumber;
            }
        };
    };
    return {
        getInstance: function () {
            if ( !instance ) {
                instance = init();
            }

            return instance;
        }
    };
})();

var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();

console.log(singleA === singleB);

console.log(singleB);


class Database {
    constructor(data) {
      if (Database.exists) {
        return Database.instance
      }
      Database.instance = this
      Database.exists = true
      this.data = data
    }
  
    getData() {
      return this.data
    }
  }
  
  const mongo = new Database('MongoDB')
  console.log(mongo.getData())
  
  const mysql = new Database('MySQL')
  console.log(mysql.getData())
  