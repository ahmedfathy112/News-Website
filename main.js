let apiKey = "78e82696e81b45aca23fa75797f7f379";
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
let latestSec = document.getElementById("latest-sec");
// latest news section
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    data.articles.forEach((article) => {
      const sourceName = article.source.name;
      const title = article.title;
      const image = article.urlToImage;
      const url = article.url;
      const description = article.description;
      const publishTime = article.publishedAt;

      latestSec.innerHTML += `
      <swiper-slide
      ><img src="${image}" alt="" />
      <div class="author">from: <span>${sourceName}</span>
      </div>
      <div class="author2">
           publish Time: <span>${publishTime}</span>
            </div>
      <a href="${url}" target= "_blank" class="news-link">  
            <div class="title">
              ${title}
            </div>
            </a>
            <div class="description">
              ${description}
            </div>
            </swiper-slide>
        `;
    });
  })
  .catch((error) => console.error("Error fetching data:", error));

//   sports news section
let sportsSec = document.getElementById("sports-sec");
const topic = "sports";
const apiUrl2 = `https://newsapi.org/v2/top-headlines?q=${encodeURIComponent(
  topic
)}&country=us&apiKey=${apiKey}`;

// استدعاء الوظيفة لجلب البيانات
fetch(apiUrl2)
  .then((response) => response.json())
  .then((data) => {
    // عمل لوب على البيانات المسترجعة
    data.articles.forEach((article) => {
      // استخراج البيانات المطلوبة
      const sourceNameSports = article.source.name;
      const titleSports = article.title;
      const imageSports = article.urlToImage;
      const urlSports = article.url;
      const descriptionSports = article.description;
      const publishTimeSports = article.publishedAt;

      sportsSec.innerHTML += `
      <div class="card">
          <img src="${imageSports}" alt="" />
          <h2 class="author">from :<span>${sourceNameSports}</span></h2>
          <p class="time">Puplish Time : ${publishTimeSports}</p>
          <a href="${urlSports}" target= "_blank" class="news-link">  
          <h2 class="title">
            ${titleSports}
          </h2>
          </a>
          <p class="description">
            ${descriptionSports}
          </p>
        </div>
      `;
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
// start tech news
const techSec = document.getElementById("tech-sec");
const topic2 = "tech";
const apiUrl3 = `https://newsapi.org/v2/top-headlines?q=${encodeURIComponent(
  topic2
)}&country=us&apiKey=${apiKey}`;

// استدعاء الوظيفة لجلب البيانات
fetch(apiUrl3)
  .then((response) => response.json())
  .then((data) => {
    // عمل لوب على البيانات المسترجعة
    data.articles.forEach((article) => {
      // استخراج البيانات المطلوبة
      const sourceNameTech = article.source.name;
      const titleTech = article.title;
      const imageTech = article.urlToImage;
      const urlTech = article.url;
      const descriptionTech = article.description;
      const publishTimeTech = article.publishedAt;

      techSec.innerHTML += `
      <div class="card">
          <img src="${imageTech}" alt="" />
          <h2 class="author">from :<span>${sourceNameTech}</span></h2>
          <p class="time">Puplish Time : ${publishTimeTech}</p>
          <a href="${urlTech}" target= "_blank" class="news-link">  
          <h2 class="title">
            ${titleTech}
          </h2>
          </a>
          <p class="description">
            ${descriptionTech}
          </p>
        </div>
      `;
    });
  })
  .catch((error) => console.error("Error fetching data:", error));

// start life sec
const lifeSec = document.getElementById("life-sec");
const topic3 = "life";
const apiUrl4 = `https://newsapi.org/v2/top-headlines?q=${encodeURIComponent(
  topic3
)}&country=us&apiKey=${apiKey}`;

// استدعاء الوظيفة لجلب البيانات
fetch(apiUrl4)
  .then((response) => response.json())
  .then((data) => {
    // عمل لوب على البيانات المسترجعة
    data.articles.forEach((article) => {
      // استخراج البيانات المطلوبة
      const sourceNameLife = article.source.name;
      const titleLife = article.title;
      const imageLife = article.urlToImage;
      const urlLife = article.url;
      const descriptionLife = article.description;
      const publishTimeLife = article.publishedAt;

      lifeSec.innerHTML += `
      <div class="card">
          <img src="${imageLife}" alt="" />
          <h2 class="author">from :<span>${sourceNameLife}</span></h2>
          <p class="time">Puplish Time : ${publishTimeLife}</p>
          <a href="${urlLife}" target= "_blank" class="news-link">  
          <h2 class="title">
            ${titleLife}
          </h2>
          </a>
          <p class="description">
            ${descriptionLife}
          </p>
        </div>
      `;
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
