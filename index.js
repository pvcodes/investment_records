$(document).ready(() => {
    $.getJSON('data.json', (data) => {
        // alert(data['pvcodes'][0].amnt)
        // console.log(data);
        for (const prop in data) {
            $("data").append("<table id=" + prop + "></table>")

            let tbody = "<tbody>"
            totalAmtInvested = 0

            for (const i in data[prop]) {
                let tmp = data[prop][i];
                tbody += "<tr><td>" + tmp.date + "</td><td>" + tmp.currency + "</td><td>" + tmp.amnt + "</td></tr>"
                totalAmtInvested += tmp.amnt
            }
            tbody += "</tbody>"

            tfoot = "<tfoot><tr><td></td><td>Total Amount Invested:</td><td>" + totalAmtInvested + "</td></tr></tfoot>"
            $("#" + prop).append("<thead><caption>" + prop + "</caption><tr><th>Date</th><th>Currency</th><th>Amount</th></tr></thead>" + tbody + tfoot)
                // $("body").append("")
        }
        $("body").prepend("<div id=\"footer\"><b>NOTE: </b>Please add amount in one CURRENCY only</p><br><p>To know how it works visit <a href=\"https://github.com/pvcodes/investment_records#walkthrough\">here</a>.</p></div>")
    })
})