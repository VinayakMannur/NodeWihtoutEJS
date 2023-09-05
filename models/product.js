const fs = require('fs');
const path = require('path');
const p = path.join(path.dirname(process.mainModule.filename),'data','products.json');

const getProductsFromFile = (cb)=>{
    fs.readFile(p,(err,fileContent)=>{
        if(err){
            return cb([]);
        }
        cb(JSON.parse(fileContent));
    })
}

module.exports = class Product{
    constructor(t){
        this.title = t
    }

    save(){
        // fs.writeFile('message.txt',JSON.stringify(this),(err)=>{
        //     if(err){
        //         console.log('success')
        //     }
        // });
        // console.log(this)
        
        getProductsFromFile(products=>{
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),(err)=>{
                console.log(err)
            })
        })
    }

    static fetchAll(cb){ 
        // fs.readFile('message.txt','utf-8',(err,data)=>{
        //     if(!err){
        //        console.log('s'); 
        //     }
        //     products.push(JSON.parse(data));
        //     console.log(products)
        // })
        getProductsFromFile(cb) 
    }
}