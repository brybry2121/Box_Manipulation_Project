document.addEventListener("DOMContentLoaded", function () {
    const boxContainer = document.getElementById("box-container"); // Container for all boxes
    const colorInput = document.getElementById("color-input"); // Input for color
    const applyColorButton = document.getElementById("apply-color-button"); // Apply color button
    const addBoxButton = document.getElementById("add-box-button"); // Add box button
    const removeBoxButton = document.getElementById("remove-box-button"); // Remove box button
    const clearColorButton = document.getElementById("clear-color-button"); // Clear colors button
    const shuffleBoxesButton = document.getElementById("shuffle-boxes-button"); // Shuffle boxes button
    const highlightEvenButton = document.getElementById("highlight-even-button"); // Highlight even button
    const highlightOddButton = document.getElementById("highlight-odd-button"); // Highlight odd button
    const resizeInput = document.getElementById("resize-input"); // Resize input
    const resizeBoxesButton = document.getElementById("resize-boxes-button"); // Resize boxes button
    const fontSizeInput = document.getElementById("font-size-input"); // Font size input
    const changeFontSizeButton = document.getElementById("change-font-size-button"); // Change font size button
    const boxCountDisplay = document.getElementById("box-count-display"); // Display for box count
  
    let boxCount = 0; // Counter to track the number of boxes
  
    // Function to add a new box
    function addNewBox() {
      const box = document.createElement("div");
      box.className = "box";
      box.textContent = `Box ${boxCount + 1}`;
      boxContainer.appendChild(box);
      boxCount++;
      updateBoxCount();
    }
  
    // Function to remove the last box
    function removeLastBox() {
      if (boxCount > 0) {
        boxContainer.lastElementChild.remove();
        boxCount--;
        updateBoxCount();
      } else {
        alert("No boxes to remove!");
      }
    }
  
    // Function to clear the background color of all boxes
    function clearBoxColors() {
      const boxes = document.querySelectorAll(".box");
      boxes.forEach(box => {
        box.style.backgroundColor = ""; // Clear background color
      });
    }
  
    // Function to shuffle the order of boxes
    function shuffleBoxes() {
      const boxes = Array.from(boxContainer.children);
      boxes.sort(() => Math.random() - 0.5); // Randomize order
      boxes.forEach(box => boxContainer.appendChild(box)); // Reappend in new order
    }
  
    // Function to highlight even-numbered boxes
    function highlightEvenBoxes() {
      const boxes = document.querySelectorAll(".box");
      boxes.forEach((box, index) => {
        box.style.backgroundColor = ((index + 1) % 2 === 0) ? "lightblue" : ""; // Highlight evens
      });
    }
  
    // Function to highlight odd-numbered boxes
    function highlightOddBoxes() {
      const boxes = document.querySelectorAll(".box");
      boxes.forEach((box, index) => {
        box.style.backgroundColor = ((index + 1) % 2 !== 0) ? "lightgreen" : ""; // Highlight odds
      });
    }
  
    // Function to resize all boxes
    function resizeBoxes() {
      const newSize = resizeInput.value.trim();
      if (!newSize || isNaN(newSize)) {
        alert("Enter a valid box size!");
        return;
      }
      const boxes = document.querySelectorAll(".box");
      boxes.forEach(box => {
        box.style.width = `${newSize}px`;
        box.style.height = `${newSize}px`;
      });
    }
  
    // Function to change font size of all boxes
    function changeFontSize() {
      const newFontSize = fontSizeInput.value.trim();
      if (!newFontSize || isNaN(newFontSize)) {
        alert("Enter a valid font size!");
        return;
      }
      const boxes = document.querySelectorAll(".box");
      boxes.forEach(box => {
        box.style.fontSize = `${newFontSize}px`;
      });
    }
  
    // Function to update the box count display
    function updateBoxCount() {
      boxCountDisplay.textContent = `Number of Boxes: ${boxCount}`;
    }
  
    // Attach event listeners
    addBoxButton.addEventListener("click", addNewBox);
    removeBoxButton.addEventListener("click", removeLastBox);
    clearColorButton.addEventListener("click", clearBoxColors);
    shuffleBoxesButton.addEventListener("click", shuffleBoxes);
    highlightEvenButton.addEventListener("click", highlightEvenBoxes);
    highlightOddButton.addEventListener("click", highlightOddBoxes);
    resizeBoxesButton.addEventListener("click", resizeBoxes);
    changeFontSizeButton.addEventListener("click", changeFontSize);
  
    // Event Listener: Apply Color Button
    applyColorButton.addEventListener("click", function () {
      const color = colorInput.value.trim();
      if (!color || !CSS.supports("color", color)) {
        alert("Enter a valid color (e.g., red or #ff5733)!");
        return;
      }
      const boxes = document.querySelectorAll(".box");
      boxes.forEach(box => {
        box.style.backgroundColor = color; // Apply the color
      });
    });
  });