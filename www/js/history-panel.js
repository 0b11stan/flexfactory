let previousHistory = '2015';
let currentHistory = '2015';
let initialized = false;
let histories = histories_from_html();

function histories_from_html() {
  let years = [];
  let nodes = document.getElementById('history-menu').childNodes;
  for (let i = 1; i <= nodes.length; i = i + 2)
    if (nodes[i]) years.push(nodes[i].id.slice(-4));
  return years;
}

export default function initHistory() {
  console.log(histories);
  if (! initialized) {
    histories.map((year) => document.getElementById("history-menu-" + year)
      .addEventListener('mouseover', function () {
        displayHistory(year)
      })
    );
    document.getElementById('history-menu-2015').classList.add('offset-by-two');
    document.getElementById('history-panel').addEventListener('mouseleave', 
      function () { hideHistory(); }
    );
    initialized = true;
  }
}

function buildHistory(year) {
  // moved to html ...
}

function unboldifyMenu() {
  histories.map(year => 
    document.getElementById('history-menu-' + year).classList.remove('boldify')
  );
}

function hideHistory() {
  unboldifyMenu();
  document.getElementById("history-body").hidden = true;
}

function displayHistory(year) {
  document.getElementById("history-body").hidden = false;
  previousHistory = currentHistory;
  currentHistory = year;
  unboldifyMenu();
  document.getElementById("degree-" + previousHistory).hidden = true;
  document.getElementById("history-menu-" + year).classList.add('boldify');
  document.getElementById("degree-" + year).hidden = false;
}
