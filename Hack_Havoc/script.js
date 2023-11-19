
    function displayData() {
            // Dummy data (replace this with real data)
            const data = {
                firNumber: document.getElementById('firNumber').value,
                categories: [
                    { name: 'CDR', content: ['Call Record 1', 'Call Record 2'] },
                    { name: 'Bank Accounts', content: ['Account 1', 'Account 2'] },
                    { name: 'IDPR', content: ['IDPR 1', 'IDPR 2'] }
                ]
            };

            const dataDisplay = document.getElementById('dataDisplay');
            dataDisplay.innerHTML = '';

            data.categories.forEach(category => {
                const folder = document.createElement('div');
                folder.className = 'folder';
                folder.innerHTML = `<strong>${category.name}</strong>`;

                category.content.forEach(item => {
                    const listItem = document.createElement('div');
                    listItem.innerHTML = item;
                    folder.appendChild(listItem);
                });

                dataDisplay.appendChild(folder);
            });
        }

