// Array berisi fakta-fakta yang akan ditampilkan
var facts = [
    "Main store aman dan legal pastinya",
    "Main store dibuat pada 2012",
    "Follow media sosial main store di @mainstore_id",
    "Penuhi kebutuhan top up mu di Main Store"
];

// Fungsi untuk mendapatkan fakta acak
function getRandomFact() {
    var randomNumber = Math.floor(Math.random() * facts.length);
    return facts[randomNumber];
}

// Memasukkan fakta acak ke dalam div
var factDiv = document.getElementById("fact-text");
factDiv.textContent = getRandomFact();
