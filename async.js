const urlText = async() => {
  let answer = await fetch("https://jsonplaceholder.typicode.com/posts")
  console.log(answer);
  let results = await answer.json();
  console.log(results[10].body);
};

urlText();