var zoom_one_tap_mobile = {
    invite_text: "",
    meeting_id: "",
    passcode: "",
    location_num: "",
    result_link: null,
    generate_number: function () {
        console.log("Generate a phone number +location_number,,meetingid#,,,,,,0#,,passcode#");

        //Try to parse invite text first
        this.invite_text = document.getElementById("invite_text").value;
        var lines = this.invite_text.split('\n');
        if (lines.length > 2 && lines.length < 100) {
            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                if (line.startsWith("Meeting ID:")) {
                    this.meeting_id = line.substring(12).replace(/\s+/g, '');
                    document.getElementById("meeting_id").value = this.meeting_id;
                    console.log("Parsed meeting id: " + this.meeting_id);
                } else if (line.startsWith("Passcode:")) {
                    this.passcode = line.substring(10);
                    document.getElementById("passcode").value = this.passcode;
                    console.log("Parsed passcode: " + this.passcode);
                }
            }
        } else {
            //Manual entry
            this.meeting_id = document.getElementById("meeting_id").value;
            this.passcode = document.getElementById("passcode").value;
        }
        this.location_num = document.getElementById("location_num").value;
        this.result_link = document.getElementById("result_link");

        //+location_number,,meetingid#,,,,,,0#,,passcode#
        this.result_link.value = this.location_num + ",," + this.meeting_id + "#,,,,,,0#,," + this.passcode + "#";
        this.result_link.innerHTML = this.result_link.value;
        this.result_link.href = "tel:" + this.result_link.value;
        console.log(this.result_link.value);
    }


}