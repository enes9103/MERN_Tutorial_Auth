## Server Kurulumu ve MongoDB Bağlantısı

1. Proje oluşturma:
   - `npm init` komutu ile projenizi oluşturun.
   - Ana dosyanızı (örn: index.js) oluşturun ve package.json içinde main olarak belirtin.

2. .env Dosyası:
   - Projenizin root dizinine .env dosyası oluşturun ve ortam değişkenlerini burada saklayın.

3. MongoDB Bağlantısı:
   - MongoDB'ye giriş yapıp bir database oluşturun.
   - Oluşturduğunuz database'in bağlantı bilgisini .env dosyasında saklayın.
   - MongoDB Atlas'ta kullanıcı oluşturup yetki vererek bağlantı için kullanıcı bilgilerini .env dosyasında tutun.

4. Express ve diğer paketler:
   - `npm i express` komutu ile Express paketini yükleyin.
   - `npm i mongoose` komutu ile MongoDB bağlantısı için Mongoose paketini yükleyin.
   - İsteğe bağlı olarak geliştirme sırasında canlı değişiklikler için `npm i nodemon --save-dev` komutu ile nodemon paketini yükleyin.

5. Express ve MongoDB Bağlantısı:
   - Oluşturduğunuz .env dosyasını import edin ve `dotenv.config()` ile kullanın.
   - Express uygulamasını oluşturup istediğiniz portta dinlemek için `app.listen(PORT, () => { ... })` kullanın.
   - MongoDB bağlantısı için `mongoose.connect(process.env.DB_CONNECTION_STRING)` şeklinde bağlantı yapın.

6. Models:
   - Models klasörü altında oluşturacağınız dosyalarda mongoose Schema ile veritabanı alanlarınızı tanımlayın.
   - Model oluşturarak Schema ve bağlantı ile ilgili işlemleri gerçekleştirin.

7. Routers:
   - Router oluşturarak farklı endpointleri ayrı dosyalarda tanımlayın.
   - Endpointlere gelen istekleri kontrol ederek ilgili işlemleri gerçekleştirin.

## Express Uygulaması ve Routers

1. Express Uygulaması:
   - Express paketini import edin: `import express from "express";`.
   - Express uygulamasını oluşturun: `const app = express();`.
   - Middleware kullanımı için `app.use()` ile express.json() ekleyin.

2. Router Oluşturma:
   - Router için yeni bir dosya oluşturun: `userRouter.js`.
   - Express'ten router'ı çağırın: `const router = express.Router();`.

3. Router ve Endpoint Tanımlama:
   - Router içinde farklı endpointlere ve HTTP metodlarına göre işlemler tanımlayın.
   - Örneğin, router.post('/signup', (req, res) => { ... }) ile POST isteğine göre signup işlemlerini tanımlayın.
   - İlgili işlemleri gerçekleştirip istemciye dönecek verileri `res` nesnesi ile gönderin.
   - Router'ı ana uygulamaya bağlamak için `app.use()` ile endpoint prefix'ini belirleyin (örn: '/users').

## Diğer Notlar

- `.env` dosyasında ortam değişkenlerini saklayın ve `dotenv.config()` ile kullanın.
- MongoDB bağlantısı için MongoDB Atlas kullanabilirsiniz.
- Express uygulamasını belirlediğiniz bir portta dinleyerek sunucu başlatın (örn: `app.listen(PORT, () => { ... })`).
- Models klasöründe veritabanı şemalarınızı tanımlayın ve bu şemaları modele çevirerek MongoDB ile etkileşime geçin.
- Routers klasöründe farklı endpointlere göre işlemleri tanımlayın ve bu routerları ana uygulamaya bağ
