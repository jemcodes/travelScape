// LIKES/stamps AJAX

const stamp = async (e) => {
  try {
    const res = await fetch(`http://localhost:8080/article/${e.target.id}/stamps`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.stringify();

    const { stampNum } = data;
    //If Conditional to handle the state of the button. 
      // Dependent on stamped or unstamped state + or -
    document.querySelector('.stampImg').innerHTML = req.stampNum;
  }
  catch (e) {
    handleError(e)
  }
}

//Create button
placeHolderButton.addEventListener('click', async () => {
  await stamp
})

// Upvote Button Click
document.querySelector('stampImg').addEventListener('click', stamp);
