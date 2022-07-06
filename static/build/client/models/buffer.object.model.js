export var enumModel;
(function (enumModel) {
    let side;
    (function (side) {
        side["buy"] = "buy";
        side["sell"] = "sell";
    })(side = enumModel.side || (enumModel.side = {}));
    ;
    let type;
    (function (type) {
        type["limit"] = "limit";
        type["market"] = "market";
    })(type = enumModel.type || (enumModel.type = {}));
    ;
})(enumModel || (enumModel = {}));
class BufferModel {
    constructor(_symbol, _price, _quantity, _side, _type) {
        this.getDataFromBuffer = function (buffer) {
            var arr = [];
            for (var i = 0; i < buffer.length; i++) {
                arr.push(buffer[i]);
            }
            return arr;
        };
        this.symbol = _symbol;
        this.price = _price;
        this.quantity = _quantity;
        this.side = _side;
        this.type = _type;
    }
    getEncodedObject() {
        var data = [];
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
    decodeObject(arr) {
        var count = 0;
        var currentDecodeArr = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === "¬") {
                count++;
                switch (count) {
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
            }
            else {
                currentDecodeArr.push(arr[i]);
            }
        }
    }
}
export default BufferModel;
