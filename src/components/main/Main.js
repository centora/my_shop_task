import { UserForm } from '../userForm';
import './main.scss';

export class Main extends Component {
  render() {
    const { title } = this.props;
    return (
      <main className="main">
        <div className="content">
          <h1>{title}</h1>
          <UserForm />
        </div>
      </main>
    );
  }
}
