function submitScore() {
    const playerName = document.getElementById('player-name').value;
    const current_score = localStorage.getItem('currentPlayerScore');
  
    if (current_score && playerName !== "") {
      console.log('depois');
      console.log(localStorage.getItem('currentPlayerScore'));
      console.log(playerName);
  
      localStorage.setItem('currentPlayerName', playerName);
      localStorage.setItem('currentPlayerScore', current_score);
  
      const user_score = JSON.parse(localStorage.getItem('scores')) || [];
      user_score.push({ name: playerName, score: current_score });
  
      user_score.sort((a, b) => b.score - a.score);
      localStorage.setItem('scores', JSON.stringify(user_score));
      console.log(`Pontos atuais:`);
      console.log(user_score);
  
      window.location.href = 'ranking.html';
    } else {
      alert('Por favor, insira seu nome.');
    }
  }