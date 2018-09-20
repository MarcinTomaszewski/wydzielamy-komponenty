/*
Nie wiem czy dobrze zrozumiałem zadanie.
1. Mam stworzyć oddzielne obiekty dla każdej właściwości TITLE, DESC, YEAR, PHOTO czy dla każdego filmu? Pewnie nie :)
2. 
*/

/*
Tworzenie klasy komponentu dzięki metodzie createClass().
1. Metoda ta przyjmuje na wejściu jeden parametr — obiekt, który określa zachowanie komponentu. 
2. Obiekt ten musi zawierać przynajmniej jedną metodę, która wykona się przy próbie stworzenia elementu — jest nią render, która, jak sama nazwa wskazuje, zajmuje się jego    renderowaniem. 
3. Metoda render musi zwracać obiekt ReactElement.
4. Kolejnym atrybutem, który można umieścić w obiekcie określającym zachowanie komponentu, jest propTypes. Dzięki niemu możemy określić typ danych, które dostarczane są w     postaci właściwości (ang. props) do ReactElement w drugim parametrze metody createElement w następujący sposób: React.createElement('nazwa klasy elementu', {atrybuty},     elementy). Typowanie propsów komponentu wygląda następująco:
*/

var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        year: 2001,
        photo: 'images/harry-potter.jpg'       
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'film o królu sawanny',
        year: 1994,
        photo: 'images/król-lew.jpg'
    },
    {
        id: 3,
        title: 'Skazani na Shawshank',
        desc: 'film o niesłusznie skazanym bankierze',
        year: 1994,
        photo: 'images/shawshank.jpg'
    },
    {
        id: 4,
        title: 'Nietykalni',
        desc: 'Sparaliżowany milioner zatrudnia do opieki młodego chłopaka z przedmieścia',
        year: 2011,
        photo: 'images/nietykalni.jpg'
    },
    {
        id: 5,
        title: 'Zielona mila',
        desc: 'Emerytowany strażnik więzienny opowiada przyjaciółce o niezwykłym mężczyźnie',
        year: 1999,
        photo: 'images/zielona-mila.jpg'
    },
    {
        id: 6,
        title: 'Ojciec chrzestny',
        desc: 'Opowieść o nowojorskiej rodzinie mafijnej',
        year: 1972,
        photo: 'images/ojciec-chrzestny.jpg'
    },
];
//odpowiednie umieszczenie elementów w liście
/*var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );*/

//ReactDOM.render(element, document.getElementById('app'));
//metoda map() przyjmuje jako parametr funkcje, która przechodzi przez każdy element tablicy, który następnie jest mapowany do postaci ReactElementu korzystającego z informacji o filmie (movie.title i movie.desc)

var moviesElements = movies.map(function (movie) {
    return (React.createElement('li', { key: movie.id },
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('p', {}, 'Rok produkcji: ' + movie.year),
        React.createElement('img', { src: movie.photo })
    ))
});

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.array.isRequired,
    },
    render: function() {        
        return (
            React.createElement('div', {},
                React.createElement('h1', {}, 'Lista filmów'),
                React.createElement('ul', {}, moviesElements)
            )
        )
    }
});

var element = React.createElement(Movie, { movie: moviesElements });

ReactDOM.render(element, document.getElementById('app'));

/*var GalleryItem = React.createClass({                           //do obgadania na rozmowie
    propTypes: {
        image: React.PropTypes.object.isRequired,
    },

    render: function () {
        return (
            React.createElement('div', {},
                React.createElement('h2', {}, this.props.image.name),
                React.createElement('img', { src: this.props.image.src })
            )
        )
    },
});*/



//tworzę odpowiedni obiekt 
/*var image = {
    name: 'Kotek',
    src: 'http://imgur.com/n8OYCzR.png'
};*/

//i przekazuje go do komponentu przez props
//var element = React.createElement(GalleryItem, { image: image });

//wyświetlam element na stronie w elemencie o id app


