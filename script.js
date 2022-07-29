var result = document.getElementById("result");
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * rate * years / 100;
    var year = new Date().getFullYear()+parseInt(years);
    if (document.getElementById("principal").value <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    result.innerHTML = `
    <br> <br> If you deposit <span class="yellow">${principal}</span>, <br>
    at an interest rate of <span class="yellow">${rate}%</span>, <br>
    You will receive an amount of <span class="yellow">${interest}</span>, <br>
    in the year <span class="yellow">${year}</span>
    `;
}
function updateRate()
{
    var rate = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = rate;
}
        