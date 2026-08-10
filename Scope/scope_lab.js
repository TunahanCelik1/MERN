// Küresel kapsam
var globalVar = "Ben bir küresel değişkenim";
let globalLet = "Ben de küreselim, ama let ile kapsamlıyım";
const globalConst = "Ben bir küresel sabitim";


{
// Blok kapsam
var blockVar = "Ben bir blok kapsamlı varım";
let blockLet = "Ben bir blok kapsamlı let'im";
const blockConst = "Ben bir blok kapsamlı const'um";
}
function show(){
var functionVar = "Ben bir blok kapsamlı varım";
let functionLet = "Ben bir blok kapsamlı let'im";
const functionConst = "Ben bir blok kapsamlı const'um";
}
show();

//console.log(functionVar); // Referans Hatası atar
//console.log(functionLet); // Referans Hatası atar
console.log(functionConst); // Referans Hatası atar

