function Search() {
  const userInput = document.getElementById("user-name");

  // Store the current value in sessionStorage
  sessionStorage.setItem("Username", userInput.value);
  sessionStorage.setItem("check", 1);

  // Reset the input field value
  userInput.value = ""; // This will make the placeholder appear again
  location.reload();
}


fetch("./js/userProfile.json")
  .then((response) => response.json())
  .then((profile) => displayprofile(profile))
  .catch((error) => console.error("Error fetching JSON: ", error));


function displayprofile(profile) {
  const profileContainer = document.getElementById("searched-profile");
  profileContainer.innerHTML = ""; // Clear previous profile

  const userName = sessionStorage.getItem("Username");
  // Filter profiles based on the selected username
  const selectedProfile = profile.filter((post) => post.username === userName);

  // Ensure the selectedProfile has data
  if (selectedProfile.length > 0) {
    selectedProfile.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.innerHTML = `<div class="h-20 mt-8 bg-[#303030] rounded-lg w-[30%]">
                  <div class="flex items-center gap-5 ml-4 pt-3" >
                    <div >
                    <img src="${post.img}" alt="" class="rounded-lg h-14 ">
                    </div>
                    <div class="text-lg">
                    <button onclick="setUsernameSession('${post.username}')">
                    ${post.username}
                    </button>
                    
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

//session variable for username
function setUsernameSession(username) {
  // Store the username in session storage
  sessionStorage.setItem("selectedUsername", username);
  // Redirect to the user profile page
  window.location.href = "userProfile.html";
}
