var atv = (n1,n2,n3) => {

    if(n1 > n2 && n1 > n3){
        console.log(`O primeiro número ${n1} é maior`)
    }
    else if(n2 > n1 && n2 > n3){
        console.log(`O segudno número ${n2} é maior`)
    }
    else if(n3 > n1 && n3 > n1){
        console.log(`O terceiro número ${n3} é maior`)
    }else{
        console.log("eles são iguais")
    }
    
}

atv(1,1,1)