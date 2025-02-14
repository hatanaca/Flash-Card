	
let flashCardsData = [
            { id: 1, question: "O que é React?", answer: "Uma biblioteca JavaScript para construir interfaces." },
            { id: 2, question: "O que é CSS?", answer: "Uma linguagem de estilo para a web." },
            { id: 3, question: "O que é JavaScript?", answer: "Uma linguagem de programação para a web." }
        ];	
	
	function createCard(card){
		const cardElement = document.createElement("div");
		cardElement.classList.add("card");
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
			flashcardsContainer.appendChild(createCard(card));
		});
	}

	loadFlashCards();
