let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
// Test metnini ayarla
document.getElementById("inputText").value = testText;

// Kullanıcı girişini ve çıktısını sıfırla
let userInput = document.getElementById("userInput");
userInput.value = "";
userInput.readOnly = false;
userInput.focus();

document.getElementById("output").innerHTML = "";

// Zamanlayıcıyı başlat
startTime = new Date().getTime();
}

 function endTest() {
            endTime = new Date().getTime();

            // Kullanıcı girişini devre dışı bırak
            document.getElementById("userInput").readOnly = true;

            // Geçen süreyi ve dakikada kelime sayısını (WPM) hesapla
            var timeElapsed = (endTime - startTime) / 1000; // saniye cinsinden
            var userTypedText = document.getElementById("userInput").value;

            var totalLength = userTypedText.length;

            // Kelimeleri doğru saymak için metni regex kullanarak ayır
            var typedWords = userTypedText.split(/\s+/).filter(function (word) {
                return word !== "";
            }).length;

            var wpm = 0; // Varsayılan değer

            if (timeElapsed !== 0 && !isNaN(typedWords)) {
                wpm = Math.round((typedWords / timeElapsed) * 60);
            }

            // Sonuçları göster
            var outputDiv = document.getElementById("output");
            outputDiv.innerHTML = "<h2>Yazma Testi Sonuçları:</h2>" +
                "<p>Toplam Uzunluk: " + totalLength + "</p>" +
                "<p>Yazılan Kelimeler: " + typedWords + "</p>" +
                "<p>Geçen Süre: " + timeElapsed.toFixed(2) + " saniye</p>" +
                "<p>Dakikada Kelime (WPM): " + wpm + "</p>";
            }

