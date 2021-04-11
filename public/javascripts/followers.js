document.addEventListener("DOMContentLoaded", (e) => {
  const followBtn = document.getElementById('followBtn');

  followBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const authorId = document.getElementById('authorId').value
    const res = await fetch(`/profiles/${authorId}/followers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })

    const isFollowed = await res.json();
    if (isFollowed === 'following') {
      followBtn.innerHTML = "Unfollow"
    } else {
      followBtn.innerHTML = "Follow"
    }
  })
})