// function for calculate Donation

function donateBangladesh(donationId, amountId, historyText) {
  const donationAmount = parseInt(document.getElementById(donationId).value);

  let balance = parseInt(document.getElementById("balance").innerText);
  let donationTotalAmount = parseInt(
    document.getElementById(amountId).innerText
  );
  if (isNaN(donationAmount) || donationAmount <= 0) {
    return alert("Please Enter a Valid Amount");
  }
  if (donationAmount > balance) {
    return alert("Insufficient Balance");
  }
  balance -= donationAmount;
  donationTotalAmount += donationAmount;

  document.getElementById(donationId).value = "";
  document.getElementById("balance").innerText = balance;
  document.getElementById(amountId).innerText = donationTotalAmount;

  const currentDate = new Date();
  const history_content = document.createElement("div");
  history_content.innerHTML = `
        <div class="max-w-[1140px] mx-auto border border-midnight_black_op1 rounded-2xl p-8 mb-6">
            <h2 class="text-xl font-bold text-midnight_black mb-4">
                ${donationAmount} Taka Donated for ${historyText}
            </h2>
            <p class="text-base font-light text-midnight_black_op7">
                Date: ${currentDate.toString()}
            </p>
        </div>`;
  document.getElementById("history").appendChild(history_content);
  document.getElementById("donation_confirmation").showModal();
}

// addEventListener on Donate button and call the donation function

document.getElementById("noakhali_btn").addEventListener("click", function () {
  donateBangladesh(
    "noakhali_donation",
    "noakhali_amount",
    "Flood Relief in Noakhali, Bangladesh"
  );
});

document.getElementById("feni_btn").addEventListener("click", function () {
  donateBangladesh(
    "feni_donation",
    "feni_amount",
    "Flood Relief in Feni, Bangladesh"
  );
});

document.getElementById("quota_btn").addEventListener("click", function () {
  donateBangladesh(
    "quota_donation",
    "quota_amount",
    "Aid for Injured in the Quota Movement, Bangladesh"
  );
});

// function for donation history button

function donationHistoryToggle(showId, hideId) {
  document.getElementById(showId).classList.remove("hidden");
  document.getElementById(hideId).classList.add("hidden");
}
function activeBtnStyle(activeBtnId, inactiveBtnId) {
  document
    .getElementById(activeBtnId)
    .classList.add("bg-Limeglow", "text-midnight_black");
  document
    .getElementById(inactiveBtnId)
    .classList.remove("bg-Limeglow", "text-midnight_black");
}
document.getElementById("donation_btn").addEventListener("click", function () {
  donationHistoryToggle("donation", "history");
  activeBtnStyle("donation_btn", "history_btn");
});

document.getElementById("history_btn").addEventListener("click", function () {
  donationHistoryToggle("history", "donation");
  activeBtnStyle("history_btn", "donation_btn");
});

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 30) {
    navbar.classList.remove("bg-IvoryCloud");
  } else {
    navbar.classList.add("bg-IvoryCloud");
  }
});


