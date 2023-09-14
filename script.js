// Array para armazenar postagens
let posts = [];

// Função para criar uma postagem
function createPost() {
  const postText = document.getElementById('post-text').value;
  const postImageInput = document.getElementById('post-image');
  const postImage = postImageInput.files[0];

  if (!postText && !postImage) {
    alert('Digite algo ou selecione uma imagem para postar.');
    return;
  }

  const postElement = document.createElement('div');
  postElement.classList.add('post');
  postElement.innerHTML = `
    <p>${postText}</p>
    <img src="${postImage ? URL.createObjectURL(postImage) : ''}" alt="Imagem da postagem">
    <button onclick="likePost(this)">Curtir</button>
    <button onclick="addComment(this)">Comentar</button>
    <span class="likes">0 curtidas</span>
    <div class="comments"></div>
  `;

  const postList = document.getElementById('post-list');
  postList.appendChild(postElement);

  // Limpar o formulário
  document.getElementById('post-text').value = '';
  postImageInput.value = '';

  // Armazenar a postagem no array (simulado)
  posts.push({
    text: postText,
    image: postImage ? URL.createObjectURL(postImage) : '',
    likes: 0,
    comments: [],
  });
}
