let poketmon = ["피카츄", "라이츄", "파이리", "꼬부기"];
console.log(poketmon);

for(let i = 0; i < poketmon.length; i++){
  console.log(poketmon[i]);
}

function nameTag(name){
  return "안녕하세요" + name + "입니다";
}

function percent(realVal, totalVal){
  return (realVal / totalVal) * 100;
}