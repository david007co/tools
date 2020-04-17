function submitForm() {
    console.log(`form submited1`)
    var requiredOk = false; //validate if required fields have a value
    var modalContent = ["The following mandatory fields are empty:"]
    var elements = []
    var elements = $('input[type=text], input[type=date], input[type=url');        

    console.log(elements)
    //Test the array of elements
    testEleArr(elements);

    console.log(modalContent)

    if (modalContent.length > 1) {
        $('.modal-body')[0].innerText = modalContent.join("\n");
        $('#dgModal').modal()
    } else{
        requiredOk = true;
    }

    function testEleArr(items) {
        for (var i = 0; i < items.length; i++) {
            //test if was required
            if (items[i].hasAttribute('required')) {
                console.log(`is required> ${items[i].value}`)
                //test if val is empty
                if (items[i].value.length < 3) {
                    console.log(`is empty> ${items[i].value}`)
                    modalContent.push(items[i].title)
                }
            }
        }
    }





}
