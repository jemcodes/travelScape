// COMMENTS AJAX

window.addEventListener("DOMContentLoaded", (e) => {
  let commentBtn = document.getElementById('commentBtn')
  console.log(commentBtn)

  // line 47
  // let commentForm = document.getElementById('comment-form')
  // let commentFormData = new FormData(commentForm)
  // console.log(commentFormData)

  commentBtn.addEventListener('click', async (e) => {
    e.preventDefault();

    const articleId = document.getElementById('article-id').value
    // console.log(articleId)

    const comment = document.getElementById('commentBody');
    // console.log(comment.value)

    const res = await fetch(`https://localhost:8080/articles/${articleId}/comments`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment: comment.value })
    });
    // console.log("9741890-87654678908765467890876546789098765467890", res)
    const jsonRes = await res.json();
    // console.log("iahf**********************", jsonRes)
    const comments = document.getElementById('comments__container');
    let commentsHTML = [];
    const postedComments = Array.from(jsonRes);
    // console.log("OOooooooooooookasfkasdfoksdfko", postedComments)

    postedComments.forEach((comment) => {
      let HTML = `
      <div id='comments'>
        <div class='comment'>
          <p>${comment.comment}</p>
          <p class='comments__date'${comment.createdAt}</p>
        </div>
      </div>
      `
      commentsHTML.push(HTML)
    })
    comments.innerHTML = ""
    comments.innerHTML = commentsHTML.join('')
  })
})