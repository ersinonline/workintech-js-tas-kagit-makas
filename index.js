function tasKagitMakas(kullaniciSecimi) {
  let bilgisayarSecimi = Math.floor(Math.random() * 3);

  if (bilgisayarSecimi === 0) {
    bilgisayarSecimi = 'taş';
  } else if (bilgisayarSecimi === 1) {
    bilgisayarSecimi = 'kağıt';
  } else {
    bilgisayarSecimi = 'makas';
  }

  // Sonuç kontrolü
  if (kullaniciSecimi === bilgisayarSecimi) {
    return (
      'Senin seçimin: ' +
      kullaniciSecimi +
      '. Bilgisayarın seçimi: ' +
      bilgisayarSecimi +
      '. Beraberlik!'
    );
  } else if (
    (kullaniciSecimi === 'taş' && bilgisayarSecimi === 'makas') ||
    (kullaniciSecimi === 'kağıt' && bilgisayarSecimi === 'taş') ||
    (kullaniciSecimi === 'makas' && bilgisayarSecimi === 'kağıt')
  ) {
    return (
      'Senin seçimin: ' +
      kullaniciSecimi +
      '. Bilgisayarın seçimi: ' +
      bilgisayarSecimi +
      '. Kazandın!'
    );
  } else {
    return (
      'Senin seçimin: ' +
      kullaniciSecimi +
      '. Bilgisayarın seçimi: ' +
      bilgisayarSecimi +
      '. Kaybettin!'
    );
  }
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = tasKagitMakas;
