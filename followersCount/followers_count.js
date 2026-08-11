let count = 0; // Initialize count to 0

function displayCount() {
document.getElementById('countDisplay').innerHTML=count; // Sayıyı HTML'de görüntüle
}


function increaseCount() {
  count++; // Sayıyı 1 artır
  displayCount(); // Sayıyı görüntüle
  checkCountValue(); // Sayı değerini kontrol et ve mesajları göster
}

function checkCountValue() {
  if (count === 10) {
    alert("Instagram gönderiniz 10 takipçi kazandı! Tebrikler!");
  } else if (count === 20) {
    alert("Instagram gönderiniz 20 takipçi kazandı! Devam edin!");
  }
}



