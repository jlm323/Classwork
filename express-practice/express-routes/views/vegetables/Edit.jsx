const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class Edit extends React.Component {
    render() {

        let { vegetables } = this.props;

        return (
            <DefaultLayout title="Edit a vegetable" foodGroup="vegetables">
            <div>
                <h1>Edit Vegetable Page</h1>
                <form action={`/vegetables/${vegetables._id}?_method=PUT`} method="POST">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" defaultValue={vegetables.name}/><br/><br/>

                    <label htmlFor="type">Type:</label>
                    <input type="text" id="type" name="type" defaultValue={vegetables.type}/><br/><br/>


                    <input type="submit" value="Edit vegetable"/>
                </form>
            </div>
            </DefaultLayout>
        );
    }
}

module.exports = Edit;