import './nlab'

// import ext from "./utils/ext";

// var extractTags = () => {
//   var url = document.location.href;
//   console.log(url)
//   if(!url || !url.match(/^http/)) return;

//   var data = {
//     title: "",
//     description: "",
//     url: document.location.href
//   }

//   var ogTitle = document.querySelector("meta[property='og:title']");
//   if(ogTitle) {
//     data.title = ogTitle.getAttribute("content")
//   } else {
//     data.title = document.title
//   }
//   data.title='yo this changed'

//   var descriptionTag = document.querySelector("meta[property='og:description']") || document.querySelector("meta[name='description']")
//   if(descriptionTag) {
//     data.description = descriptionTag.getAttribute("content")
//   }

//   return data;
// }

// function onRequest(request, sender, sendResponse) {
//   if (request.action === 'process-page') {
//     sendResponse(extractTags())
//   }
// }

// ext.runtime.onLoad = () => console.log('bam')
// ext.runtime.onMessage.addListener(onRequest);