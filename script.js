// Api call
async function start() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    return data;
  } catch (e) {
    console.log("problem!");
  }
}

// Button click function
var btnClick = async () => {
  const data = await start();
  document.getElementById("quoteText").innerHTML = `"${data.content}"`;
  document.getElementById("quoteAuthor").innerHTML = `${data.author}`;
};
