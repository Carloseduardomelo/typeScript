export const Soma = (number:number) =>{
    return number + 1
}

export const Multi = (number:number , quant: number) =>{
    if(quant === 2 || quant ===3){
        return number * quant
    }else{
        return Error('falhou');
        
    }
    
}