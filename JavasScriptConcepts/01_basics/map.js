const firstName = ['Asabeneh', 'Brook', 'David', 'John']
const lastName = ['Negussie', 'Abera', 'Smith', 'Doe']

// iterate over the array
// for (let i = 0; i < firstName.length; i++) {
//     console.log(firstName[i])
//     }

    // map using foreach
//  firstName.forEach((firstName) => console.log(firstName))

//  map function is used to transform data in an array
firstName.map((f) => console.log(f + ' User'))

// filter
firstName.filter((name) => name === 'Asabeneh').map((name) => console.log(name))