// let color = '#3aa757';

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({ color });
//   console.log('Default background color set to %cgreen', `color: ${color}`);
// });

// function main() {
//   console.log('main.user.js')
//   addListeners();

//   document.addEventListener('ready', function (e) {
//     console.log('document ready');
//     addListeners();

//   });
// }

// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {

//   if (changeInfo.status == 'complete' && tab.active) {
//     // do your things
//     chrome.scripting.executeScript({
//       target: { tabId: tab.id },
//       function: main,
//     });
//   }

// });
