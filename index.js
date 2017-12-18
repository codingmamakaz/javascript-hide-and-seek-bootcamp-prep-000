function getFirstSelector(selector){
  var a = document.querySelector(selector);
  return a;
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
 var list = document.querySelectorAll('ul.ranked-list li');
 for (var i = 0; i < list.length; i++) {
   list[i].innerHTML = parseInt(list[i].innerHTML) + n}
 }

  
 
function deepestChild(){
  var children = document.querySelectorAll('#grand-node');
  for (var i = 0; i < children.length; i++){
        children[i].innerHTML = children.length -1;
      
    }
} 