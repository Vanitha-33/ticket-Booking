let seats = document.querySelector(".all-seats");
for (let i = 0; i < 59; i++) {
    let randint = Math.floor(Math.random() * 2);
    let booked = randint === 1 ? "booked" : "";

    seats.insertAdjacentHTML(
        "beforeend",
        `<input type="checkbox" name="tickets" id="s${i + 2}"/>
        <label for="s${i + 2}" class="seat ${booked}"></label>`
    );
}

let tickets = seats.querySelectorAll("input");
tickets.forEach((ticket) => {
    ticket.addEventListener("change", () => {
        let amount = document.querySelector(".amount").innerHTML;
        let count = document.querySelector(".count").innerHTML;

        amount = Number(amount);
        count = Number(count);

        if (ticket.checked) {
            count += 1;
            amount += 200;
        } else {
            count -= 1;
            amount -= 200;
        }
        document.querySelector(".amount").innerHTML = amount;
        document.querySelector(".count").innerHTML = count;
    });
});

// Add event listener for the "Book" button
document.getElementById("book-button").addEventListener("click", () => {
    let bookedSeats = Array.from(tickets).filter(ticket => ticket.checked);
    let bookingMessage = document.querySelector(".booking-message");

    if (bookedSeats.length > 0) {
        bookingMessage.style.display = "block";
        bookingMessage.innerHTML = `Successfully booked ${bookedSeats.length} seat(s)!`;
        // Clear selected seats after booking
        bookedSeats.forEach(ticket => ticket.checked = false);
        document.querySelector(".count").innerHTML = 0;
        document.querySelector(".amount").innerHTML = 0;
    } else {
        bookingMessage.style.display = "block";
        bookingMessage.innerHTML = "No seats selected!";
    }
});
