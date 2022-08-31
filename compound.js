

document.addEventListener("DOMContentLoaded", function(e){
    e.preventDefault();
    var calculate = document.getElementById("calculate");
    var addTerm = document.getElementById("addInvestTerm");
    var elNum = 0;


    calculate.addEventListener("click", function calculate() {
        var initialInvestment = +document.getElementById('initialInvestment').value;
        var finalAmount = initialInvestment;
        var realRate;

        var interestRateArr = new Array();
        var investmentLengthArr = new Array();
        var monthlyAdditionArr = new Array();
      
        // Takes all the inputs from the monthly addition, interest rate, and investment length boxes and puts them into their own arrays
        $( "input[name^='monthly']").each(function( index ) {
            monthlyAdditionArr.push(parseInt($( this ).val()));
        });
        $( "input[name^='interest']").each(function( index ) {
            interestRateArr.push(parseInt($( this ).val()));
        });
        $( "input[name^='investment']").each(function( index ) {
            investmentLengthArr.push(parseInt($( this ).val()));
        });
        
        for (var i = 0; i < investmentLengthArr.length; i++) {
            realRate = interestRateArr[i] * .01;
            for (var j = 0; j < investmentLengthArr[i]; j++) { // Number of terms
                finalAmount = (finalAmount + (monthlyAdditionArr[i] * 12)) * (1 + realRate);
            }
        }

        var formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        });

        document.getElementById("totalValue").textContent = formatter.format(finalAmount);
    });

    
    $(addTerm).click(function addTerm() {
        elNum++;
        var newEl = `
        <div class="elements" id="elements${elNum}" align="center">
        <div class="form-group">
            <label for="monthlyAddition">Monthly Addition</label>
            <input 
                class="form-control" 
                id="monthlyAddition${elNum}" 
                name="monthlyAddition${elNum}" 
                placeholder="Enter monthly addition"
            >
        </div>
        <div class="form-group">
            <label for="interestRate">Interest Rate</label>
            <input 
                class="form-control" 
                id="interestRate${elNum}" 
                name="interestRate${elNum}"
                placeholder="Enter your estimated interest rate"
            >
        </div>
        <div class="form-group">
            <label for="investmentLength">Investment Length</label>
            <input 
                class="form-control" 
                id="investmentLength${elNum}" 
                name="investmentLength${elNum}" 
                placeholder="How long would you like to compound this money?"
            >
            
            <br>
        </div>
    </div>
    `;

        $(newEl).insertAfter('.elements:last');
    });


    $(".rmvBtn").click(function rmvTerm() {
        var div = document.getElementsByClassName('elements');

        if (div.length > 1) {
            $(".elements:last").remove();
            elNum--;
        } else {
            alert("You cannot delete all terms.");
        }
    });
    
    $(".resetBtn").click(function resetFields() {
        var div = document.getElementsByClassName('elements');
        document.getElementsByName("initialInvestment").reset();
        document.getElementsByName("monthlyAddition").reset();
        document.getElementsByName("interestRate").reset();
        document.getElementsByName("investmentLength").reset();
        document.getElementsByName("totalValue").reset();

        for (var i = 0; i < div.length; i++) {
            if (div.length > 1) {
            $(".elements:last").remove();
            elNum--; 
            }
            else {
                break;
            }
        }
    });
});



