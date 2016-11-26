function loadIcons() {
  var icons = [
    'fb-sq.svg',
    'google-plus-sq.svg',
    'instagram-black-sq.svg',
    'instagram-color-sq.svg',
    'linkedin-sq.svg',
    'rss-sq.svg',
    'twitter-sq.svg',
    'youtube-r.svg',
    'youtube-rec.svg'
  ];

  //var rawgit = 'https://rawgit.com/';
  var rawgit = 'https://cdn.rawgit.com/';
  var repo = 'levonlee/svg/master/';
  var github = 'https://github.com/levonlee/svg/blob/master/';

  var container = document.getElementById('svg-items');
  icons.forEach(function(i) {
    var node = document.createElement('div');
    node.className += 'svg-item';
    var nodeImg = document.createElement('img');
    nodeImg.src = rawgit + repo + i;
    var nodeCode = document.createElement('div');
    nodeCode.innerHTML = '<a target="_blank" href="' + github + i + '">'+ i +'</a>';
    node.appendChild(nodeImg);
    node.appendChild(nodeCode);
    container.appendChild(node);
  });
}

window.addEventListener('load', loadIcons);