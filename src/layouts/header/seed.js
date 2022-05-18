import image1 from "../../../public/static/images/products/s2.jpg";
import image2 from "../../../public/static/images/products/s9.jpg";
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
        title: "5年内致富的现实方法有哪些？",
        description:
          "我们当中没有一个人会拒绝积累大量财富的可能性。不是因为我们贪婪或物质主义，而是因为唯一比有钱更好的是，嗯，有更多的钱。数十人回答了这个问题，其中包括百万富翁、投资者、TIME 年度人物和其他随机互联网类型的受访者中，大多数人建议选择节俭和投. ",
        profileUrl: "#",
        disscuss: image1,
        votes: 16,
        author: "巴特请格乐",
        posted: " 1 天前",
        avatar: img3,
      },
      {
        id: 2,
        title: "What does it feel like to take DMT or 5-MeO-DMT?",
        description:
          "what do you think Rather than discuss this, we’ll simply present a quote from Bob Wallace, one of Microsoft’s original 10 employees, that someone posted in the thread, and which we feel pretty much sums up the entire contents of every other response:“Ayahuasca is like a bus tour of Paris museums for several hours. ",
        profileUrl: "#",
        disscuss: image2,
        votes: -1,
        author: "梦瑶",
        posted: "1 年前",
        avatar: img1,
      },
      {
        id: 3,
        title: "死后还有生命吗？",
        description:
          "老实说，我们不知道这里发生了什么，但我们目前正在阅读每一个字。上帝？是你吗大神真的，这条线贯穿了一切。死后的医疗辅助生活，死后的精神和宗教生活，对此事的科学讨论，以及对一个人死后几小时的字面意义的可怕尴尬和病态的描述。韦尔普。那事发生了。",
        profileUrl: "#",
        disscuss: image3,
        votes: 100,
        author: "可欣",
        posted: "12 分钟前",
        avatar: img2,
      },
      {
        id: 4,
        title: "What are some books that will expand our mind?",
        description:
          "This is one of our favorite questions on Quora, but it should also be noted that we’re pretty big book dorks. Mostly non-fiction with some glimmering specks of fiction gold, the master list of books compiled here will do things like teach you how to eat right.",
        profileUrl: "#",
        disscuss: image4,
        votes: 10,
        author: "john the cool man",
        posted: "1 个月前",
        avatar: img4,
      },
    ];
    return { products: products };
  })();
}
