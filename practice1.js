function elderwand(start, N, wizards) {
    for(i=0; i<=N - 1; i++) {
        let finalmaster = wizards[i][0];
        return finalmaster
        };
    let masters = [];    
    for(i=0; i<=N-1; i++) {
        if (masters.includes(wizards[i][0])) {
            masters.push(wizards[i][0])
        } 
    }
    return masters.length
    console.log()
}

elderwand("A", 4, [[AB],[CB],[DC],[ED]]);