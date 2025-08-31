
function Test(i){
  console.log("called test", i++)
  Test(i)
}
Test(1)