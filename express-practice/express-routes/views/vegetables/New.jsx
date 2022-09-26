const React = require('react');

class New extends React.Component {
    render() {
        return (
            <div>
                <h1>New Page: Vegetables</h1>
                <form action="/vegetables" method="POST">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name"/><br/><br/>

                    <label htmlFor="color">Color:</label>
                    <input type="text" id="color" name="color"/><br/><br/>

                    <input type="submit" value="Create vegetable"/>
                </form>
            </div>
        )
    }
}

module.exports = New;