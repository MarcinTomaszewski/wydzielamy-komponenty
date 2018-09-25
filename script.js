/*
1. Mateusz wszystko się wyświetla w oknie przeglądarki, ale niestety w konsoli wyskakują błędy :( 
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
    }
];


var MovieTitle = React.createClass({ 
    propTypes: {
        item: React.PropTypes.object.inRequired,
    },
    render: function() {
        return React.createElement('h2', {}, this.props.item.title)
        
    },
});

var MovieDescription = React.createClass({
    propTypes: {
        item: React.PropTypes.object.inRequired,
    },
    render: function() {
        return React.createElement('p', {}, this.props.item.desc)
    },
});

var MovieYear = React.createClass({
    propTypes: {
        item: React.PropTypes.object.inRequired,
    },
    render: function() {
        return React.createElement('p', {}, this.props.item.year)
    },
});

var MoviePhoto = React.createClass({
    propTypes: {
        item: React.PropTypes.object.inRequired,
    },
    render: function() {
        return React.createElement('img', {src: this.props.item.photo})
    },
});

var Movie = React.createClass({
    propTypes: {
        item: React.PropTypes.array.inRequired,
    },
    render: function () {
        var films = this.props.item.map(function (film) {
            return (
                React.createElement('li', { key: film.id },
                    React.createElement(MovieTitle, { item: film }),
                    React.createElement(MovieDescription, { item: film }),
                    React.createElement(MovieYear, { item: film }),
                    React.createElement(MoviePhoto, { item: film }),
                )
            )
        });
        return (
            React.createElement('ul', {}, films)
        );

    },
});


var App = React.createClass({
    render: function(){
        return (            
                React.createElement('h1', {}, 'Lista filmów'),
                React.createElement(Movie, {item: movies})            
        )
    }
});

var element = React.createElement(App);
ReactDOM.render(element, document.getElementById('app'));







