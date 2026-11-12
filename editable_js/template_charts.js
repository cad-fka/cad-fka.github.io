/**
 * CHARTS VIEW - STUDENTS IMPLEMENT
 * Show patterns in your data as charts, using Chart.js
 *
 * This view has two parts:
 *   showCharts(data) returns the HTML: one <canvas> per chart, with a text alternative under each
 *   drawCharts(data) runs after that HTML is on the page, and draws a chart into each <canvas>
 *
 * Chart.js docs: https://www.chartjs.org/docs/latest/getting-started/
 */
function showCharts(data) {
  // TODO: Replace each TODO sentence below with text that says what that chart shows.
  // Charts are drawn as pictures, so screen readers can't read them.
  /*html*/
  return `
                <h2 class="view-title">📈 Charts View</h2>
                <p class="view-description">Patterns in the data at a glance</p>
                <div class="todo-implementation">
                    <h3>TODO: Implement Charts View</h3>
                    <p><strong>Your task:</strong> Draw at least two charts of different types, each answering a different question</p>
                    <p><strong>Good for:</strong> Spotting patterns, comparing groups, seeing distributions</p>
                    <p><strong>Records available:</strong> ${data.length} items to chart</p>
                  
                </div>
                <div class="charts-grid">
                    <figure class="chart-figure">
                        <canvas id="chart-one"></canvas>
                        <figcaption class="chart-summary">A bar chart showing the number of inspections for each type of business</figcaption>
                    </figure>
                    <figure class="chart-figure">
                        <canvas id="chart-two"></canvas>
                        <figcaption class="chart-summary">A doughnut chart showing the type and count of each inspection result</figcaption>
                    </figure>
                </div>
            `;
}

// look at chart tutorial and re-use code here.
function drawCharts(data) {
  // Chart.js is loaded by a <script> tag in index.html. If it didn't load, say so instead of breaking.
  if (typeof Chart === 'undefined') {
    document.querySelector('.charts-grid').innerHTML =
      '<p class="error">Chart.js did not load, so the charts can\'t be drawn. Check the &lt;script&gt; tag in index.html.</p>';
    return;
  }

  // just use bar chart and another chart here?

  // TODO 1: Reshape your data for the first chart.
  // Chart.js doesn't take your array of records.
  // It wants a list of labels and a matching list of numbers.
  // Example: count inspections by type of business.
  //
  //   const counts = {};
  //   data.forEach((item) => {
  //     counts[item.category] = (counts[item.category] || 0) + 1;
  //   });
  //   const labels = Object.keys(counts);
  //   const numbers = Object.values(counts);

  const counts = {};
  const datacheck = {};
  const results = {};

  data.forEach((item) => {
    const keys_ = Object.keys(item);

    keys_.forEach(element => {
        if (item[element] === "N/A" || item[element] === "------" || item[element] === undefined) {
            console.log(item[element]);
            item[element] = "Not listed";

        } else {
            item[element] = item[element];
            //console.log(item[element]);

        }
    }
    )

  });

  console.log(data[0]);

  data.forEach((item) => {

      if (Object.keys(counts).includes(item.category)) {

        counts[item.category] += Number(1);
        
      } else {
        counts[item.category] = Number(1);

    }});
  
  const labels_ = Object.keys(counts);
  const numbers = Object.values(counts);

  const dataBar = {
    labels: labels_,
    datasets: [{
      label: "number of inspections",
      data: numbers
    }]
  };

  const optionsBar = {
        plugins: { title: { display: true, text: 'Inspections by type of business' } },
         scales: {
           x: { title: { display: true, text: 'Type of business' } },
           y: { title: { display: true, text: 'Inspections' }, beginAtZero: true }
         }
       }

  const chart_one = {
    type: 'bar',
    data: dataBar,
    options: optionsBar

  };


  new Chart(document.querySelector('#chart-one'),
    {
      type: 'bar',
      data: dataBar,
      options: optionsBar
    }
  );

  const yor = data.toReversed();

  // still need to change date so that it comes in order
  // maybe just the year
  // maybe a pie chart of the categories?
  // or pie chart of the cities
  yor.forEach((item) => {

      let datet = item['inspection_date'].split("T")[0];
      //let datet = item['inspection_date'].split("-")[0];
      if (Object.keys(datacheck).includes(datet)) {

        datacheck[datet] += Number(1);
        
      } else {
        datacheck[datet] = Number(1);

    }});
  

  console.log(datacheck);

  const labelsL = Object.keys(datacheck);
  const inspec = Object.values(datacheck);

  const dataLine = {
    labels: labelsL,
    datasets: [{
      label: "Inspections per date",
      data: inspec,
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  const optionsLine = {
        plugins: { title: { display: true, text: 'Inspections by type of business' } },
         scales: {
           x: { title: { display: true, text: 'Type of business' } },
           y: { title: { display: true, text: 'Inspections' }, beginAtZero: true }
         }
       }

  const chart_two = {
    type: 'line',
    data: dataLine,
    //options: optionsBar

  };

  // pie chart instead for cities? or inspection results?

  const roy = data.toReversed();

  // need to remove ------ from all pages (T_T)
  roy.forEach((item) => {

      let datet = item['inspection_results'];

      if (datet === '') {
        
      } else {
        
      }
      //let datet = item['inspection_date'].split("-")[0];
      if (Object.keys(results).includes(datet)) {

        results[datet] += Number(1);
        
      } else {
        results[datet] = Number(1);

    }});

  console.log(results);

  const labelsP = Object.keys(results);
  const inspecP = Object.values(results);

  const dataPie = {
    labels: labelsP,
    datasets: [{
      label: 'Inspection Results',
      data: inspecP,
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(100, 205, 86)',
        'rgb(100, 124, 34)',
        'rgb(200, 124, 34)',
      ],
      hoverOffset: 4
    }]
  };

  console.log(dataPie);

  const configPie  = {
  type: 'doughnut',
  data: dataPie,
};


  new Chart(document.querySelector('#chart-two'),
    //chart_two
    configPie
  );

  // can do inspections by city?
  // or number by inspection date?
  // TODO 2: Draw the first chart into <canvas id="chart-one">.
  // Every chart needs a title, and every axis needs a label.
  //
  //   new Chart(document.querySelector('#chart-one'), {
  //     type: 'bar',
  //     data: {
  //       labels: labels,
  //       datasets: [{ label: 'Number of inspections', data: numbers }]
  //     },
  //     options: {
  //       plugins: { title: { display: true, text: 'Inspections by type of business' } },
  //       scales: {
  //         x: { title: { display: true, text: 'Type of business' } },
  //         y: { title: { display: true, text: 'Inspections' }, beginAtZero: true }
  //       }
  //     }
  //   });

  // TODO 3: Reshape your data again, and draw a second chart of a DIFFERENT type
  // (pie, line, scatter...) into <canvas id="chart-two">, answering a different question.
  // Ideas: inspection results as a pie, inspections per month as a line,
  // or how many "Out of Compliance" checks each type of business averages.

  // orobably just a line


}

export { showCharts, drawCharts };
