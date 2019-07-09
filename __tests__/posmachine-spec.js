const posmachine = require('../posmachine');
it ("should return true when invoke isContainItem itemid is ['0001', '0003', '0005', '0003'] databse is ", () => {
    //given
    const itemid=['0001', '0003', '0005', '0003'];
    const databse=[
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
];
    //when
    //then
    expect(posmachine.isContainItem(itemid, databse)).toBe(true);
});

it ("should return false when invoke isContainItem itemid is ['0000', '0003', '0005', '0003'] databse is ", () => {
    //given
    const itemid=['0000', '0003', '0005', '0003'];
    const databse=[
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
];
    //when
    //then
    expect(posmachine.isContainItem(itemid, databse)).toBe(false);
});

it ("should"+"Return Receipts\n"
    	+"------------------------------------------------------------\n"+
    	"Coca Cola\t3\t1\n"+
    	"Pepsi-Cola\t5\t2\n"+
    	"Dr Pepper\t7\t1\n"+
    	"------------------------------------------------------------\n"+
    	"Price:20"+"  when invoke createRecipt itemid is ['0001', '0003', '0005', '0003'] databse is "+"", () => {
    //given
    const itemid=['0001', '0003', '0005', '0003'];
    const databse=[
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
];
    //when
    //then
    expect(posmachine.createRecipt(itemid, databse)).toBe("Receipts\n"
    	+"------------------------------------------------------------\n"+
    	"Coca Cola\t3\t1\n"+
    	"Pepsi-Cola\t5\t2\n"+
    	"Dr Pepper\t7\t1\n"+
    	"------------------------------------------------------------\n"+
    	"Price:20");
});

it ("should"+" return [ERROR]:没有该商品 when invoke createRecipt itemid is ['0000', '0003', '0005', '0003'] databse is "+"", () => {
    //given
    const itemid=['0000', '0003', '0005', '0003'];
    const databse=[
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
];
    //when
    //then
    expect(posmachine.createRecipt(itemid, databse)).toBe("[ERROR]:没有该商品");
});


