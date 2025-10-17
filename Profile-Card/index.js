
        // Update current time in milliseconds
        function updateTime() {
            const timeElement = document.getElementById('time-ms');
            timeElement.textContent = Date.now();
        }
        
        // Initial update
        updateTime();
        
        // Update every 100ms for a smooth display
        setInterval(updateTime, 100);
        
        // Toggle checkboxes
        document.addEventListener('DOMContentLoaded', function() {
            const checkboxes = document.querySelectorAll('.checkbox-label');
            
            checkboxes.forEach(label => {
                label.addEventListener('click', function() {
                    const checkbox = this.querySelector('.custom-checkbox');
                    checkbox.classList.toggle('checked');
                });
            });
            
            // Log test IDs for verification
            const testElements = document.querySelectorAll('[data-testid]');
            console.log('Elements with data-testid attributes:');
            testElements.forEach(el => {
                // console.log(- ${el.getAttribute('data-testid')}: "${el.textContent || 'N/A'}");
            });
        });
