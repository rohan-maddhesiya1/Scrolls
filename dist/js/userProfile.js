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

const user = sessionStorage.getItem("selectedUsername");
console.log(user);

fetch("./js/userProfile.json")
    .then((response) => response.json())
    .then((profile) => displayprofile(profile))
    .catch((error) => console.error("Error fetching JSON: ", error));

function displayprofile(profile) {
    const profileContainer = document.getElementById("posted");
    profileContainer.innerHTML = ""; // Clear previous profile

    // Filter profiles based on the selected username
    const selectedProfile = profile.filter(post => post.username === user);

    // Ensure the selectedProfile has data
    if (selectedProfile.length > 0) {
        selectedProfile.forEach((post) => {
            const postElement = document.createElement("div");
            postElement.innerHTML = `
                <div class="h-56 flex mt-5 mb-10 justify-around gap-1 ">
                    <div class="w-[50%]">
                        <div class="font-itim text-2xl ">
                            ${post.name}
                        </div>
                        <div class="font-itim mt-1">
                            @${user}
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
                                <span class="text-white ml-2">
                                    ${post.following}
                                </span>
                                Following
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center mb-5">
                        <div>
                            <img class="rounded-full" src="${post.img}" height="144" width="144" alt="profile.img">
                        </div>
                    </div>
                </div>
            `;
            profileContainer.appendChild(postElement);
        });
    } else {
        // No profile found for the selected username
        profileContainer.innerHTML = `<p>No profile found for ${user}</p>`;
    }
}


fetch("./js/userProfile.json")
  .then((response) => response.json())
  .then((posts) => displayPosts(posts))
  .catch((error) => console.error("Error fetching JSON: ", error));

// Function to display posts
function displayPosts(posts) {
  const postsContainer = document.getElementById("posts_slide");
  postsContainer.innerHTML = ""; //clear previous posts

  const selectedProfile = posts.filter((post) => post.username === user);

  if (selectedProfile.length > 0) {
    selectedProfile.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.innerHTML = ` <div class="w-[95%] m-auto border-b-2 flex gap-4 mt-4 mb-2 ">
            <div ><img src="${post.img}" alt="loading..." class="h-10 rounded-lg"></div>
            <div class="flex flex-col justify-center text-base">
              <div class="">${post.username}</div>
              <div class="text-xs text-gray-400">${post.posts.post1.time} </div>
              <div>${post.posts.post1.content} </div>
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


// follow button
const followButton = document.getElementById("followButton");

    // Toggle follow/following text on button click
    followButton.addEventListener("click", function() {
        if (followButton.innerText === "Follow") {
            followButton.innerText = "Following";
              // Change to 'Following'
              // Optional: Remove hover effect
        } else {
            followButton.innerText = "Follow";  // Change back to 'Follow'
          // Optional: Add hover effect back
        }
    });