
/**
 * TABLE VIEW - STUDENTS IMPLEMENT
 * Display data in sortable rows - good for scanning specific information
 */
function showTable(data) {
  // TODO: Students implement this function
  // Requirements:
  // - Use a real HTML <table>, with <th> header cells and a <caption> saying what the table shows
  // - Include the 4-6 most useful fields
  // - Show "Not listed" instead of undefined when a value is missing
  // - Optional: add sorting
  /*html*/ 

  const view = `
  <h2 class="view-title">🃏 Table View</h2>
    <p class="view-description">View inspections as a table</p>
  `;

  
  data.forEach((item) => {
    const keys_ = Object.keys(item);

    keys_.forEach(element => {
        if (item[element] === "N/A" || item[element] === "------" || item[element] === undefined) {
            //console.log(item[element]);
            item[element] = "Not listed";
        } else {
            item[element] = item[element];
        }
    }
    )

  });



  const table_head = `<table class="restaurant-table">`;
  const table_end = `
    </tbody>
    </table>`;
  const fields = ['name', 'category', 'inspection_date', 'inspection_results'];
  let rows = '';
  const header = `
    <caption>
        <h3> Inspection Results Table </h3>
    </caption>
    <tbody>
    <tr>
        <th> Name </th>
        <th> Category </th>
        <th> City </th>
        <th> Date </th>
        <th> Result </th>
    </tr>
    `;

    data.forEach((item) => {
        let row = `
            <tr>
                <td> ${item['name']} </td>
                <td> ${item['category']} </td>
                <td> ${item['city']} </td>
                <td> ${item['inspection_date'].split("T")[0]} </td>
                <td> ${item['inspection_results']} </td>
               
            </tr>
        `;
        rows += row;
    });

    let table_ = view + table_head + header + rows + table_end;

  // want to use forEach to run through each one and create HTML for it to add in the table 
  // just need to know when it ends

  return table_;

  /*
  return `
                <h2 class="view-title">📊 Table View</h2>
                <div class="todo-implementation">
                    <h3>TODO: Implement Table View</h3>
                    <p><strong>Your task:</strong> Display the data as a real HTML table, with header cells and a caption</p>
                    <p><strong>Good for:</strong> Scanning specific data points, comparing values, finding specific information</p>
                    <p><strong>Consider:</strong> Which columns are most important? How can you make scanning easy?</p>
                    <p><strong>Data available:</strong> ${data.length} items loaded</p>
                </div>
            `;
    */
}

export default showTable;