function myFn(arr) {
  let arrf = arr.flat();
  let res = [];
  for (let i = 0; i < arrf.length; i++) {
    if (arrf[i] === "^^") {
      res.push(arrf[i]);
    }
  }
  return res.length;
}
console.log(
  myFn([
    [1, 2, 3],
    ["^^", "w", "e"],
  ])
);
