export default function initContent() {
  initContentMenu();
  buildContentBody();
  document.getElementById('content-panel').addEventListener('mouseleave',
    function () { hideContents(); }
  );
}

function initContentMenu() {
  [/*'projects',*/ 'readings', 'articles'].forEach((content) => {
      document.getElementById(content + '-menu').addEventListener('mouseover',
          function () { show(content); }
      );
  });
}

function hideContents() {
  ['projects', 'readings', 'articles'].forEach((content) => {
    document.getElementById(content + '-menu').classList.remove('boldify');
    document.getElementById(content + '-body').hidden = true;
  });
}

function show(content) {
  hideContents();
  document.getElementById(content + '-menu').classList.add('boldify');
  document.getElementById(content + '-body').hidden = false;
}

function buildContentBody() {
  buildReadingsBody();
}

function buildReadingsBody() {
  let readingBody = document.getElementById('readings-body');
  for (let book in books) {
    book = books[book];
    readingBody.innerHTML += ``;// went to templates/reading.j2
  }
}
