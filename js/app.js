document.addEventListener('DOMContentLoaded', function() {
    const radioInputs = document.querySelectorAll('input[type="radio"]');
    const images = document.querySelectorAll('.p2 img');

    radioInputs.forEach(function(input, index) {
      input.addEventListener('change', function() {
        if (input.checked) {
          images.forEach(function(image) {
            image.style.display = 'none';
          });
          const selectedImage = document.getElementById('image' + (index + 1));
          selectedImage.style.display = 'block';
        }
      });
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const sliderValueDisplay = document.getElementById('slider-value-display');

    slider.addEventListener('input', function() {
      const value = slider.value;
      sliderValueDisplay.textContent = value;
    });
  });