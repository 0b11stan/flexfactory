let previousHistory = '2015';
let currentHistory = '2015';
let initialized = false;
let histories = ["2015", "2016", "2017", "2018", "2019", "2020", "2021"];

export default function initHistory() {
  histories.map((year) => document.getElementById("history-menu-" + year)
    .addEventListener('mouseover', function () {
      displayHistory(year)
    })
  );
  document.getElementById('history-panel').addEventListener('mouseleave', 
    function () { hideHistory(); console.log("HERE"); }
  );
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
  console.log(currentHistory);
  document.getElementById("history-body").hidden = false;
  previousHistory = currentHistory;
  currentHistory = year;
  unboldifyMenu();
  document.getElementById("degree-" + previousHistory).hidden = true;
  document.getElementById("history-menu-" + year).classList.add('boldify');
  document.getElementById("degree-" + year).hidden = false;
}
