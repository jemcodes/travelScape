// COMMENTS AJAX

// window.addEventListener(""), (e) => {

let commentBtn = document.getElementById('commentBtn')
// console.log(commentBtn)

// line 47
// console.log(commentFormData)

commentBtn.addEventListener('click', async (e) => {
  e.preventDefault();

  const articleId = document.getElementById('article-id').value
  // console.log(articleId)
  // const comment = document.getElementById('commentBody');
  // console.log(comment.value)

  let commentForm = document.getElementById('comment-form')
  let commentFormData = new FormData(commentForm)

  // debugger
  const body = { comment: commentFormData.get('comment'), _csrf: commentFormData.get('_csrf') }

  // console.log("hello", body)
  // console.log("9741890-87654678908765467890876546789098765467890", res)
  // const jsonRes = await res.json();
  // console.log("iahf**********************", jsonRes)
  const commentsDiv = document.getElementById('comments__container');
  // let commentsHTML = [];
  // const postedComments = Array.from(jsonRes);
  const largeContainer = document.getElementById('comments__container')
  const smallContainer = document.createElement('div')
  const newComment = document.createElement('p');
  const newUser = document.createElement('p');
  const newDate = document.createElement('p');

  // newComment.appendChild(body.comment);
  // comments.appendChild(newComment)
  // commentsDiv.prepend(newComment)

  // console.log(commentsDiv.innerHTML)

  const res = await fetch(`/articles/${articleId}/comments`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body)
  });

  const response = await res.json()

  newUser.innerHTML = response.user.pen_name
  newComment.innerHTML = body.comment
  newDate.innerHTML = response.elements.createdAt

  // console.log(largeContainer)
  smallContainer.appendChild(newUser)
  smallContainer.appendChild(newComment)
  smallContainer.appendChild(newDate)

  largeContainer.prepend(smallContainer)


  // console.log(response)

  // console.log("OOooooooooooookasfkasdfoksdfko", postedComments)

  // postedComments.forEach((comment) => {
  //   let HTML = `
  //     <div id='comments'>
  //       <div class='comment'>
  //         <p>${comment.comment}</p>
  //         <p class='comments__date'${comment.createdAt}</p>
  //       </div>
  //     </div>
  //     `
  //   commentsHTML.push(HTML)
  // })

  // comments.innerHTML = ""
  // comments.innerHTML = commentsHTML.join('')

})
