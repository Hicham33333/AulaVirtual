document.getElementById('post-comment-button').addEventListener('click', function () {
    const commentText = document.getElementById('new-comment').value;
    const userName = sessionStorage.getItem("usuario") || "Anónimo"; // Recupera el usuario o usa "Anónimo"

    if (commentText.trim() !== '') {
        const newComment = document.createElement('article');
        newComment.classList.add('media');

        const commentHTML = `
            <figure class="media-left">
                <p class="image is-64x64">
                    <img src="../Img/Header/fotoPerfil.png" />
                </p>
            </figure>
            <div class="media-content">
                <div class="content">
                    <p>
                        <strong>${userName}</strong> <!-- Aquí se coloca el nombre del usuario -->
                        <br />
                        ${commentText}
                        <br />
                        <small><a href="#">Like</a> · <a href="#">Reply</a> · Just now</small>
                    </p>
                </div>
            </div>
        `;

        newComment.innerHTML = commentHTML;

        const footer = document.querySelector('.footers');
        const commentArea = document.getElementById('new-comment');
        footer.insertBefore(newComment, commentArea.closest('article'));

        document.getElementById('new-comment').value = ''; // Limpia el área de texto
    }
});
