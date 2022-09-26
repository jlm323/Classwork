const React = require('react');

class Index extends React.Component {
    render() {
        // object destructuring (short for const fruits = this.props.fruits)
        const { fruits } = this.props;


        // map method
        // loops over data, manipulates data at each index, returns new array with new data

        /* 
            [
                { name: 'pear', ...},
                { name: 'banana', ...},
                { name: 'apple', ...}
            ]
        */
        return (
            <div>
                <h1>Fruits Index Page</h1>
                <ul>
                    {fruits.map((fruit, i) => {
                        return (
                            <li key={i}>
                                The <a href={`/fruits/${i}`}>{fruit.name}</a> is {fruit.color}.
                            </li>
                        )
                    })}
                    
                </ul>

                <nav>
                    <a href='/fruits/New'>Create a new fruit</a>
                </nav>
            </div>
        );
    }
}

module.exports = Index;