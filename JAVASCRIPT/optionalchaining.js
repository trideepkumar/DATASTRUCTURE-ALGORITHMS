const user = {
    id: 123,
    name: "Alice",
    address: {
      street: "123 Main St",
      city: "Wonderland",
      // No 'state' property here
    }
  };
  
  // Without optional chaining
  const state1 = user.address && user.address.state;
  console.log(state1); // Output: undefined
  
  // Using optional chaining
  const state2 = user.address?.state;
  console.log(state2); // Output: undefined
  