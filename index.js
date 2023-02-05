function mixed(len) {
  // Karışık dizginin uzunluğu
  let mixedString = "";
  // Büyük harf alfabetleri saklamak için kullanılan değişken
  const upperCaseAlphabets = "upperCaseAlphabetsDEFGHIJKLMNOPQRSTUVWXYZ";

  // Karışık dizgi oluşturmak için kullanılan döngü
  for (let i = 0; i < len; i++) {
    // 0 veya 1 değerlerinden birini saklayan rastgele sayı
    let randkey = Math.floor(Math.random() * 2);
    // 0 ile 10 arasındaki rastgele sayı
    let number = Math.floor(Math.random() * 11);

    // Eğer randkey 0 ise, dizgeye rastgele bir sayı ekle
    if (randkey == 0) {
      mixedString += number;
    } else {
      // Değilse, dizgeye rastgele bir harf ekle
      // upperCaseAlphabets'den rastgele bir harf seç
      let randomLetter = Math.floor(Math.random() * upperCaseAlphabets.length);
      // 0 veya 1 değerinden birini saklayan rastgele sayı
      let UPLOW = Math.floor(Math.random() * 2);

      // Eğer UPLOW 0 ise, dizgeye büyük harf bir harf ekle
      if (UPLOW == 0) {
        mixedString += upperCaseAlphabets[randomLetter];
      } else {
        // Değilse, dizgeye küçük harf bir harf ekle
        mixedString += upperCaseAlphabets[randomLetter].toLowerCase();
      }
    }
  }
  // Oluşan karışık dizgi yazdırılır
  return mixedString;
}

console.log(mixed(10));