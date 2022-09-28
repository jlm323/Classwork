const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class Edit extends React.Component {
    render() {

        let { meat } = this.props;

        return (
            <DefaultLayout title="Edit a meat" foodGroup="meat">
            <div>
                <h1>Edit Page</h1>
                <form action={`/meat/${meat._id}?_method=PUT`} method="POST">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" defaultValue={meat.name}/><br/><br/>

                    <label htmlFor="type">Type:</label>
                    <input type="text" id="type" name="type" defaultValue={meat.type}/><br/><br/>


                    <input type="submit" value="Edit meat"/>
                </form>
            </div>
            </DefaultLayout>
        );
    }
}

module.exports = Edit;