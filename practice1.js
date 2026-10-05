function elderwand(start, N, duels) {
    let owner = start;
    let times = 1;
    for(i=0; i<=N - 1; i++) {
        if (duels[i][1] === owner) {
            owner = duels[i][0]
            times +=1
        }
    }
    console.log(owner);
    console.log(times);
}

elderwand("B", 4, ["AB","CB","DC","ED"]);