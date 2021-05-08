if (inicial + 3 < inicialJ){
    let palindromo = palabraArray.slice(inicial,inicial+1) 
    let palindromoReverse = palabraArray.slice(inicial,inicial+1).reverse()
    flag = true
    for(let k in palindromo){
        if (palindromo[k] != palindromoReverse[k]) {
            flag = false
            break
        }
    }
    if(flag){
        let palabraNueva = palindromo.join("")
        dic.push(palabraNueva)
    }
}
else{
    break
}