// LIKES/stamps AJAX

const stamp = async (e) => {
  try {
    const res = await fetch(`http://localhost:8080/article/${e.target.id}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(),
    });
    const data = await res.stringify();

    const { stampNum } = data;
    document.querySelector('.stampImg').innerHTML = req.stampNum;
  }
  catch (e) {
    handleError(e)
  }
}

// Upvote Button Click
document.querySelector('stampImg').addEventListener('click', stamp);
