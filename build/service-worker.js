"use strict";var precacheConfig=[["/7b00f7c4e78ed9cfc676c64c040965e8.svg","7b00f7c4e78ed9cfc676c64c040965e8"],["/8b13bad9e9381c9866a96fc4ef728bbf.svg","8b13bad9e9381c9866a96fc4ef728bbf"],["/d59729439a203fc474f5677b8d18d8bb.css","d59729439a203fc474f5677b8d18d8bb"],["/index.html","774eb8e96f2815fb2debfda9a53851cc"],["/static/css/main.a5181ee8.css","a5181ee8f9a956afb14649e5485e9862"],["/static/js/About.6502fa03.chunk.js","ac17eb6dcf04b00aebfb5371192c3ef5"],["/static/js/Account.d390aa65.chunk.js","87d74cb876d6ad02722f880a9e2e6110"],["/static/js/Accounts.b3178245.chunk.js","ac7ff920c8eb6042e95027d86e412ba4"],["/static/js/AddSignatureModal.0710d733.chunk.js","622eed76c87a92bedc2f80ca3b7bba33"],["/static/js/CopyrightAsync.af2c4b12.chunk.js","c9dd85d29756d72fb087041a760dbaed"],["/static/js/DemoAsync.afafd91a.chunk.js","128d6e07c082de61e9c8c7e945c839e0"],["/static/js/FaqAsync.30ca4fb0.chunk.js","1e4cab446e00f22afca02d012d97f6d0"],["/static/js/Foundation.f4c2263b.chunk.js","b180a86ebf33d47362b7b5513c871536"],["/static/js/LedgerHelp.4fb8e850.chunk.js","89aaf133e03cd4de00a2a21c9128a8c1"],["/static/js/Live.4b26fbf0.chunk.js","661ee3af72bc5abdbc6a4ce4e42dbcd8"],["/static/js/Markets.099af85c.chunk.js","d0ac3f5fe3957173e473f8d87ab07e59"],["/static/js/MyToken.fbae98ed.chunk.js","6a0d94cfd50d5cd248aa7f4d1116112d"],["/static/js/NodeMap.4f384eb1.chunk.js","b3a8368573a8713ad2aacb9539f4f702"],["/static/js/NodeTester.064e14ba.chunk.js","257aac310ff29f4d3c59923bcb388a14"],["/static/js/Nodes.79e4aa6c.chunk.js","a57e5a207fb0d7d5c3542fceeaa5a15d"],["/static/js/ProposalDetail.edf8d0cc.chunk.js","4be32e07796cd8e49c8113e24a688a8d"],["/static/js/Recaptcha.37e64ebd.chunk.js","228a1b5c6cf9a4b4022529240a61443f"],["/static/js/Representatives.47635c9c.chunk.js","68b8afff0f07515377ace1a271c9bcae"],["/static/js/SingleStats.3b419c5e.chunk.js","119eaa0f6ba5b91b3ae119e0e64ab53a"],["/static/js/Stats.b575ea5e.chunk.js","b9b9161ec028acedce2cfc5ad6ce1478"],["/static/js/System.a0350354.chunk.js","2c46dc99cf133ad139ce76741f01e68d"],["/static/js/TRONRating.345ea6f1.chunk.js","dce6233d8e0c1aaf720c6a51ff207dfa"],["/static/js/Token20Detail.1d5f5538.chunk.js","2dc364156821eeae2e8cea7ba89931f3"],["/static/js/TokenDetail.1fd5d86f.chunk.js","7823e07e861ff2a9bd50a3a0c55f5907"],["/static/js/TokenList.0403dfaf.chunk.js","e6ee8bd79983613de70ff63eb544e1c9"],["/static/js/TokenOverview.55628f78.chunk.js","a10cc52b22d9d9653d61bddfb4b69c88"],["/static/js/TokensCreate.132b24b9.chunk.js","6ddf4ff265268591fcfc50321bc08749"],["/static/js/TransactionViewer.0234023d.chunk.js","170c3dd14e1db8e06a366f013162bab0"],["/static/js/TronConvertTool.bc6da87f.chunk.js","2bffb3b89862dd4a377e51c8e2ba55fd"],["/static/js/VerifyContractCode.0342138d.chunk.js","3bbdffee866b8be45aa146f573e1cbe3"],["/static/js/VoteLive.792e66de.chunk.js","f728203cb4a5f6def9db1d0a0d916bec"],["/static/js/VoteOverview.92ca4e7f.chunk.js","7d58c7e01730cf23acc0388f49d460c1"],["/static/js/WalletWizard.40300533.chunk.js","ffb485d624930b91acd7d209955592bb"],["/static/js/languages.6c92d08d.chunk.js","4b5d70f81ae85fdfc8532cf608539873"],["/static/media/24-Hour-Trading-Volume.b6ff215b.png","b6ff215bf5f0aebd6b58958080cdcbd2"],["/static/media/Average-Price.fca4d71b.png","fca4d71be7241d47120526018a10627c"],["/static/media/Block-Producer-Chart.3369eae3.png","3369eae3be12bbc8cfa93b5f675a170b"],["/static/media/TRON-Total-Transactions-Chart.808c936d.png","808c936d7faf873d6f7bdef02cca79b1"],["/static/media/TRON-Transaction-Chart.d7082974.png","d7082974424f4bc3e44e9dba6edb282e"],["/static/media/Tron_windows.94ccda4d.png","94ccda4d4801dbece6b610ced1ae16a6"],["/static/media/bg.a3f601ba.png","a3f601ba1d20a9522980378a300708b2"],["/static/media/body_backgound-white.a18ae158.png","a18ae158acf2923f618b8ef91740cdd4"],["/static/media/body_backgound.517ff6bb.png","517ff6bbbcaeefbf53f4135b219ee057"],["/static/media/body_backgound_dark_theme_transparent.4aca17ac.png","4aca17ac334423634d645e1cfd0cbf8b"],["/static/media/body_backgound_transparent.8d0012fe.png","8d0012fe4f8173d9411ae10cb5da705a"],["/static/media/body_backgound_tronblue_transparent.8ca26328.png","8ca263287efd76a4ff3ec6091266215b"],["/static/media/item1.b7cf0d9a.png","b7cf0d9a2f9717166587f285871ae7da"],["/static/media/ledger-nano-s.6dae0eea.png","6dae0eeafd2940037b88b832fb75a18d"],["/static/media/mian_bg_left.e18dd834.png","e18dd8348ad1f7ad334be20f7cd450bf"],["/static/media/mian_bg_right.a58601c0.png","a58601c086ca9ccd0a434b81a1b294b7"],["/static/media/pic1.218f21f2.png","218f21f25cf7505fe5bda694ca4ad34b"],["/static/media/pic2.6517f3f5.png","6517f3f54314699bdb83329b47be2880"],["/static/media/pic3.a5cce023.png","a5cce02330b4115778020e2fba1b508b"],["/static/media/pic4.72962608.png","72962608c39b69d163428f32e319e33c"],["/static/media/pic5.5ef86e2a.png","5ef86e2a385948c503c5cf98cfc2015e"],["/static/media/pic6.d1b911b4.png","d1b911b47af9bcd7addf00d43d22907e"],["/static/media/pic7.948193dc.png","948193dc62776b1725a953111a1ed777"],["/static/media/pic8.75aaa846.png","75aaa8464324b3a83f372a5a0d7e7eaf"],["/static/media/representatives.1c2888aa.png","1c2888aac585c8ad7b5fe3f9812d1edf"],["/static/media/token-card-bg-hover.1ee72438.png","1ee724387aea5d4a6887f486eac6b41a"],["/static/media/token-card-bg.c455cb7f.png","c455cb7f387cbb40adc1070f4c1c53aa"],["/static/media/tron-banner-1.e40b3379.png","e40b3379629262491cfa1724efcb0083"],["/static/media/tron-banner-inverted.8621e167.png","8621e16760c7afdd7592a4c891129311"],["/static/media/tron-banner-tronblue.2ca3b12a.png","2ca3b12a36e68bcb9e07e7cea0ac502a"],["/static/media/tron-logo-inverted-testnet.e492a037.png","e492a0376c4a249edb99dcd29e2f44dd"],["/static/media/tron-logo-testnet.66063d4d.png","66063d4df80a2fcd0985c140b0a8222e"],["/static/media/tron-logo.f142f640.jpg","f142f64042ad58a9059189c6d5e87ac4"],["/static/media/wallet-preview.d53c0b10.png","d53c0b10512ca63c52a7fa9f8088f797"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,c,t){var n=new URL(e);return t&&n.pathname.match(t)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return c.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),n=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!c.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),e=urlsToCacheKeys.has(c));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(c=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(c)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});