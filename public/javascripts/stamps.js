// LIKES/stamps AJAX

document.addEventListener("DOMContentLoaded", () => {

  const stamp = async (e) => {
    const articleId = parseInt(stampBtn.classList[0], 10)

    const stampImage = document.getElementById('like')
    const stampNum = document.getElementById('stamp-count')
    // stampNum.innerText = 2;
    let stampNumber = parseInt(stampNum.innerHTML, 10)

    // try {
    const res = await fetch(`/articles/${articleId}/stamps`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
    });

    const stamped = await res.json();
    if (!stamped.status) {
      stampImage.src = '/images/unlikedBW.jpg'
      stampNumber -= 1;
      stampNum.innerHTML = `${stampNumber} Stamps`
    } else {
      stampImage.src = '/images/liked.jpeg'
      stampNumber += 1;
      stampNum.innerHTML = `${stampNumber} Stamps`
      // console.log(Number.isInteger(stampNum))
    }
    // console.log(stamped.status)
  }

  const stampBtn = document.getElementById('like')

  stampBtn.addEventListener('click', async () => {
    // e.preventDefault();
    stamp();
  })

})
