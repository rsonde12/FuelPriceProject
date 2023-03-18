let  profilehistory = [
    {
        name: "Beth",
        address: "15 adress street",
        address2: "N/a",
        city: "Katy",
        state: "TX",
        zipcode: "77489"
    },
    {
        name: "Grace",
        address: "189 adress street",
        address2: "N/a",
        city: "Woodlands",
        state: "TX",
        zipcode: "77567"
    }
];

function submitClientProfile(){
    //get the input values from the form
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const address2 = document.getElementById("address2").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const zipcode = document.getElementById("zipcode").value;

    //create new object with user's input data
    const newEntry = {name, address, address2, city, state, zipcode};

    //add new object to mock data fuel array
    profilehistory.push(newEntry);

    //display a confirmation message to the user
    alert("Your profile has been Created!")
    console.log(newEntry);

    //clear the form fields
    form.reset();

}
