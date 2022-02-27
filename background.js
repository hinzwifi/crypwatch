// chrome.omnibox.onInputStarted.addListener((text) => {
//   // Encode user input for special characters , / ? : @ & = + $ #
//   // var newURL =
//   //   "https://api.coingecko.com/api/v3/search?query=" + encodeURIComponent(text);
//   chrome.tabs.create({ url: "https://hinzwifi.xyz" });
// });
chrome.omnibox.onInputStarted.addListener((text) => {
  // Encode user input for special characters , / ? : @ & = + $ #
  // var newURL =
  //   "https://api.coingecko.com/api/v3/search?query=" + encodeURIComponent(text);
  chrome.tabs.create({ url: "https://hinzwifi.xyz" });
});
// chrome.omnibox.onInputEntered.addListener((text) => {
//   // Encode user input for special characters , / ? : @ & = + $ #
//   // var newURL =
//   //   "https://api.coingecko.com/api/v3/search?query=" + encodeURIComponent(text);
//   chrome.tabs.create({ url: "https://hinzwifi.xyz" });
// });
