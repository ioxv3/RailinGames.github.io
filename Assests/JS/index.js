var says = [
  "كلعسل",
  "ههههههههههههههههههه",
  "احبك",
  "كلموز",
  "ليش انت مزز؟",
  "شحالك؟",
  "حقوقي لا تسرقه ياجلب",
  "قول ها",
  "مياو",
  "لا لا ",
  "شو تشوف ",
  "فديتك",
  "بييبي",
  "لا يزخك الاستاذ",
  "the person who made this websites pretty cool", 
  "what day is it?", 
  "fortnite battl pass", 
  "i made this on the weekend :((((",
  "hiiii aiden :)",
  "i hate myself",
  "انا احب  💅",
  "amog",
  "💀",
  "hey e-kitten",
];

function splashText() {
  document.querySelector(".Index-SplashText").innerHTML =
    says[Math.floor(Math.random() * says.length)];
}

document.addEventListener("DOMContentLoaded", (event) => {
  splashText();

  fetch("https://ipv4.wtfismyip.com/json")
    .then((response) => response.json())
    .then((data) => {
      ipAddress = data.YourFuckingIPAddress;
      says.push(`umm your ip: ${ipAddress}`);
      splashText();
    });
});
