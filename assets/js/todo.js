
/* 
kullanıcının kaç adet görev eklediğini bulmak için sayaç ekle
sonra eklemek için bir fonksiyon oluştur
kullanıcıdan görev metnini al
metin boşsa eğer uyarı ver ve boşlukları düzenle 
kullanıcı görev girdiğinde görevi bir arttır.
sonra input temizle
görevleri listele
hangi görevi sileceğini belirt
**/

let counter = 0;

function addToDo () {

  if (inputTxt.value.trim() !== '') {
   list.innerHTML += `<li>
   <input type="checkbox" class="toDoCheckbox">
   ${inputTxt.value} <a href="#" class="sifirla">✖</a></li>`
    counter++;
    ekle.innerText = ` Ekle - (${counter}) `
    inputTxt.value = '';
    bindClickEvent();
   

  } else {

    alert ('Boş görev ekleyemezsin')
  }
}

// function temizle(){
 
//   ekle.innerText = ` Ekle `
//   inputTxt.value = '';
//   list.innerHTML= '';
//   counter = 0;
// }

function bindClickEvent (){

  const temizle = document.querySelectorAll('.sifirla')
  for (const btn of temizle){
    btn.addEventListener('click',removeTodo);
    
  

  }
}


function removeTodo() {
  if(confirm('Todoyu silmek istiyor musun?')) {

    this.parentElement.remove();
  }

}

ekle.addEventListener('click', addToDo);
// sifirla.addEventListener('click', temizle);