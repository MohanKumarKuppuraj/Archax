
export namespace enumModel
{
    export enum side{
		buy = "buy",
		sell = "sell"
	 };

	export enum type{
		limit = "limit",
		market = "market"
	 };
}

class BufferModel{
     constructor(_symbol:string,_price:number,
     	_quantity:number,_side:enumModel.side,
     	_type:enumModel.type){
     	this.symbol = _symbol;
     	this.price = _price;
     	this.quantity = _quantity;
     	this.side = _side;
     	this.type = _type;
     }
     side:enumModel.side;
     type:enumModel.type;
     symbol:string;
     quantity:number;
     price:number;

     getDataFromBuffer = function(buffer:Buffer){
     	var arr:any[]=[];
     	for(var i=0;i<buffer.length;i++){
     		arr.push(buffer[i]);
     	}
     	return arr;
     }

     getEncodedObject():any[]{
     	var data:any[] = [];
     	data = this.getDataFromBuffer(Buffer.from(this.symbol));
     	data = data.concat("¬");
     	data = data.concat(this.getDataFromBuffer(Buffer.from(String(this.price))));
     	data = data.concat("¬");
     	data = data.concat(this.getDataFromBuffer(Buffer.from(String(this.quantity))));
     	data = data.concat("¬");
     	data = data.concat(this.getDataFromBuffer(Buffer.from(this.side)));
     	data = data.concat("¬");
     	data = data.concat(this.getDataFromBuffer(Buffer.from(this.type)));
     	data = data.concat("¬");
     	return data;
     }

     decodeObject(arr:any[]){
     		var count:number = 0;
     		var currentDecodeArr = [];
     		for(var i=0;i<arr.length;i++){
     			if(arr[i] === "¬"){
     				count++;
     				switch(count){
     					case 1:
     						console.log(currentDecodeArr);
     					break;
     					case 2:
     						console.log(currentDecodeArr);
     					break;
     					case 3:
     						console.log(currentDecodeArr);
     					break;
     					case 4:
     						console.log(currentDecodeArr);
     					break;
     					case 5:
     						console.log(currentDecodeArr);
     					break;
     				}
     				currentDecodeArr = [];
     			}else{
     			currentDecodeArr.push(arr[i]);
     			}
     		}
     }

}
export default BufferModel;