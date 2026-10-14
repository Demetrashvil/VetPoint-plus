const faqCards = document.querySelectorAll(".faq-card");

faqCards.forEach(card => {

    const question = card.querySelector(".faq-question");
    const answer = card.querySelector(".faq-answer");
    const icon = card.querySelector(".faq-icon");

    question.addEventListener("click", () => {

        const isOpen = answer.style.maxHeight;

        document.querySelectorAll(".faq-answer").forEach(item => {
            item.style.maxHeight = null;
        });

        document.querySelectorAll(".faq-icon").forEach(item => {
            item.textContent = "+";
        });

        if (!isOpen) {
            answer.style.maxHeight = answer.scrollHeight + "px";
            icon.textContent = "−";
        }

    });

});