/**
 * CATEGORY VIEW - STUDENTS IMPLEMENT
 * Group data by categories
 */
function showCategories(data) {
  // Requirements:
  // - Group data by one meaningful field (category, city, inspection result, etc.)
  // - Show how many records are in each group, plus one other number per group
  //   (an average, a highest, a lowest)
  // - Show items within each group
  // - Make the groups easy to compare, and visually distinct from their items
  /*html*/
  // maybe use a table or cards?
  // check the CSS file
  // so each category should have its own div then

  // just need the category key 


  const RESULTS = "inspection_results";
  const CATEGORY = "category";
  const INSDATE = "inspection_date";
  const CITY = "city";

  let html = '';

  let all = '';


  const cats = [
    //"type", 
    CATEGORY,
    INSDATE,
    RESULTS,
    CITY,
  ];

  let cities = {};
  let dateL = {};

  const view = `
  <h2 class="view-title">🃏 Category View</h2>
    <p class="view-description">Data grouped by City</p>
  `;
  // average function
  //https://stackoverflow.com/questions/10359907/how-to-compute-the-sum-and-average-of-elements-in-an-array
  const avg = (list) => {
    return list.reduce((a, b) => a + b, 0) / list.length;
  };

  
  data.forEach((item) => {
    const keys_ = Object.keys(item);

    keys_.forEach(element => {
        if (item[element] === "N/A" || item[element] === "------" || item[element] === undefined) {
            //console.log(item[element]);
            item[element] = "Not listed";

        } else {
            item[element] = item[element];
            //console.log(item[element]);

        }
    }
    )

  });


  data.forEach(item => {

    if (Object.keys(cities).includes(item[CITY])) {

      cities[item[CITY]] += 1;
      dateL[item[CITY]].push(item[INSDATE]);
      
    } else {

      cities[item[CITY]] = 1;
      dateL[item[CITY]] = [item[INSDATE]];
      
    } 
  });

  Object.keys(dateL).forEach(city => {

    let sublist = [];

    let length = dateL[city].length - 1;

    dateL[city] = dateL[city].sort();
    dateL[city] = dateL[city].reverse();
    dateL[city] = dateL[city][length].split("T")[0];
  });


  Object.keys(cities).forEach(key => {

  
    let htmls = `
    <div class="category-section">
      
      <h2 class="category-header">${key}
      </h2>

      <div class="category-items"> 
        <div class="category-item"> 
            Total number of inspections: ${cities[key]}
        </div>
        <div class="category-item"> 
            Latest inspection: ${dateL[key]}
        </div>
      </div>
    </div>
    `;

    html += htmls;
  });

  all = view + html;

  return all;


}

export default showCategories;