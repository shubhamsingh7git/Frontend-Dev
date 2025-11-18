const btn = document.getElementById("load");
const output = document.getElementById("output");

function loadProfile() {
  return new Promise((resolve, reject) => {
    const fail = Math.random() < 0.3;
    setTimeout(() => fail ? reject("Profile Failed") : resolve("Profile Loaded"), 2000);
  });
}

function loadPosts() {
  return new Promise((resolve, reject) => {
    const fail = Math.random() < 0.3;
    setTimeout(() => fail ? reject("Posts Failed") : resolve("Posts Loaded"), 1500);
  });
}

function loadMessages() {
  return new Promise((resolve, reject) => {
    const fail = Math.random() < 0.3;
    setTimeout(() => fail ? reject("Messages Failed") : resolve("Messages Loaded"), 1000);
  });
}

btn.addEventListener("click", async () => {
  output.textContent = "";
  const start = Date.now();

  const results = await Promise.allSettled([
    loadProfile(),
    loadPosts(),
    loadMessages()
  ]);

  results.forEach((res, idx) => {
    const name = ["Profile", "Posts", "Messages"][idx];
    if (res.status === "fulfilled") output.textContent += name + ": " + res.value + "\n";
    else output.textContent += name + ": " + res.reason + "\n";
  });

  const end = Date.now();
  output.textContent += "\nTotal time: " + (end - start) + " ms";
});
