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
      stampImage.src = 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Swedish_stamp_1886_10_%C3%96re_POST.054078.jpg'
      stampNumber -= 1;
      stampNum.innerHTML = `${stampNumber} Stamps`
    } else {
      stampImage.src = 'https://www.syracuse.com/resizer/iTVUStx297EuY1A26zkFyUMPtH8=/1280x0/smart/arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/KJK724T5GBFZHMUUF7EVRWXLZE.png'
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
