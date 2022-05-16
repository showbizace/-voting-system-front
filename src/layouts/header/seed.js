import image1 from "../../../public/static/images/products/s2.jpg";
import image2 from "../../../public/static/images/products/s10.jpg";
import image3 from "../../../public/static/images/products/s4.jpg";
import image4 from "../../../public/static/images/products/s11.jpg";

import img1 from "../../../public/static/images/users/1.jpg";
import img2 from "../../../public/static/images/users/2.jpg";
import img3 from "../../../public/static/images/users/3.jpg";
import img4 from "../../../public/static/images/users/4.jpg";

if (typeof window !== "undefined") {
  console.log(img1);
  window.Seed = (function () {
    function generateVoteCount() {
      return Math.floor(Math.random() * 50 + 15);
    }

    const products = [
      {
        id: 1,
        title: "好坏参半",
        description: "高尚或心不在焉？你决定。",
        profileUrl: "#",
        disscuss: image1,
        votes: generateVoteCount(),
        author: "巴特请格乐",
        avatar: img3,
      },
      {
        id: 2,
        title: "red powder",
        description: "what do you think about this two beauty.",
        profileUrl: "#",
        disscuss: image2,
        votes: generateVoteCount(),
        author: "梦瑶",
        avatar: img1,
      },
      {
        id: 3,
        title: "锡箔纸：量身定制的锡箔纸帽子",
        description: "我们已经有了您的尺寸和送货地址。",
        profileUrl: "#",
        disscuss: image3,
        votes: generateVoteCount(),
        author: "可欣",
        avatar: img2,
      },
      {
        id: 4,
        title: "Supermajority: The Fantasy Congress League",
        description:
          "Earn points when your favorite politicians pass legislation.",
        profileUrl: "#",
        disscuss: image4,
        votes: generateVoteCount(),
        author: "john the cool man",
        avatar: img4,
      },
    ];
    return { products: products };
  })();
}
