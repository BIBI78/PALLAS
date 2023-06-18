function SendMail() {
    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value,

    }
    emailjs.send("pallasCV", "template_8isy6wt", params).then(function (res) {
        alert("HOMIXIDE GANG" + res.status);
    })

}