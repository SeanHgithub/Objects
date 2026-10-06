let riders = [
[130, 14, "N"],
[125, 9, "Y"],
[125, 9, "N"],
[110, 15, "Y"],
[120, 12, "N"],
[119, 13, "Y"],

]




function canride() {
    let N = riders.length;
    let peoplewhocanride = 0;
    for(i=0; i<=N-1; i++) {
        if(riders[i][0] >= 120 && riders[i][1] >=12) {
            peoplewhocanride += 1;
        } else if(riders[i][0] >= 120 && riders[i][1] <=12 && riders[i][2] === "Y") {
           peoplewhocanride += 1; 
        }
    }
    return peoplewhocanride;
}
console.log(canride());