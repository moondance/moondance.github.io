var posts=["posts/2025/apple-id/","posts/2025/hello-world/","posts/2025/netfix-gongchang/","posts/2025/pic-bed/","posts/2025/readme/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };