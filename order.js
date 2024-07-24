// order.js
export async function appendToGoogleSheet(spreadsheetId, range, values) {
  try {
    await gapi.client.init({
      apiKey: 'AIzaSyBbI6t7iaqTr8dhiFe99V3wHx2JJ2YMFiY',
	  clientId: '126438361027-i1nkuh5re49uev62osp98sfubbq8h6m0.apps.googleusercontent.com',
      clientSecret: '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',
      discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
    });

    const response = await gapi.client.sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      resource: {
        values,
      },
    });

    console.log('Data appended to Google Sheet:', response.result);
  } catch (error) {
    console.error('Error appending data to Google Sheet:', error);
    throw error;
  }
}

export async function createOrder(
  username,
  phone,
  matchedRouteId,
  pickupLocation,
  dropoffLocation,
  midstops,
  formattedDate,
  selectedTime,
  passengers
) {
  try {
    // Implement your order creation logic here
    console.log('Order created:', {
      username,
      phone,
      matchedRouteId,
      pickupLocation,
      dropoffLocation,
      midstops,
      formattedDate,
      selectedTime,
      passengers,
    });
  } catch (error) {
    console.error('Error creating the order:', error);
    throw error;
  }
}
