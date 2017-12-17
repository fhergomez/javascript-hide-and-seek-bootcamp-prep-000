function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget () {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {

}

function deepestChild() {
  const divs = document.getElementById("grand-node").querySelector('div');
  for (let i=0;i < divs.length;i++) {
    return divs[i].innerHTML = (i+1).toString();
  }
}
