// order.js
export async function appendToGoogleSheet(spreadsheetId, range, values) {
  try {
    await gapi.client.init({
      apiKey: 'YOUR_API_KEY',
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
