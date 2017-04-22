document.addEventListener('deviceready', onDeviceReady , false);

    
function onDeviceReady() {
    
    $(document).bind("backbutton", onBackKeyDown);
    $(document).bind("volumeupbutton", callbackFunction);
    
    function onBackKeyDown(e) {
        e.preventDefault();
        alert('Bouton appuyé');
    }
    
    function callbackFunction(e) {
        alert("Volume monté");
    }
    
    $('#getPicture').click(function() {
        alert('bouton')
    }/*
    // specify contact search criteria
    var options = new ContactFindOptions();
    options.filter="";          // empty search string returns all contacts
    options.multiple=true;      // return multiple results
    filter = ["displayName"];   // return contact.displayName field

    // find contacts
    navigator.contacts.find(filter, onSuccess, onError, options);

    var names = [];
    alert('comme ça')
    
    // onSuccess: Get a snapshot of the current contacts
    //
    function onSuccess(contacts) {
        alert('fonction success');
        for (var i=0; i<contacts.length; i++) {
            if (contacts[i].displayName) {  // many contacts don't have displayName
                names.push(contacts[i].displayName);
            }
        }
        alert('contacts loaded');
    }*/
}

