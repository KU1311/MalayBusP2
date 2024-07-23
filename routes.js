// routes.js
export async function getRoutes() {
  const sheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRksOjbHlLlhCL-RNoTx_y6LeAwgAu2YQG700rJY4wFputcO1DHoyUNj4MeLLPxhDzDxlyKzV80sMoW/pub?output=csv';
  const response = await fetch(sheetUrl);
  const data = await response.text();

  // Parse the CSV data into an array of route objects
  return data.trim().split('\n').slice(1).map(row => {
    const [id,from, to, departureFrequencyDays, departureFrequencyMinutes, quota, midstops, dept_time] = row.split(',');
    return {
	id: id,
      From: from,
      To: to,
      departureFrequency: {
        days: departureFrequencyDays,
        minutes: departureFrequencyMinutes
      },
      Quota: quota,
	Midstops: midstops,
	  Dept_time: dept_time
    };
  });
}

export async function saveRoute(route) {
  // Implement a function to save a new route to the Google Sheet
  // This could involve making a POST request to a server-side script
  // that updates the Google Sheet
}
