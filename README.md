# Multi GroupBy

#### What it Does

Multi GroupBy is a special tool that lets you sort things into groups based on rules you decide. It's like sorting your crayons by color, but you can also sort the same crayon by size or shape at the same time if you want.

#### How to Get It

You can add Multi GroupBy to your project by downloading it:

```bash
npm install multi-groupby
```

#### A Simple Example

Imagine you have a list of fruits and you want to group them by color using a common method like `Object.groupBy`:

```js
const fruits = [
  { name: "apple", color: "red" },
  { name: "banana", color: "yellow" },
  { name: "strawberry", color: "red" }
];

const groupedByColor = Object.groupBy(fruits, fruit => fruit.color);
console.log(groupedByColor);

// Output:

{
  "red": [
    { "name": "apple", "color": "red" },
    { "name": "strawberry", "color": "red" }
  ],
  "yellow": [
    { "name": "banana", "color": "yellow" }
  ]
}

```

Here, each fruit can only belong to one color group.

#### Why Multi GroupBy Is Special

Multi GroupBy can do more than just simple sorting. It can put things in more than one group at the same time. Let's see how it works with a made-up story about users on a website:

#### Detailed Example

On a website, you might have different kinds of users like:

- Active Users: Users like Alice and Bob, who do lots of things on the website.
- Inactive Users: Someone like Dave who hasn't visited in a long time.
- Spam Accounts: Users like Eve who make lots of posts but don't really talk to anyone, or Dave who gets lots of complaints.
- Verified Users: Users like Alice and Charlie who have proved they are who they say they are.

#### Why Not Object.groupBy?

Using a common groupBy method, each user could only be in one group. You couldn't show that Alice is both active and verified, or that Dave is both inactive and a spam account.

#### How Multi GroupBy Solves This

Multi GroupBy lets each user be in all the groups they belong to. It understands complex situations and sorts everything just right, like magic. So, it's perfect when you need to sort things into more than one group at once.

#### Example:

```js

// Users data
const multiGroupBy = require("multi-groupby");

const users = [
  { name: "Alice", userID: "001", posts: 50, comments: 150, lastLogin: "2024-04-25", reports: 0, verified: true },
  { name: "Bob", userID: "002", posts: 40, comments: 130, lastLogin: "2024-04-20", reports: 0, verified: false },
  { name: "Dave", userID: "005", posts: 0, comments: 0, lastLogin: "2022-01-01", reports: 5, verified: false },
  { name: "Eve", userID: "003", posts: 300, comments: 0, lastLogin: "2024-04-15", reports: 25, verified: false },
  { name: "Charlie", userID: "004", posts: 30, comments: 90, lastLogin: "2024-04-18", reports: 1, verified: true }
];


// Logic

function classifyUser(user) {
  const groups = [];
  const today = new Date();
  const lastLogin = new Date(user.lastLogin);
  const daysSinceLastLogin = (today - lastLogin) / (1000 * 3600 * 24);

  if (user.posts > 30 && user.comments > 100) groups.push("Active Users");
  if (daysSinceLastLogin > 365) groups.push("Inactive Users");
  if (user.reports > 3) groups.push("Spam Accounts");
  if (user.verified) groups.push("Verified Users");

  return groups;
}

const allPossibleGroups = ["Active Users", "Inactive Users", "Spam Accounts", "Verified Users"];
const groupedUsers = multiGroupBy(users, allPossibleGroups, classifyUser);
console.log(groupedUsers);

// Output

{
  "Active Users": [
    { "name": "Alice", "userID": "001", "posts": 50, "comments": 150 },
    { "name": "Bob", "userID": "002", "posts": 40, "comments": 130 }
  ],
  "Inactive Users": [
    { "name": "Dave", "userID": "005", "posts": 0, "comments": 0, "lastLogin": "2022-01-01" }
  ],
  "Spam Accounts": [
    { "name": "Eve", "userID": "003", "posts": 300, "comments": 0, "reports": 25 },
    { "name": "Dave", "userID": "005", "posts": 0, "comments": 0, "reports": 5 }
  ],
  "Verified Users": [] // since there are no "Verified Users"
}
```

In this way, Multi GroupBy allows users to be sorted into multiple groups based on multiple criteria, providing a flexible and powerful tool for data organization that cannot be achieved with standard Object.groupBy methods.
