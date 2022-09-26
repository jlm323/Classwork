const React = require('react');

class New extends React.Component {
    render() {
        return (
            <div>
                <h1>New Page: Meat</h1>
                <form action="/meat" method="POST">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name"/><br/><br/>

                    <label htmlFor="type">Type:</label>
                    <input type="text" id="type" name="type"/><br/><br/>

                    <input type="submit" value="Create meat"/>
                </form>
            </div>
        )
    }
}

module.exports = New;