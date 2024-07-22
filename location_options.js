// List of pickup and dropoff location pairs
const locationOptions = [
  {
    pickup: 'Airport',
    dropoff: ['Hotel']
  },
  {
    pickup: 'Hotel',
    dropoff: ['Airport','Downtown','Train Station']
  },
  {
    pickup: 'Downtown',
    dropoff: ['Airport', 'Hotel']
  },
  {
    pickup: 'Train Station',
    dropoff: ['Hotel']
  }
];

function populateLocationOptions() {
  const pickupLocationSelect = document.getElementById('pickup-location');
  const dropoffLocationSelect = document.getElementById('dropoff-location');

  // Populate the pickup location options
  locationOptions.forEach(option => {
    const pickupOption = document.createElement('option');
    pickupOption.value = option.pickup;
    pickupOption.textContent = option.pickup;
    pickupLocationSelect.add(pickupOption);
  });

  // Populate the initial dropoff location options
  populateDropoffOptions();
}

function populateDropoffOptions() {
  const pickupLocationSelect = document.getElementById('pickup-location');
  const dropoffLocationSelect = document.getElementById('dropoff-location');

  // Clear the existing dropoff options
  dropoffLocationSelect.innerHTML = '';

  // Get the selected pickup location
  const selectedPickupLocation = pickupLocationSelect.value;

  // Find the corresponding dropoff options
  const dropoffOptions = locationOptions.find(option => option.pickup === selectedPickupLocation).dropoff;

  // Add the dropoff options to the select element
  dropoffOptions.forEach(option => {
    const dropoffOption = document.createElement('option');
    dropoffOption.value = option;
    dropoffOption.textContent = option;
    dropoffLocationSelect.add(dropoffOption);
  });
}