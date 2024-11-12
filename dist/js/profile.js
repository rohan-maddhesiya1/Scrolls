function changeBorder(element) {
    // Remove the 'border-purple-400' class from all buttons
    document.querySelectorAll('.border-b-2').forEach(button => {
        button.classList.remove('border-purple-400');
        button.classList.add('border-transparent');
    });

    // Add 'border-purple-400' to the clicked button
    element.classList.add('border-purple-400');
    element.classList.remove('border-transparent');
}



fetch("./js/profile.json")
    .then((response) => response.json())
    .then((profile) => displayprofile(profile))
    .catch((error) => console.error("Error fetching JSON: ", error));

function displayprofile(profile) {
    const profileContainer = document.getElementById("posted");
    profileContainer.innerHTML = ""; // Clear previous profile

    profile.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.innerHTML = `
                <div class="h-56 flex mt-5 justify-around gap-1">
            <div class="w-[50%]">
                <div class="font-itim text-2xl ">
                    ${post.name}
                </div>
                <div class="font-itim mt-1">
                    @${post.username}
                </div>
                <div class="font-itim mt-2 h-24 text-lg">
                    ${post.bio}
                </div>
                <div class="flex space-x-16 ">
                    <div class="text-gray-300">
                        <span class="text-white">
                            ${post.followers}
                        </span>
                        Followers
                    </div>
                    <div class="text-gray-300">
                    <span class="text-white">
                        ${post.following}
                    </span>
                    Following
                    </div>
                </div>

            </div>

            <div class="flex items-center mb-5">
                <div >
                    <img class="rounded-full h-36" src="${post.img}" alt="profile.img">
                </div>
            </div>

        </div>
        `;
        profileContainer.appendChild(postElement);
    });
}


// posts by default

fetch("./js/post.json")
    .then((response) => response.json())
    .then((posts) => displayPosts(posts))
    .catch((error) => console.error("Error fetching JSON: ", error));

// Function to display posts
function displayPosts(posts) {
    const postsContainer = document.getElementById("posts_slide");
    postsContainer.innerHTML = ""; //clear previous posts

    posts.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.innerHTML = ` <div class="w-[95%] m-auto border-b-2 flex gap-4 mt-4 mb-2 ">
            <div ><img src="${post.img}" alt="loading..." class="h-10 rounded-lg"></div>
            <div class="flex flex-col justify-center text-base">
              <div class="">${post.username}</div>
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

// posts by buttons


function posts(){
    fetch("./js/post.json")
    .then((response) => response.json())
    .then((posts) => displayPosts(posts))
    .catch((error) => console.error("Error fetching JSON: ", error));

// Function to display posts
function displayPosts(posts) {
    const postsContainer = document.getElementById("posts_slide");
    postsContainer.innerHTML = ""; //clear previous posts

    posts.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.innerHTML = ` <div class="w-[95%] m-auto border-b-2 flex gap-4 mt-4 mb-2 ">
            <div ><img src="${post.img}" alt="loading..." class="h-10 rounded-lg"></div>
            <div class="flex flex-col justify-center text-base">
              <div class="">${post.username}</div>
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
}

// reposts by button

function re_posts(){
    fetch("./js/re_post.json")
    .then((response) => response.json())
    .then((posts) => displayPosts(posts))
    .catch((error) => console.error("Error fetching JSON: ", error));

// Function to display posts
function displayPosts(posts) {
    const postsContainer = document.getElementById("posts_slide");
    postsContainer.innerHTML = ""; //clear previous posts

    posts.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.innerHTML = ` <div class="w-[95%] m-auto border-b-2 flex gap-4 mt-4 mb-2 ">
            <div ><img src="${post.img}" alt="loading..." class="h-10 rounded-lg"></div>
            <div class="flex flex-col justify-center text-base">
              <div class="">${post.username}</div>
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
}


// replies by button

function replies(){
    fetch("./js/replies.json")
    .then((response) => response.json())
    .then((posts) => displayPosts(posts))
    .catch((error) => console.error("Error fetching JSON: ", error));

// Function to display posts
function displayPosts(posts) {
    const postsContainer = document.getElementById("posts_slide");
    postsContainer.innerHTML = ""; //clear previous posts

    posts.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.innerHTML = ` <div class="w-[95%] m-auto border-b-2 flex gap-4 mt-4 mb-2 ">
            <div ><img src="${post.img}" alt="loading..." class="h-10 rounded-lg"></div>
            <div class="flex flex-col justify-center text-base">
              <div class="">${post.username}</div>
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
}