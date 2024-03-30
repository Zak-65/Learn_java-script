let sid =10
let zak =20

async function test(){
    try{const a = sid
    const b = zak
    console.log(a)
    console.log(b)
    if (b<5){
        throw ("ra sghiraaa")
    }
}catch(khalid){
    console.log("failed")

}finally{
    console.log("finally")
}   
}

test()