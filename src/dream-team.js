function myFn(members) {
  let res = "";
  for (let i = 0; i < members.length; i++) {
    let word = members[i];
    if (typeof word === "string") res = res + word[0];
  }
  return res.split("").sort().join("");
}
console.log(myFn(["Qwe", undefined, "Ewq", "Rrr", 1, true, false]));
