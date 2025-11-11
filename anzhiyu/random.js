var posts=["posts/2025/hello-world/","posts/2025/readme/","posts/2025/pic-bed/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };