function ButtonClick() {
    //Check phone number validation

    var isValid = true;

    var sender_number = $('#waybill_sender_person_mobile_no').val();
    var receiver_number = $("#waybill_receiver_person_mobile_no").val();
    var phone_regular_expression = /^[+0-9]+$/;

    if (phone_regular_expression.test(sender_number)) {
        if (sender_number.substr(0, 1) == "0") {
            sender_number = sender_number.substr(1, sender_number.length);
            $('#waybill_sender_person_mobile_no').val(sender_number);
        }
        else if (sender_number.substr(0, 5) == "++270") {
            sender_number = sender_number.substr(5, sender_number.length);
            $('#waybill_sender_person_mobile_no').val(sender_number);
        }
        else if (sender_number.substr(0, 4) == "++27") {
            sender_number = sender_number.substr(4, sender_number.length);
            $('#waybill_sender_person_mobile_no').val(sender_number);
        }
        else if (sender_number.substr(0, 1) == "+") {
            sender_number = sender_number.substr(3, sender_number.length);
            $('#waybill_sender_person_mobile_no').val(sender_number);
        }
        else {
            //Do nothing
        }
    }
    else {
        alert("Sender mobile number is not valid. Make sure there are no spaces, + or - signs in the number. This field only supports numbers.");
        return false;
    }

    if (phone_regular_expression.test(receiver_number)) {
        if (receiver_number.substr(0, 1) == "0") {
            receiver_number = receiver_number.substr(1, receiver_number.length);
            $('#waybill_receiver_person_mobile_no').val(receiver_number);
        }
        else if (receiver_number.substr(0, 5) == "++270") {
            receiver_number = receiver_number.substr(5, receiver_number.length);
            $('#waybill_receiver_person_mobile_no').val(receiver_number);
        }
        else if (receiver_number.substr(0, 4) == "++27") {
            receiver_number = receiver_number.substr(4, receiver_number.length);
            $('#waybill_receiver_person_mobile_no').val(receiver_number);
        }
        else if (receiver_number.substr(0, 1) == "+") {
            receiver_number = receiver_number.substr(3, receiver_number.length);
            $('#waybill_receiver_person_mobile_no').val(receiver_number);
        }
        else {
            //do nothing
        }
    }
    else {
        alert("Receiver mobile number is not valid. Make sure there are no spaces, + or - signs in the number. This field only supports numbers.");
        return false;
    }

    return isValid;
}