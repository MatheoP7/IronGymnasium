document.addEventListener("DOMContentLoaded", () => {
  fetch('../json/noticias.json')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
        console.log(data);
          const noticiasDiv = document.getElementById('noticias');
          data.forEach(noticia => {
              const noticiaElement = document.createElement('div');
              noticiaElement.classList.add('noticia');

              const headline = document.createElement('h2');
              headline.textContent = noticia.headline;
              noticiaElement.appendChild(headline);

              const author = document.createElement('p');
              author.textContent = `Por: ${noticia.author}`;
              noticiaElement.appendChild(author);

              const date = document.createElement('p');
              date.textContent = `Fecha: ${noticia.date}`;
              noticiaElement.appendChild(date);

              const content = document.createElement('p');
              content.textContent = noticia.content;
              noticiaElement.appendChild(content);

              if (noticia.images && noticia.images.length > 0) {
                  const image = document.createElement('img');
                  image.src = noticia.images[0].url;
                  image.alt = noticia.images[0].caption;
                  noticiaElement.appendChild(image);

                  const caption = document.createElement('p');
                  caption.textContent = noticia.images[0].caption;
                  noticiaElement.appendChild(caption);
              }

              const location = document.createElement('p');
              location.textContent = `Ubicación: ${noticia.location}`;
              noticiaElement.appendChild(location);

              const categories = document.createElement('p');
              categories.textContent = `Categorías: ${noticia.categories.join(', ')}`;
              noticiaElement.appendChild(categories);

              if (noticia.related_articles && noticia.related_articles.length > 0) {
                  const relatedArticles = document.createElement('div');
                  relatedArticles.innerHTML = '<h3>Artículos relacionados:</h3>';
                  noticia.related_articles.forEach(article => {
                      const articleLink = document.createElement('a');
                      articleLink.href = article.url;
                      articleLink.textContent = article.headline;
                      relatedArticles.appendChild(articleLink);
                      relatedArticles.appendChild(document.createElement('br'));
                  });
                  noticiaElement.appendChild(relatedArticles);
              }

              noticiasDiv.appendChild(noticiaElement);
          });
      })
      .catch(error => {
          console.error('There has been a problem with your fetch operation:', error);
      });
});
