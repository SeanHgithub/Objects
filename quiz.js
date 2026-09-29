function Foodlines(m) {
    Lines = [1,2,3,4,5]
    Output = []
    for (i=1; i<=m; i++) {
        x= Math.min(Lines);
        Output.push(x);
        Lines.pop(x);
        console.log(x);
    }
    return Output
}
console.log(Foodlines(2));