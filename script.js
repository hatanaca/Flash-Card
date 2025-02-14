let flashCardsData = [
	{},
	{},
	{}
];
	function addFlashCard(){
		const cardElement = document.createElement("div");
		cardElement.classList.add("card");
		cardElement.textContent = card.question;
		cardElement.dataset.flipped = "false";

		const deleteBtn = document.createElement("button");
		deleteBtn.textContent = "X";
		deleteBtn.classList.add("delete-btn");
		deleteBtn.onclick = (e) => {
			e.stopPropagation();
			deleteCard(card.id);
		};

		cardElement.appendChild(deleteBtn);
		cardElement.onclick = () => toggleFlip(cardElement, card);
		return cardElement;
	}
	
	function toggleFlip(cardElement, card){
		if (cardElement.dataset.flipped === "false") {
			cardElement.textContent = card.answer;
			cardElement.dataset.flipped = "true";
		} else {
			cardElement.textContent = card.question;
			cardElement.dataset.flipped = "false";
		}
		cardElement.appendChild(cardElement.querySelector(".delete-btn"));
	}
	
	function deleteCard(id) {
		flashCardsData = flashCardsData.filter(card => card.id !== id);
		loadFlashCards();
	}

	function deleteAllCards() {
		flashCardsData = [];
		loadFlashCards();
	}

	function addFlashCard() {
		const questionInput = document.getElementById("question");
		const answerInput = document.getElementById("answer");
		const question = questionInput.value.trim();
		const answer = answerInput.value.trim();

		if (question && answer) {
			const newCard = { id: Date.now(), question, answer };
			flashCardsData.push(newCard);
			questionInput.value = "";
			answerInput.value = "";
			loadFlashCards();
		}
	}
	
	function loadFlashCards() {
		const flashcardsContainer = document.getElementById("flashcards");
		flashcardsContainer.innerHTML = "";
		flashCardsData.forEach(card => {
			flashcardsContainer.appendChild(addFlashCard(card));
		});
	}

	loadFlashCards();
