function Foodlines(m) {
    const Lines = [2,2,3,3,3];
    let Output = [];
    for (let i=1; i<=m; i++) {
        let  x= Math.min(...Lines);
        Output.push(x);
        let y = Lines.indexOf(x);
        Lines[y] = 101;
    }
    return Output;
}

Foodlines(5).forEach((x) => console.log(x));