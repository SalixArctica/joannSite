const yaml = require('js-yaml');
const fs = require('fs');

let db = {
  recipes:  [
    {
      id: 0,
      name: "Tacos De Carne",
      ingredients: ['meat', 'cheese', 'cilantro', 'flour tortillas'],
      instructions:  ["cook the meat", "cook the tortillas", "add your preffered toppings", "enjoy!"],
      image: "tacos.jpg",
      comments: [
        {
          user: {
            name: 'Hank Lancaster',
            picture: 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2241380282544816&height=50&width=50&ext=1531930493&hash=AeQtB7qdRmPrQqwh',
            id: '2241380282544816'
          },
          comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus velit libero, a consequat lacus dignissim nec. Sed efficitur ultricies turpis sed pulvinar. Nunc semper tortor et faucibus ultricies. Nulla non malesuada sapien, non viverra felis. Mauris hendrerit ipsum blandit ex volutpat, sit amet dictum ante molestie. In in aliquam risus, sed pellentesque nisl. Proin et eleifend libero. Cras laoreet, libero in luctus sodales, urna metus faucibus elit, lobortis tincidunt urna lectus vel est. Ut ut semper dui. Nunc eleifend eget metus eget ornare.',
        },
      ],
    },
  ],
  blogs: [
    {
      title: "Words n' stuff",
      date: "7/6/18",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus velit libero, a consequat lacus dignissim nec. Sed efficitur ultricies turpis sed pulvinar. Nunc semper tortor et faucibus ultricies. Nulla non malesuada sapien, non viverra felis. Mauris hendrerit ipsum blandit ex volutpat, sit amet dictum ante molestie. In in aliquam risus, sed pellentesque nisl. Proin et eleifend libero. Cras laoreet, libero in luctus sodales, urna metus faucibus elit, lobortis tincidunt urna lectus vel est. Ut ut semper dui. Nunc eleifend eget metus eget ornare. In rutrum auctor quam, vel accumsan quam. Donec sapien elit, ullamcorper id mollis a, pellentesque vitae elit.",
      id: 1,
      comments: [],
    },
    {
      title: "blog no. 2",
      date: '7/8/18',
      content: "To me, this is the best answer, because React doesn't have anything built in. You either have to import fetch or superagent or jQuery or axios or something else that is not part of vanilla React in order to do anything other than what is posted above.",
      id: 2,
      comments: [],
    }
  ],
  nextBlogId: 3,
  nextRecipeId: 1,
};

module.exports = db;
