
document.addEventListener('DOMContentLoaded', () => {
    fetch('https://project-json-g3iq.onrender.com/data')
        .then(response => response.json())
        .then(data => {
            console.log('Data fetched:', data); // Debugging line
            
            let intnlDiv = document.getElementById('international');
            let leagueDiv = document.getElementById('league');
            let womenDiv = document.getElementById('women');
			let domesticDiv=document.getElementById('domestic')
            let parentDiv = document.querySelector('.parentDiv');
            let main=document.getElementById('News-latest')
            let btn=document.getElementById('btn')

            // Function to clear previous content and display match details
            function displayMatches(typeIndex) {
                // Clear previous content
                parentDiv.innerHTML = '';

                // Log the data structure for debugging
                console.log('Data for typeIndex:', typeIndex, data[0]?.typeMatches[typeIndex]);

                // Check if the data and typeIndex are valid
                if (data[0] && data[0].typeMatches[typeIndex] && data[0].typeMatches[typeIndex].seriesMatches) {
                    data[0].typeMatches[typeIndex].seriesMatches.forEach(series => {
                        if (series.seriesAdWrapper && series.seriesAdWrapper.matches) {
                            series.seriesAdWrapper.matches.forEach(matchData => {
                                matchDetails(matchData);
                            });
                        } else {
                            console.error('SeriesAdWrapper or matches is undefined');
                        }
                    });
                } else {
                    console.error('No matches found or invalid index for typeIndex:', typeIndex);
                }
            }

            // Create a function to display match details in individual divs
            function matchDetails(matchData) {
                let matchDiv = document.createElement("div");
                matchDiv.classList.add('matchDiv'); // Apply the matchDiv class
                matchDiv.innerHTML = `
                    <div class="match-info">
                    <div>${matchData.matchInfo.team1.teamSName}</div>
                    <div class="score-info"> ${matchData.matchScore.team1Score.inngs1.runs}/${matchData.matchScore.team1Score.inngs1.wickets} in ${matchData.matchScore.team1Score.inngs1.overs} overs</div>
                    </div>
                    <div class="match-info">
                    <div>${matchData.matchInfo.team2.teamSName}</div>
                    <div class="score-info"> ${matchData.matchScore.team2Score.inngs1.runs}/${matchData.matchScore.team2Score.inngs1.wickets} in ${matchData.matchScore.team2Score.inngs1.overs} overs</div>
                    </div>
                    <div style="color:red";> ${matchData.matchInfo.status}</div>
                    <div><strong>Venue:</strong> ${matchData.matchInfo.venueInfo.ground}, ${matchData.matchInfo.venueInfo.city}</div>

                `;
                parentDiv.appendChild(matchDiv);
            }

            // Event listener for the International section
            intnlDiv.addEventListener('click', () => {
                displayMatches(0); // Display international matches (index 0)
                main.innerText=''
                // main.style.marginTop='50px'
                // window.open('','_blank')
                
            });

            // Event listener for the League section
            leagueDiv.addEventListener('click', () => {
                displayMatches(3); // Display league matches (index 3)
                 main.innerText=''
            });

            // Event listener for the Women's section
            womenDiv.addEventListener('click', () => {
                displayMatches(2); // Display women's matches (index 4)
                 main.innerText=''
            });

			domesticDiv.addEventListener('click',()=>{
				displayMatches(1) 
                 main.innerText=''
			})
            btn.addEventListener('click',()=>{
                window.open('./indexhome.html')
            })
        })

        .catch(error => console.error('Error fetching data:', error));
});
