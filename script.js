function searchItems() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const materials = document.querySelectorAll('#materiais-list li');
    const simulations = document.querySelectorAll('#simulados-list li');

    function filterList(items) {
        items.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(searchInput)) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        });
    }

    filterList(materials);
    filterList(simulations);
}
