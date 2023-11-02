const inputElement = document.querySelector("#searchTerm");
const liElementsList = document.querySelectorAll("li");

inputElement.addEventListener("input", (e) => {
  const searchTerm = e.target.value.trim();

  liElementsList.forEach((listItemElement) => 		{		
    if (listItemElement.innerText.includes(searchTerm)) {
			listItemElement.classList.remove('hidden');
      
			const regex = new RegExp(`(${searchTerm})`, "gi");
      
			const html = listItemElement.innerText.replace(
        regex,
        `<span class="highlight">$1</span>`
      );
      
			listItemElement.innerHTML = html;
    } else {
      listItemElement.classList.add('hidden');
    }
  });
});
