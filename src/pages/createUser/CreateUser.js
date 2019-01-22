import './createUser.scss';
import { UserForm } from 'components/userForm';
import { newUser } from 'services';

export class CreateUser extends Component {
  createNewUser = (data) => {
    newUser(data).then(() => this.props.history.push('/success'));
  };

  render() {
    return (
      <>
        <h1>Create User</h1>
        <UserForm onSave={this.createNewUser} />
      </>
    );
  }
}
