fetch("./js/noti.json")
  .then((response) => response.json())
  .then((posts) => displayPosts(posts))
  .catch((error) => console.error("Error fetching JSON: ", error));

function displayPosts(posts) {
  const postsContainer = document.getElementById("posted");
  postsContainer.innerHTML = ""; // Clear previous posts

  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.innerHTML = `
        <div class="w-[95%] m-auto border-b-2 rounded-sm flex gap-4 mt-4">
          <div class = "mb-4"><img src="${post.img}" alt="loading..." class="h-10 rounded-lg"></div>
          <div class="flex gap-10 justify-between items-center w-full text-base mb-4">
            <div>
            <span class = "text-lg text-gray-300">
                          <button onclick="setUsernameSession('${post.username}')" class="username-btn"> ${post.username}</button>

            </span> &nbsp;
            <span class = "">
            ${post.text}
            </span> 
            <span class=" text-xs text-right text-gray-400 ml-2">
             ${post.time} ago</span>
            </div>

            
          </div>
        </div>`;
    postsContainer.appendChild(postElement);
  });
}

function setUsernameSession(username) {
  // Store the username in session storage
  sessionStorage.setItem("selectedUsername", username);
  // Redirect to the user profile page
  window.location.href = "userProfile.html";
}
