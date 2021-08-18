export const subtitles = (category) => {
  switch (category) {
    case 'en':
      return {
        subtitle: 'Start by typing a word in the search bar',
        notFound: 'No results',
      };
    case 'es':
      return {
        subtitle: 'Comience escribiendo una palabra en la barra de búsqueda',
        notFound: 'No hay resultados',
      };
    case 'it':
      return {
        subtitle: 'Inizia digitando una parola nella barra di ricerca',
        notFound: 'Nessun risultato',
      };
    case 'fr':
      return {
        subtitle: 'Commencez par taper un mot dans la barre de recherche',
        notFound: "Il n'y a pas de résultats",
      };
    case 'de':
      return {
        subtitle: 'Geben Sie zunächst ein Wort in die Suchleiste ein',
        notFound: 'Keine Ergebnisse',
      };
    case 'ru':
      return {
        subtitle: 'Начните с ввода слова в строке поиска',
        notFound: 'Нет результатов',
      };
    case 'ja':
      return {
        subtitle: '検索バーに単語を入力することから始めます',
        notFound: '結果がありません',
      };
    case 'ko':
      return {
        subtitle: '검색 창에 단어를 입력하여 시작',
        notFound: '결과 없음',
      };
    case 'hi':
      return {
        subtitle: 'खोज बार में एक शब्द टाइप करके प्रारंभ करें',
        notFound: 'कोई परिणाम नहीं ',
      };
    case 'ar':
      return {
        subtitle: 'ابدأ بكتابة كلمة في شريط البحث',
        notFound: 'لا نتائج',
      };
    case 'tr':
      return {
        subtitle: 'Arama çubuğuna bir kelime yazarak başlayın',
        notFound: 'Sonuç yok',
      };

    default:
      return {
        subtitle: 'Start by typing a word in the search bar',
        notFound: 'No results',
      };
  }
};