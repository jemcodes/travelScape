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

  // let commentsHTML = [];
  // const postedComments = Array.from(jsonRes);
  const commentsContainer = document.getElementById('comments__container')
  const eachComment = document.createElement('div');
  const userContainer = document.createElement('div')
  const commentContainer = document.createElement('div')
  const dateContainer = document.createElement('div')
  const newComment = document.createElement('p');
  const newUser = document.createElement('p');
  const newDate = document.createElement('p');
  
  eachComment.setAttribute('id', 'each-comment');
  userContainer.classList.add('comments__author');
  commentContainer.classList.add('comments__content');
  dateContainer.classList.add('comments__date');
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
  userContainer.appendChild(newUser)
  commentContainer.appendChild(newComment)
  dateContainer.appendChild(newDate)
  eachComment.appendChild(userContainer);
  eachComment.appendChild(commentContainer);
  eachComment.appendChild(dateContainer);

  commentsContainer.prepend(eachComment);


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
