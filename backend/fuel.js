let fuelhistory = [
    {
        userid: "1",
        gallons: "15",
        date: "2023-01-05",
        suggested: "0.50",
        price: "7.50"
    },
    {
        userid: "2",
        gallons: "30",
        date: "2023-01-05",
        suggested: "0.75",
        price: "22.50"
    }
];

function submitFuelForm(){
    //get the input values from the form
    const userid = "1";
    const gallons = document.getElementById("gallon").value;
    const delivery_date = document.getElementById("date").value;
    const price = document.getElementById("price").value;
    const total = document.getElementById("total").value;

    //create new object with user's input data
    const newEntry = {userid, gallons, delivery_date, price, total};

    //add new object to mock data fuel array
    fuelhistory.push(newEntry);

    //display a confirmation message to the user
    alert("Your form has been submitted!")
    console.log(newEntry);

    //clear the form fields
    form.reset();

}

// const form = document.getElementById("fuelform");

// form.addEventListener("submit",function(event){
//     event.preventDefault(); //prevent form from submitting

//     //get the input values from the form
//     const userid = "1";
//     const gallons = document.getElementById("gallon").value;
//     const delivery_date = document.getElementById("date").value;
//     const price = document.getElementById("price").value;
//     const total = document.getElementById("total").value;

//     //create new object with user's input data
//     const newEntry = {userid, gallons, delivery_date, price, total};

//     //add new object to mock data fuel array
//     fuelhistory.push(newEntry);

//     //display a confirmation message to the user
//     alert("Your form has been submitted!")
//     console.log(newEntry);

//     //clear the form fields
//     form.reset();

// });