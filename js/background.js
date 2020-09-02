
// async function pushStorage(url) {
//
//     let urls = [];
//     let storage = await storageGet("key-url");
//     if (Array.isArray(storage)) {
//         storage.push(url);
//         urls = storage;
//     } else {
//         urls.push(url)
//     }
//     storageSet({key: "key-url", value: urls});
//     chrome.extension.sendMessage(new ExtensionMessage("storageIsComplete", true));
// }


//Hint chrome.extension.sendMessage(new ExtensionMessage({{context}}, {{data}} ));
//Hint sendPageMessage() for content_scripts. Find it in core.js

