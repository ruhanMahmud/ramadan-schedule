
        // Function to convert English numerals to Bengali numerals
        function toBengaliNumerals(number) {
            const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
            const bengaliNumbers = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
            return number.toString().split('').map(char => {
                const index = englishNumbers.indexOf(char);
                return index !== -1 ? bengaliNumbers[index] : char;
            }).join('');
        }
    
        // Function to convert English month names to Bengali month names
        function toBengaliMonth(month) {
            const monthMap = {
                'March': 'মার্চ',
                'April': 'এপ্রিল',
                'May': 'মে',
                'June': 'জুন',
                'July': 'জুলাই',
                'August': 'আগস্ট',
                'September': 'সেপ্টেম্বর',
                'October': 'অক্টোবর',
                'November': 'নভেম্বর',
                'December': 'ডিসেম্বর',
                'January': 'জানুয়ারি',
                'February': 'ফেব্রুয়ারি'
            };
            return monthMap[month] || month;
        }
    
        // Get today's date in the format "DD Month" or "D Month" (e.g., "03 March" or "10 March")
        const today = new Date();
        let todayDay = today.getDate(); // Get the day (e.g., 3 or 10)
        
        // Add leading zero for days 1 to 9
        if (todayDay >= 1 && todayDay <= 9) {
            todayDay = '0' + todayDay; // Add leading zero (e.g., "03")
        }
        
        const todayMonth = today.toLocaleString('en-US', { month: 'long' }); // Get the month (e.g., March)
        const todayDateString = `${toBengaliNumerals(todayDay)} ${toBengaliMonth(todayMonth)}`; // Combine into "০৩ মার্চ" or "১০ মার্চ"
    
        // Log today's date for debugging
        console.log("Today's Date:", todayDateString);
    
        // Loop through all rows in the table
        const rows = document.querySelectorAll('tbody tr');
        rows.forEach(row => {
            const dateCell = row.querySelector('td:nth-child(2)'); // Get the date cell (2nd column)
            if (dateCell) {
                let rowDate = dateCell.textContent.trim(); // Get the row's date (e.g., "০৩ মার্চ" or "১০ মার্চ")
                console.log("Row Date:", rowDate); // Log each row's date for debugging
    
                // Remove any extra spaces or non-visible characters
                rowDate = rowDate.replace(/\s+/g, ' ').trim();
    
                // Compare the row's date with today's date
                if (rowDate === todayDateString) {
                    row.classList.add('today'); // Add the 'today' class to the matching row
                    console.log("Today's row highlighted:", row); // Log the highlighted row
                } else {
                    row.classList.remove('today'); // Remove 'today' class from other rows
                }
            }
        });
    