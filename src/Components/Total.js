let total = 0;
    if (adoptCart.length){
        adoptCart.map((bird)=>{
            return total += bird.amount
        })
    }