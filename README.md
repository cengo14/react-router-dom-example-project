# Basit Araba Web Sitesi

Bu proje, React kullanılarak oluşturulmuş, JSON-server ile bir API'den veri çekilen ve Axios ile bu verilere istek atılan, çok sayfalı basit bir araba web sitesidir. Anasayfada listelenen araçlar ve her aracın detay sayfası mevcuttur. Stil için Bootstrap kullanılmıştır.

## Özellikler

- **Anasayfa:** API'den gelen araçların listelenmesi.
- **Araç Detay Sayfası:** Her bir aracın detaylarının gösterildiği sayfa.
- **Çoklu Sayfa Gezinme:** React Router DOM ile sayfalar arası geçiş.

## Proje Kurulumu

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1. Projeyi klonlayın:

   ```bash
   git clone https://github.com/cengo14/react-router-dom-example-project.git
   ```

2. Proje dizinine gidin:

   ```bash
   cd react-router-dom-example-project
   ```

3. Gerekli bağımlılıkları yükleyin:

   ```bash
   npm install
   ```

4. JSON-server'ı başlatın (API servisi):

   ```bash
   npm run server
   ```

5. Uygulamayı başlatın:

   ```bash
   npm run dev
   ```

## Kullanılan Teknolojiler

- **React** - UI oluşturmak için
- **JSON-server** - API oluşturmak için
- **Axios** - API istekleri için
- **React Router DOM** - Çoklu sayfa navigasyonu için
- **Bootstrap** - Stil düzenlemeleri için

## Ekran Görüntüleri

### Anasayfa
![Anasayfa](desktop.gif)


Anasayfada tüm araçlar listelenir, kullanıcı bir araca tıkladığında aracın detaylarına yönlendirilir.

## Katkıda Bulunma

Katkıda bulunmak isterseniz, pull request açabilir veya issue oluşturabilirsiniz.


