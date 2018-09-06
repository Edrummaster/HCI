function shoppingCar(typePaella){ 
    this.typePaella = typePaella;
    var arrayElements = [];

this.compositeProto = function(){
            var objectComposite = {

                add: function(product){
                    console.log(product);
                    arrayElements.push(product);
                     console.log(product);
                    return arrayElements;
                },

                remove: function (product){
                    arrayElements.split(0,arrayElements.length);
                    arrayElements.add(product);
                    console.log(product);
                    return arrayElements;
                }
         }
        return objectComposite;
    }
}



function buildShoppingCar( typeProduct, product){//tipo de producto, producto){

    var car = new shoppingCar(typeProduct); 
    var resultCar = car.compositeProto().add(product);

    return resultCar;

}


var carro = {
        tipoProducto: this.paellaType
        producto : paellaProduct
    }