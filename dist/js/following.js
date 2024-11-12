
function Post() {
    const input = document.getElementById("user-input");
    const inPost = document.getElementById("input-Post");
  
    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true, // Set to false for 24-hour format
    });
  
    if (input.value.trim() !== "") {
      const inPostElement = document.createElement("div");
      inPostElement.innerHTML = `<div class="w-[95%] m-auto border-b-2 flex gap-4  ">
              <div ><img src="icon/Jg_44NYE_400x400.jpg" alt="loading..." class="h-[40px] rounded-lg"></div>
              <div class="flex flex-col justify-center text-base">
                <div class="font">Web_Weavers</div>
                <div class="text-xs text-gray-400">${currentTime}</div>
                <div>${input.value} </div>
                <div class="flex gap-10 mt-4 mb-4">
                <div> <button class="like-btn"><i class="bi bi-heart"></i> </button> </div>
  
                  <div><i class="bi bi-chat-left-text"></i></div>
                  
                </div>
  
              </div>
            </div> `;
  
      inPost.prepend(inPostElement);
      input.value = "";
  
      const likeButton = inPostElement.querySelector(".like-btn");
      const likeIcon = likeButton.querySelector("i");
  
      likeButton.addEventListener("click", () => {
        if (likeIcon.classList.contains("bi-heart")) {
          likeIcon.classList.remove("bi-heart");
          likeIcon.classList.add("bi-heart-fill");
        } else {
          likeIcon.classList.remove("bi-heart-fill");
          likeIcon.classList.add("bi-heart");
        }
      });
    }
  }
  
  //Fetch and display existing posts
  fetch("./js/following.json")
    .then((response) => response.json())
    .then((posts) => displayPosts(posts))
    .catch((error) => console.error("Error fetching JSON: ", error));
  
  // Function to display posts
  function displayPosts(posts) {
    const postsContainer = document.getElementById("posted");
    postsContainer.innerHTML = ""; //clear previous posts
  
    posts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.innerHTML = ` <div class="w-[95%] m-auto border-b-2 flex gap-4 mt-4 mb-2 ">
              <div ><img src="${post.img}" alt="img" class="h-10 rounded-lg"></div>
              <div class="flex flex-col justify-center text-base">
                              <div class=""><button onclick="setUsernameSession('${post.username}')" class="username-btn"> ${post.username}</button></div>

                <div class="text-xs text-gray-400">${post.time} </div>
                <div>${post.text} </div>
                <div class="flex gap-10 mt-4 mb-4">
                  <div> <button class="like-btn"><i class="bi bi-heart"></i> </button> </div>
                  <div><i class="bi bi-chat-left-text"></i></div>
                  
                </div>
  
              </div>
            </div> `;
      postsContainer.appendChild(postElement);
  
      // Add event listener to the like button
      const likeButton = postElement.querySelector(".like-btn");
      const likeIcon = likeButton.querySelector("i");
  
      likeButton.addEventListener("click", () => {
        if (likeIcon.classList.contains("bi-heart")) {
          likeIcon.classList.remove("bi-heart");
          likeIcon.classList.add("bi-heart-fill");
        } else {
          likeIcon.classList.remove("bi-heart-fill");
          likeIcon.classList.add("bi-heart");
        }
      });
    });
  }
  
  
  function setUsernameSession(username) {
    // Store the username in session storage
    sessionStorage.setItem("selectedUsername", username);
    // Redirect to the user profile page
    window.location.href = "userProfile.html";
  }