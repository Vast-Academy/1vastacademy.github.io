const buttonsInfo = [
  { text: "Website Model 1", url: "../model1/index.html" },
  { text: "Website Model 2", url: "../model2/index.html" },
  { text: "Website Model 3", url: "../model3/index.html" }
];

function createButtons() {
  const container = document.createElement('div');
  container.classList.add('fixed-buttons');
  container.style.position = 'fixed';
  container.style.top = '85%';
  container.style.left = '50%';
  container.style.transform = 'translate(-50%, -50%)';
  container.style.zIndex = '9999';
  container.style.display = 'flex';
  container.style.justifyContent = 'center';
  container.style.margin = '10px';

  buttonsInfo.forEach(button => {
      const buttonElement = document.createElement('button');
      buttonElement.textContent = button.text;
      buttonElement.style.display = 'block';
      buttonElement.style.width = '200px';
      buttonElement.style.height = '40px';
      buttonElement.style.marginBottom = '10px';
      buttonElement.style.margin = '20px';
      buttonElement.style.backgroundColor = 'white';
      buttonElement.style.boxShadow = '3px 3px 3px 4px rgba(0, 0, 0, 0.3)';
      buttonElement.style.transition = 'background-color 0.3s ease, box-shadow 0.3s ease';
      buttonElement.style.color = 'black';
      buttonElement.style.border = 'none';
      buttonElement.style.cursor = 'pointer';
      buttonElement.style.transition = 'background-color 0.3s ease';
      buttonElement.style.fontSize = '15px';
      buttonElement.style.fontWeight = 'bold';

      buttonElement.addEventListener('click', () => {
          window.location.href = button.url;
      });

      buttonElement.addEventListener('mouseover', () => {
          buttonElement.style.backgroundColor = '#0E2E50';
          buttonElement.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.3)';
          buttonElement.style.color = 'white';
      });

      buttonElement.addEventListener('mouseout', () => {
          buttonElement.style.backgroundColor = 'white';
          buttonElement.style.boxShadow = '3px 3px 3px 4px rgba(0, 0, 0, 0.3)';
          buttonElement.style.color = 'black';
      });

      container.appendChild(buttonElement);
  });

  document.body.appendChild(container);

  const selectModelButton = document.createElement('button');
  selectModelButton.textContent = "Select This Model";
  selectModelButton.style.position = 'fixed';
  selectModelButton.style.top = '70%';
  selectModelButton.style.left = '50%';
  selectModelButton.style.transform = 'translate(-50%, -50%)';
  selectModelButton.style.width = '200px';
  selectModelButton.style.height = '40px';
  selectModelButton.style.margin = '10px';
  selectModelButton.style.backgroundColor = 'white';
  selectModelButton.style.boxShadow = '3px 3px 3px 4px rgba(0, 0, 0, 0.3)';
  selectModelButton.style.transition = 'background-color 0.3s ease, box-shadow 0.3s ease';
  selectModelButton.style.color = 'black';
  selectModelButton.style.border = 'none';
  selectModelButton.style.cursor = 'pointer';
  selectModelButton.style.fontSize = '20px';
  selectModelButton.style.fontWeight = 'bold';

  selectModelButton.addEventListener('click', () => {
      const modal = document.createElement('div');
      modal.style.position = 'fixed';
      modal.style.top = '50%';
      modal.style.left = '50%';
      modal.style.transform = 'translate(-50%, -50%)';
      modal.style.backgroundColor = 'white';
      modal.style.padding = '20px';
      modal.style.borderRadius = '5px';
      modal.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.3)';
      modal.style.zIndex = '10000';

      const confirmationText = document.createElement('p');
      confirmationText.textContent = "Are you sure you want to select this model?";
      confirmationText.style.fontSize = '18px';
      confirmationText.style.fontWeight = 'bold';
      confirmationText.style.marginBottom = '20px';

      const yesButton = document.createElement('button');
      yesButton.textContent = "Yes";
      yesButton.style.width = '100px';
      yesButton.style.height = '40px';
      yesButton.style.backgroundColor = '#0E2E50';
      yesButton.style.color = 'white';
      yesButton.style.border = 'none';
      yesButton.style.borderRadius = '5px';
      yesButton.style.cursor = 'pointer';
      yesButton.style.marginRight = '10px';
      yesButton.style.fontSize = '16px';
      yesButton.style.fontWeight = 'bold';
      yesButton.addEventListener('click', () => {
        const selectedModelUrl = localStorage.getItem('selectedModelUrl');
        if (selectedModelUrl) {
            localStorage.setItem('previousModelUrl', selectedModelUrl);
        }
        modal.remove();
        // Hide 'Select This Model' button
        selectModelButton.style.display = 'none';
        // Remove hide class from 'Check Website Status' button
        const checkStatusButton = document.querySelector('.hide');
        checkStatusButton.classList.remove('hide');
        // Set the URL for the 'Check Website Status' button to the selected model
        checkStatusButton.setAttribute('href', selectedModelUrl);
    });

      const noButton = document.createElement('button');
      noButton.textContent = "No";
      noButton.style.width = '100px';
      noButton.style.height = '40px';
      noButton.style.backgroundColor = '#C0392B';
      noButton.style.color = 'white';
      noButton.style.border = 'none';
      noButton.style.borderRadius = '5px';
      noButton.style.cursor = 'pointer';
      noButton.style.fontSize = '16px';
      noButton.style.fontWeight = 'bold';
      noButton.addEventListener('click', () => {
          modal.remove();
      });

      modal.appendChild(confirmationText);
      modal.appendChild(yesButton);
      modal.appendChild(noButton);
      document.body.appendChild(modal);
  });

  document.body.appendChild(selectModelButton);

  const backButton = document.createElement('button');
  backButton.textContent = "Back to the Client Page";
  backButton.style.position = 'fixed';
  backButton.style.top = '100px';
  backButton.style.left = '10px';
  backButton.style.width = '200px';
  backButton.style.height = '40px';
  backButton.style.backgroundColor = 'white';
  backButton.style.color = 'black';
  backButton.style.boxShadow = '3px 3px 3px 4px rgba(0, 0, 0, 0.3)';
  backButton.style.transition = 'background-color 0.3s ease, box-shadow 0.3s ease';
  backButton.style.border = 'none';
  backButton.style.borderRadius = '5px';
  backButton.style.cursor = 'pointer';
  backButton.style.zIndex = '9999';
  backButton.style.fontSize = '16px';
  backButton.style.fontWeight = 'bold';
  backButton.addEventListener('click', () => {
      window.location.href = "../client.html";
  });

  document.body.appendChild(backButton);

 

}

document.addEventListener('DOMContentLoaded', createButtons);
