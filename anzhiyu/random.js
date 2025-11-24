var posts=["posts/2025/about-blog/","posts/2025/apple-id/","posts/2025/hello-world/","posts/2025/netfix-gongchang/","posts/2025/cloudflare-speed-ip/","posts/2025/pic-bed/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };