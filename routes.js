// routes.js
export async function getRoutes() {
  const sheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRksOjbHlLlhCL-RNoTx_y6LeAwgAu2YQG700rJY4wFputcO1DHoyUNj4MeLLPxhDzDxlyKzV80sMoW/pub?output=csv';
  const response = await fetch(sheetUrl);
  const data = await response.text();

  // Parse the CSV data into an array of route objects
  return data.trim().split('\n').slice(1).map(row => {
    const [id, from, to, days, minutes, quota, midstops, dept_time, x, y] = row.split(',');
    let midstopList = [];
    let departureTimeList = [];
	let xList = [];
	let yList = [];

    if (midstops && midstops.trim() !== '') {
      midstopList = midstops.split(';');
    }

    if (dept_time && dept_time.trim() !== '') {
      departureTimeList = dept_time.split(';');
    }
	
	if (x && x.trim() !== '') {
      XList = x.split(';');
    }
	
	if (y && y.trim() !== '') {
      YList = y.split(';');
    }

    return {
      id: id,
      From: from,
      To: to,
      departureFrequency: {
        days: days,
        minutes: minutes
      },
      Quota: quota,
      Midstops: midstopList,
      DepartureTime: departureTimeList,
	  XY: {
		  X: XList,
		  Y: YList
		}
  });
}

export async function saveRoute(route) {
  // Implement a function to save a new route to the Google Sheet
  // This could involve making a POST request to a server-side script
  // that updates the Google Sheet
}


// Replace this with your actual Google API client credentials
const clientId = '126438361027-i1nkuh5re49uev62osp98sfubbq8h6m0.apps.googleusercontent.com';
const clientSecret = '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';
//const refreshToken = 'YOUR_REFRESH_TOKEN';

// Function to append data to the Google Sheet
async function appendToGoogleSheet(spreadsheetId, range, values) {
  try {
    // Initialize the Google API client
    gapi.client.init({
      apiKey: clientId,
      clientId: clientId,
      scope: 'https://www.googleapis.com/auth/spreadsheets',
      discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    });

    // Authenticate the user
    const response = await gapi.auth.getToken({
      refresh_token: refreshToken,
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: 'refresh_token',
    });

    // Set the access token for the API client
    gapi.client.setToken(response.access_token);

    // Append the data to the Google Sheet
    const appendResponse = await gapi.client.sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      resource: {
        values,
      },
    });

    console.log('Data appended successfully!');
  } catch (error) {
    console.error('Error appending data to Google Sheet:', error);
  }
}






