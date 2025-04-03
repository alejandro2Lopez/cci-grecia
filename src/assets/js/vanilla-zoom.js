(function(window){
    function define_library() {
        var vanillaZoom = {};
        vanillaZoom.init = function(el) {

            var container = document.querySelector(el);
            if(!container) {
                console.error('No container element. Please make sure you are using the right markup.');
                return;
            }

            var firstSmallImage = container.querySelector('.small-preview');
            var zoomedImage = container.querySelector('.zoomed-image');

            if(!zoomedImage) {
                console.error('No zoomed image element. Please make sure you are using the right markup.');
                return;
            }

            if(!firstSmallImage) {
                console.error('No preview images on page. Please make sure you are using the right markup.');
                return;
            }
            else {
                // Set the source of the zoomed image.
                zoomedImage.style.backgroundImage = 'url('+ firstSmallImage.src +')';
                firstSmallImage.classList.add('active');
            }   

            // Change the selected image to be zoomed when clicking on the previews.
            container.addEventListener("click", function (event) {
                var elem = event.target;

                if (elem.classList.contains("small-preview")) {
                    
                    var allSmallPreviews = container.querySelectorAll(".small-preview");
                    
                    allSmallPreviews.forEach(function (preview) {
                        preview.classList.remove('active');
                    })
                    
                    elem.classList.add('active');
                    
                    var imageSrc = elem.src;
                    zoomedImage.style.backgroundImage = 'url('+ imageSrc +')';
                }
            });
            
            // Zoom image on mouse enter.
            zoomedImage.addEventListener('mouseenter', function(e) {
                this.style.backgroundSize = "250%"; 
            }, false);


            // Show different parts of image depending on cursor position.
            zoomedImage.addEventListener('mousemove', function(e) {
                
                // getBoundingClientReact gives us various information about the position of the element.
                var dimentions = this.getBoundingClientRect();

                // Calculate the position of the cursor inside the element (in pixels).
                var x = e.clientX - dimentions.left;
                var y = e.clientY - dimentions.top;

                // Calculate the position of the cursor as a percentage of the total width/height of the element.
                var xpercent = Math.round(100 / (dimentions.width / x));
                var ypercent = Math.round(100 / (dimentions.height / y));

                // Update the background position of the image.
                this.style.backgroundPosition = xpercent+'% ' + ypercent+'%';
            
            }, false);


            // When leaving the container zoom out the image back to normal size.
            zoomedImage.addEventListener('mouseleave', function(e) {
                this.style.backgroundSize = "contain"; 
                this.style.backgroundPosition = "left center"; 
            }, false);

        }
        return vanillaZoom;
    }

    // Add the vanillaZoom object to global scope.
    if(typeof(vanillaZoom) === 'undefined') {
        window.vanillaZoom = define_library();
    }
    else{
        console.log("Library already defined.");
    }
})(window);


//NIEVE

/*const snowflakeCount = 100; // Número de copos
    const snowflakeSymbols = ['❄', '✻', '✼', '❅', '❆']; // Diferentes símbolos de copos

    // Crear los copos de nieve
    for (let i = 0; i < snowflakeCount; i++) {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.textContent = snowflakeSymbols[Math.floor(Math.random() * snowflakeSymbols.length)];
      snowflake.style.left = Math.random() * 100 + 'vw'; // Posición horizontal aleatoria
      snowflake.style.fontSize = Math.random() * 20 + 10 + 'px'; // Tamaño aleatorio
      snowflake.style.animationDuration = Math.random() * 5 + 5 + 's'; // Velocidad aleatoria
      snowflake.style.animationDelay = Math.random() * 5 + 's'; // Retraso aleatorio
      document.body.appendChild(snowflake);
    }*/


// Amor y la AMISTAD
/*
     const createHeartContainer = () => {
            const heartContainer = document.createElement('div');
            heartContainer.className = 'heart-container';
            heartContainer.style.position = 'fixed';
            heartContainer.style.top = '0';
            heartContainer.style.left = '0';
            heartContainer.style.width = '100%';
            heartContainer.style.height = '100%';
            heartContainer.style.pointerEvents = 'none';
            heartContainer.style.zIndex = '9999';
            document.body.appendChild(heartContainer);
            return heartContainer;
        };

        const heartContainer = createHeartContainer();

        function createHeart() {
            const heart = document.createElement('div');
            heart.className = 'heart';

            const size = Math.random() * 15 + 10; 
            heart.style.width = `${size}px`;
            heart.style.height = `${size}px`;

            const position = Math.random() * (window.innerWidth - size * 2) + size; 
            heart.style.left = `${position}px`;

            const duration = Math.random() * 3 + 3; 
            heart.style.animationDuration = `${duration}s`;

            heart.style.animationDelay = `${Math.random()}s`;

            heartContainer.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, duration * 1000);
        }

        setInterval(createHeart, 300); 
*/

//Halloween
  /*const createHalloweenContainer = () => {
            const container = document.createElement('div');
            container.className = 'halloween-container';
            document.body.appendChild(container);
            return container;
        };

        const halloweenContainer = createHalloweenContainer();

        function createHalloweenIcon() {
            const icons = ['🎃', '👻', '🦇', '🕷️', '🧟']; 
            const icon = document.createElement('div');
            icon.className = 'halloween-icon';
            icon.textContent = icons[Math.floor(Math.random() * icons.length)];

            const size = Math.random() * 20 + 20; 
            icon.style.fontSize = `${size}px`;

            const position = Math.random() * (window.innerWidth - size); 
            icon.style.left = `${position}px`;

            const duration = Math.random() * 3 + 3; 
            icon.style.animationDuration = `${duration}s`;

            icon.style.animationDelay = `${Math.random()}s`;

            halloweenContainer.appendChild(icon);

            setTimeout(() => {
                icon.remove();
            }, duration * 1000);
        }

        setInterval(createHalloweenIcon, 300); */