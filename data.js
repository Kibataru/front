 function newtext(){
  const text = ["Вы здесь? Это странно. Что задумали?", "О, новый гость! Или старый... Я все ровно ничего не запоминаю.", "Добрый день!", "Работает и это чудо!", "Всем привет!"];
  let randomIndex = Math.floor(Math.random() * text.length);
  document.getElementById("text").textContent = text[randomIndex];
}
