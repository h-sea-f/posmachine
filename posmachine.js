function isContainItem(itemid,database){
	for(let i=0;i<itemid.length;i++){
		let flag=0;
		for(let j=0;j<database.length;j++){
			if(itemid[i]==database[j].id) flag=1;
		}
		if(flag==0) return false;
	}
	return true;
}

function getItemList(itemid,database){
	let itemList=[];
	for(let i=0;i<itemid.length;i++){
		let count=0;
		let name="";
		let price=0;
		let flag=0;
		if(itemList.length!=0){
			for(let j=0;j<itemList.length;j++){
							if(itemList[j].id==itemid[i]) flag=1;
					}
		}
		
		if(flag==0){
			for(let j=0;j<itemid.length;j++){
						if(itemid[i]==itemid[j]){
							count++;
						}
						}
			for(let j=0;j<database.length;j++){
				if(itemid[i]==database[j].id){
					name=database[j].name;
					price=database[j].price;
					break;
				}
			}
			itemList.push({id:itemid[i],name:name,price:price,count:count});
		}
		
		}
		return itemList;
	}
	


function getRecipt(itemList){
	let recipt="Receipts\n------------------------------------------------------------\n";
	let sum=0;
	for(let i=0;i<itemList.length;i++){
		recipt+=itemList[i].name+"\t"+itemList[i].price+"\t"+itemList[i].count+"\n";
		sum+=itemList[i].price*itemList[i].count;
	}
	recipt+="------------------------------------------------------------\nPrice:"+sum;
	return recipt;

}
function createRecipt(itemid,database){
	if(isContainItem(itemid,database)){
		let itemList=getItemList(itemid,database);
		console.log(getRecipt(itemList));
		return getRecipt(itemList);
	}
	else return "[ERROR]:没有该商品";

}
module.exports = {
    isContainItem,getItemList,getRecipt,createRecipt
}