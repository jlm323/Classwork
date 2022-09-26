const React = require('react');

class Index extends React.Component {
    render() {
        // object destructuring (short for const fruits = this.props.fruits)
        const { meat } = this.props;

        return (
            <div>
                <h1>Meat Index Page</h1>
                <ul>
                    {meat.map((meat, i) => {
                        return (
                            <li key={i}>
                                The <a href={`/meat/${i}`}>{meat.name}</a> is {meat.type}.
                            </li>
                        )
                    })}
                    
                </ul>

                <nav>
                    <a href='/meat/New'>Create a new meat</a>
                </nav>
            </div>
        );
    }
}

module.exports = Index;