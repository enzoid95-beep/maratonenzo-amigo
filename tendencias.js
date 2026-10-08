// Tendências: lista de reserva (fallback). Com a chave do TMDB, o site busca sozinho os títulos
// mais populares de cada plataforma no Brasil e os melhor avaliados do ano, e atualiza a cada 6 horas.
// Esta lista só aparece antes da primeira busca ou se o TMDB não responder.
// Capas e chave: a chave do TMDB fica em tmdbKey.
// para o site buscar as capas dos títulos que ainda não estão no catálogo.
window.CINE360_TRENDS = {
  updated: '07/10/2026',
  weeks: 'semanas de 12/09 a 03/10/2026',
  tmdbKey: '0f4de87e01bd3f8ec40409ed15ef34b9',
  streaming: [
    { platform: 'Netflix',
      tv: ['Monster: The Lizzie Borden Story', 'Not a Stranger', 'LEGO One Piece', 'East of Eden', 'Crew Girl', 'The Perfect Lie', 'The Gentlemen', 'Death of the Past', 'Fauda'],
      movie: ['Unabomber', "The Widower: 'Til Death Do Us Part", 'Demon Slayer', 'Why Did I Get Married Again?', 'The Whisper Man', 'Hercules', 'The Little Things', 'Monster-in-Law', 'The Hard Corps', 'The Breadwinner'] },
    { platform: 'HBO Max',
      tv: ['Lanterns', 'Stuart Fails to Save the Universe', 'President Curtis', 'Youth', 'Collision', 'DTF St. Louis', 'Band of Brothers'],
      movie: ['Supergirl', 'Demon Slayer', 'In the Lost Lands', 'Practical Magic', 'The 5th Wave', 'Resident Evil', 'Violent Night', '3:10 to Yuma', 'Despicable Me 3', 'Blade Runner 2049'] },
    { platform: 'Disney+',
      tv: ['Loki', 'The Drop: A Snow White Story', 'Bluey Compilations', 'Chad Powers', 'City of Blood', '9/11: Reunited', 'Furious', 'Malcolm in the Middle', 'Adults'],
      movie: ['Toy Story 5', 'The Mandalorian and Grogu', 'The Devil Wears Prada', 'Toy Story', 'Toy Story 2', 'Toy Story 3', 'Toy Story 4', 'Avengers: Endgame', 'Avengers: Infinity War'] },
    { platform: 'Prime Video',
      tv: ['Neagley', 'Reacher', 'Off Campus', 'Sterling Point', 'The Grand Tour'],
      movie: ['The Love Hypothesis', 'You+Me – Again', 'Drawn Together', 'The Runner', 'In the Grey', 'Fuze', 'The Last Sunrise'] },
    { platform: 'Paramount+',
      tv: ['Lioness', 'South Park', 'MobLand', 'Tulsa King', 'Yellowstone', 'Criminal Minds', 'Sheriff Country', 'SEAL Team', 'Dutton Ranch', 'Star Trek'],
      movie: ['Top Gun: Maverick', 'Avatar: A Lenda de Aang', 'Scream 7', 'World War Z', 'The Northman', 'The Last Stand of Ellen Cole'] },
    { platform: 'Apple TV',
      tv: ['Ted Lasso', 'Slow Horses', 'Silo', 'Dark Matter', 'Severance', 'Brothers', 'Last Seen', 'Lucky', "Widow's Bay", 'Shrinking'],
      movie: ['Mayday', 'F1', 'The Proposal', 'The Gorge', 'Napoleon', 'Greyhound', 'Luck', 'The Accountant'] }
  ],
  rated: [
    { title: 'Socorro!', critics: 92, audience: 86 },
    { title: 'Avatar Aang: O Último Mestre do Ar', critics: 89, audience: 99 },
    { title: 'Devoradores de Estrelas', critics: 95, audience: 95 },
    { title: 'As Ovelhas Detetives', critics: 95, audience: 96 },
    { title: 'Amor Tóxico', critics: 100, audience: 64 },
    { title: 'O Diabo Veste Prada 2', critics: 78, audience: 84 },
    { title: 'Vida Privada', critics: 64, audience: 82 },
    { title: 'Caminhos do Crime', critics: 88, audience: 84 }
  ],
  sources: [
    ['Miscelana: top 10 do streaming, 28/09 a 03/10/2026', 'https://miscelana.com/2026/10/03/top-10-streaming-28-09-a-03-10-de-2026-um-sucesso-puxa-todo-o-catalogo/'],
    ['Miscelana: top 10 do streaming, 13 a 19/09/2026', 'https://miscelana.com/2026/09/19/top-10-do-streaming-13-a-19-de-setembro-de-2026-desta-vez-as-novidades-venceram/'],
    ['Miscelana: top 10 do streaming, 7 a 12/09/2026', 'https://miscelana.com/2026/09/12/top-10-do-streaming-7-a-12-de-setembro-de-2026-novidades-chegam-mas-nao-empolgam/'],
    ['Bnews São Paulo: melhores filmes de 2026 segundo a Rotten Tomatoes', 'https://www.bnewssaopaulo.com.br/noticias/entretenimento/confira-a-lista-com-os-8-melhores-filmes-de-2026-segundo-o-rotten-tomatoes.html']
  ]
};
